import React from "react";
import "cropperjs/dist/cropper.css";
import "../static/css/simple-react-cropper.css";
export interface IPropsSimpleReactCropper {
    aspectRatio: number;
    width?: number;
    height?: number;
    fillColor?: string;
    upload: (file: Blob) => void;
    afterCrop?: () => void;
    containerStyle?: React.CSSProperties;
}
declare class SimpleReactCropper extends React.Component<IPropsSimpleReactCropper, {
    src: any;
}> {
    private cropper;
    private img;
    state: {
        src: any;
    };
    componentDidMount(): void;
    _uploadToServer: () => void;
    _handleFileChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
    render(): JSX.Element;
}
export default SimpleReactCropper;
