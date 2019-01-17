import React from "react";
import ReactDOM from "react-dom";
import Cropper from "../../src/component/simple-react-cropper";

const uploadToServer = blob => {
  console.log(blob);
};

const afterCrop = () => {
  console.log("close cropper");
};

const Root = () => (
  <div>
    <Cropper
      aspectRatio={4 / 4}
      width={500}
      height={500}
      upload={uploadToServer}
      afterCrop={afterCrop}
      containerStyle={{
        marginTop: "1rem",
        maxHeight: "50vh",
        minHeight: "50vh",
        padding: "1rem",
        overflow: "hidden",
        textAlign: "center"
      }}
    />
  </div>
);

ReactDOM.render(<Root />, document.getElementById("root"));
