import React from "react";
import ReactDOM from "react-dom";
import Cropper from "../../src";
import "./index.css";

const uploadToServer = (blob: Blob) => {
  console.log(blob);
};

const afterCrop = () => {
  console.log("close cropper");
};

const Root = () => (
  <div className="container-demo">
    <Cropper
      aspectRatio={4 / 4}
      width={500}
      height={500}
      upload={uploadToServer}
      afterCrop={afterCrop}
      containerStyle={{ maxHeight: "80vh", borderRadius: "10px" }}
    />
  </div>
);

ReactDOM.render(<Root />, document.getElementById("root"));
