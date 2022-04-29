---
id: description
title: Description
sidebar_label: Description
slug: /
---

# PixelStreaming for ReactJS

![img](/assets/preview.png)



### The MetaEditor is a professional web application for developing solutions based on the ReactJS and the PixelStreaming.

The standard implementation of the PixelStreaming significantly complicates developing your own reactive web applications for the Unreal Engine. Initially, the PixelStreaming was a no-architecture javascript solution for interacting, which has reactive web frameworks. Adapting the standard ReactJS for the PixelStreaming is a very long and laborious process, which significantly increases development time, because there are many technical problems to solve. It is related to the peculiarities of browsers, devices, and reactive technologies (like the ReactJS)

The [MetaEditor.io](https://metaeditor.io) helps to integrate the Unreal Engine v.5 into the browser. It allows you to send commands and get callbacks from the stream server with the Unreal Engine launched.

## Advantages

The MetaEditor solves most of the possible problems in developing web applications for streaming from the Unreal Engine, such as:

- a Cloud streaming solution
- a Plugin for the Unreal Engine IDE
- Developer tools
- a Set of professional web components
- an Adaptation for mobile devices
- a Progress bar with the process of starting a cloud server
- a Video quality optimization, connection speed control
- Notifications. For example, if the connection is lost or there is no activity

## Flexibility

When developing the MetaEditor, we created a universal architecture that makes it easy to deploy and customize your ReactJS application without the risk of breaking something. The MetaEditor allows you to focus on developing the interface of your application, built on the top of it, without delving into the complex technical details of the PixelStreaming technology.

## Components

We have created and adapted a set of the ReactJS’s components to solve basic tasks of your web application (taking into account the features of streaming video)

The MetaEditor Features

* the React.js

* the PixelStreaming

* the Material (MUI)

* the Next.js

## Unreal Engine Plugin

Optionally, we developed a plugin for the Unreal Engine 5, which helps your web application to interact with a project on the Unreal Engine.

Commands which are sending to the Unreal Engine from the MetaEditor are asynchronous, so each command receives a response when executed.

We added the possibility of one-way callbacks, so the MetaEditor’s interface responds to events in the Unreal Engine. For example, when clicking on some 3D object in your application, you can launch the [MetaMask](https://metamask.io) plugin using [web3.js](https://www.npmjs.com/package/web3)

## Developer Tools

When developing a web application for the Unreal Engine, it is important to have convenient testing tools:

- Local connection. The ability to connect to a local server to test web applications during development without leaving the Unreal Engine’s IDE.
- Command manager. A detailed report on all sent commands and received callbacks, with the ability to add your own commands.

- State tree. Shows the current state of your WebRTC streaming.
- Emergency reboot. Allows you to restart the streaming server in case of any error (suitable for cloud streaming).
- Advanced logging system. The MetaEditor decomposes system messages from a WebRTC connection and displays them in the developer's interface.
- [Sentry](https://sentry.io) to track errors on the side of the client session

Optionally, we have developed a plugin for the Unreal Engine 5, which helps your web application to interact with a project on the Unreal Engine.

Commands which are sending to the Unreal Engine from the MetaEditor are asynchronous, so each command receives a response when executed.

We added the possibility of one-way callbacks, so the MetaEditor’s interface responds to events in the Unreal Engine. For example, when clicking on some 3D object in your application, you can launch the [MetaMask](https://metamask.io) plugin using [web3.js](https://www.npmjs.com/package/web3)

## Cloud Streaming

Cloud Streaming from the MetaEditor allows you to dynamically scale cloud servers to stream your 3D content created in the Unreal Engine.

The system automatically launches the required number of cloud servers, for example, at the time of a large influx of users.

Thanks to auto scaling, you can significantly optimize the cost of renting servers for streaming.

To control cloud servers in real-time, you can use the MetaEditor app from the App Store. You will receive push notifications, manage active connections, and control cloud-computing costs.

**Parameters:**

- cost optimization
- up to 5.000 simultaneous connections
- AWS data center
- OS Linux
- any server configurations with GPU.
- fast project update

## Future plans

- Publishing the MetaEditor plugin in the UE Marketplace
- Improving documentation
- Developing the MetaEditor for Mobile Platforms
