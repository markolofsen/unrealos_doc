---
id: description
title: Description
sidebar_label: Description
slug: /
---


# PixelStreaming for ReactJS

![img](/assets/preview.png)


### MetaEditor is a professional web application development solution based on ReactJS and PixelStreaming.

>  The standard implementation of PixelStreaming greatly complicates the development of your own reactive web applications for Unreal Engine. Initially, PixelStreaming is a no-architecture javascript solution for interacting with reactive web frameworks. Adapting standard PixelStreaming for ReactJS is a very long and laborious process, which significantly increases development time, because. there are a lot of technical problems to solve related to the peculiarities of browsers, devices and reactive technologies (like React.js)



> MetaEditor.io — helps integrate Unreal Engine v.5 in the browser. Allows you to send commands and get callbacks from the stream server with launched Unreal Engine.



## Advantages

MetaEditor solves most of the possible problems when developing web applications for streaming from Unreal Engine:

- Cloud streaming solution
- Plugin for Unreal Engine IDE
- Developer tools
- A set of professional web components
- Adaptation for mobile devices
- Progress bar with the process of starting a cloud server
- Video quality optimization, connection speed control
- Notifications. For example, if the connection is lost or there is no activity



## Flexibility

When developing MetaEditor, we created a universal architecture that makes it easy to deploy and customize your ReactJS application without the risk of breaking something.

MetaEditor allows you to focus on developing the interface of your application, built on top of it, without delving into the complex technical details of Pixel Streaming technology.

## Components

We have created and adapted a set of ReactJS components that solve the basic tasks of your web application (taking into account the features of streaming video).

**MetaEditor Features**

- ReactJS
- Pixel streaming
- Material (MUI)
- Next.js

### **Unreal Engine Plugin**

Also, we have developed a plug-in for Unreal Engine 5, with the help of which your web application interacts with a project on Unreal Engine.

Commands sent to the Unreal Engine from MetaEditor are asynchronous, so each command receives a response when executed.

We have added the possibility of one-way callbacks, so the MetaEditor interface responds to events in the Unreal Engine. For example, when clicking on some 3D object in your application, you can launch the [MetaMask](https://metamask.io/) plugin using [web3.js](https://www.npmjs.com/package/web3)

### **Developer Tools**

When developing a web application for Unreal Engine, it is important to have convenient testing tools:

- Local connection. The ability to connect to a local server to test web applications during development without leaving the Unreal Engine IDE.
- Command manager. A detailed report on all sent commands and received callbacks, with the ability to add your own commands.
- State tree. Shows the current state of your webrtc streaming.
- Emergency reboot. Allows you to restart the streaming server in case of any error (suitable for cloud streaming).
- Advanced logging system. MetaEditor decomposes system messages from a webrtc connection and displays them in the developer's interface.
- [Sentry](https://sentry.io/) to track errors on the side of the client session

### **Cloud Streaming**

Cloud Streaming from MetaEditor allows you to dynamically scale cloud servers to stream your 3D content created in Unreal Engine.

The system automatically launches the required number of cloud servers, for example, at the time of a large influx of users.

Thanks to autoscaling, you can significantly optimize the cost of renting servers for streaming.

To control cloud servers in real time, you can use the MetaEditor app from the App Store. You'll receive push notifications, manage active connections, and control cloud computing costs.

**Parameters:**

- cost optimization
- up to 5.000 simultaneous connections
- AWS data center
- OS Linux
- any server configurations with GPU.
- fast project update

## Future plans

- Publishing MetaEditor plugin in UE Marketplace
- Improved documentation
- Development of MetaEditor for Angular and Vue


