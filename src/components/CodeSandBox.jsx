import React from "react";


export default function CodeSandBox() {
  return (
    <iframe src="https://codesandbox.io/embed/muddy-cloud-xzifix?fontsize=14&hidenavigation=1&theme=dark"
      style={{

        width: '100%',
        height: 500,
        border: 0,
        bordeRadius: 4,
        overflow: 'hidden',
      }}
      title="pixel-streaming"
      allow="accelerometer; ambient-light-sensor; camera; encrypted-media; geolocation; gyroscope; hid; microphone; midi; payment; usb; vr; xr-spatial-tracking"
      sandbox="allow-forms allow-modals allow-popups allow-presentation allow-same-origin allow-scripts"
    ></iframe>
  )
}