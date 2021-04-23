import React from "react";
import Unity, { UnityContent } from "react-unity-webgl";

const unityContent = new UnityContent(
    process.env.PUBLIC_URL + "/webgl-build/WebGL Build.json",
    process.env.PUBLIC_URL + "/webgl-build/UnityLoader.js",
);

const UnityApp = () => {
    return <Unity unityContent={unityContent} />;
};

export default UnityApp;