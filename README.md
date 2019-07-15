# Simple-React-Cropper

### [Demo](https://mattdamon108.github.io/simple-react-cropper/)

[![npm version](https://badge.fury.io/js/simple-react-cropper.svg)](https://badge.fury.io/js/simple-react-cropper)

This is the tiny and simple image cropper & resizer based on [Cropper.js](https://fengyuanchen.github.io/cropperjs/). Simply it is wrapped to React Component to allow to use more easily in React project.

There are many functions of Cropper.js but this module is simplified with main features in purpose of avatar image crop & resize in most user-profile web page.

### Features

1. Crop and Resize the images in Web canvas (powered by [Cropper.js](https://fengyuanchen.github.io/cropperjs/)).
2. Handle the cropped and resized images with function props.
3. Style the container of crop canvas.

### Install

```shell
$ npm i simple-react-cropper

# or

$ yarn add simple-react-cropper
```

### Example

```javascript
import React from "react";
import ReactDOM from "react-dom";
import Cropper from "simple-react-cropper";

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

```

### Props

| Props          | Type                | required | Default   | Descriptioin                                                             |
| -------------- | ------------------- | -------- | --------- | ------------------------------------------------------------------------ |
| aspectRatio    | number              | true     | NaN       | Define the fixed crop box ratio. By default, the crop box has free ratio |
| width          | number              | false    | 500       | The width of output image                                                |
| height         | number              | false    | 500       | The height of output image                                               |
| upload         | function            | true     | undefined | The function to handle the output (blob type)                            |
| afterCrop      | function            | false    | undefined | The function to be called after confirming cropping                      |
| fillColor      | string              | false    | "#FFF"    | The color to be filled in blank area after crop                          |
| containerStyle | React.CSSProperties | false    | undefined | The object to style the parent container                                 |


