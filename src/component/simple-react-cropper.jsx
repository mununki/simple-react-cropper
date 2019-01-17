import React from "react";
import Cropper from "cropperjs";
import "cropperjs/dist/cropper.css";
import "../static/css/simple-react-cropper.css";
import dummy from "../static/img/dummy.png";

class SimpleReactCropper extends React.Component {
  state = {
    src: dummy
  };
  _initCropper = () => {
    this.cropper = new Cropper(this.img, {
      aspectRatio: this.props.aspectRatio
    });
  };
  _uploadToServer = () => {
    this.cropper
      .getCroppedCanvas({
        width: this.props.width || 500,
        height: this.props.height || 500,
        minWidth: 0,
        minHeight: 0,
        maxWidth: 1024,
        maxHeight: 1024,
        fillColor: "#fff",
        imageSmoothingEnabled: true,
        imageSmoothingQuality: "high"
      })
      .toBlob(blob => {
        this.props.upload(blob);
      });
    if (this.props.afterCrop) this.props.afterCrop();
  };
  _handleFileChange = e => {
    this._initCropper();
    const {
      target: {
        validity,
        files: [file]
      }
    } = e;
    if (validity.valid) {
      const reader = new FileReader();
      reader.onload = () => {
        this.setState({ src: reader.result });
        this.cropper
          .reset()
          .clear()
          .replace(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };
  render() {
    return (
      <div>
        <div style={this.props.containerStyle}>
          <img
            ref={node => (this.img = node)}
            src={this.state.src}
            style={{ maxWidth: "100%" }}
          />
        </div>
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            marginTop: "1rem"
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
