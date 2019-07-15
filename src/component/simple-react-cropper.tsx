import React from "react";
import Cropper from "cropperjs";
import "cropperjs/dist/cropper.css";
import "../static/css/simple-react-cropper.css";
import dummy from "../static/img/dummy.png";

export interface IPropsSimpleReactCropper {
  aspectRatio: number;
  width?: number;
  height?: number;
  fillColor?: string;
  upload: (file: Blob) => void;
  afterCrop?: () => void;
  containerStyle?: React.CSSProperties;
}

class SimpleReactCropper extends React.Component<IPropsSimpleReactCropper, { src: any }> {
  private cropper: any;
  private img: any;

  state = {
    src: dummy
  };

  componentDidMount() {
    this.cropper = new Cropper(this.img, {
      viewMode: 1,
      aspectRatio: this.props.aspectRatio,
      zoomable: false
    });
  }

  _uploadToServer = () => {
    this.cropper
      .getCroppedCanvas({
        width: this.props.width || 500,
        height: this.props.height || 500,
        minWidth: 0,
        minHeight: 0,
        maxWidth: 1024,
        maxHeight: 1024,
        fillColor: this.props.fillColor || "#fff",
        imageSmoothingEnabled: true,
        imageSmoothingQuality: "high"
      })
      .toBlob((blob: Blob) => {
        this.props.upload(blob);
      });
    if (this.props.afterCrop) this.props.afterCrop();
  };

  _handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    e.stopPropagation();

    const {
      target: { validity, files }
    } = e;

    if (validity.valid && files) {
      const reader = new FileReader();
      reader.onload = () => {
        this.setState({ src: reader.result });
        this.cropper
          .reset()
          .clear()
          .replace(reader.result);
      };
      reader.readAsDataURL(files[0]);
    }
  };

  render() {
    return (
      <div className="container">
        <div className="container-img" style={this.props.containerStyle}>
          <img ref={node => (this.img = node)} id="avatar_img" src={this.state.src} />
        </div>
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            paddingTop: "1rem"
          }}
        >
          <input
            type="file"
            id="origin-image"
            name="origin-image"
            className="input-file"
            onChange={this._handleFileChange}
          />
          <label htmlFor="origin-image">Choose a file</label>

          <button className="button-save" onClick={this._uploadToServer}>
            Save
          </button>
        </div>
      </div>
    );
  }
}

export default SimpleReactCropper;
