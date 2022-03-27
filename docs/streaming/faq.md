---
title: Frequently Asked Questions
sidebar_label: FAQ
---



> Quickly find answers on how MetaEditor helps innovators and creators collaborate, publish, and engage with real-time 3D applications.
>

### When you say any device, anytime, anywhere, is it really usable on smartphones and tablets?

Yes, it comes down to how you prepare your real-time 3D project and application to be optimized for various devices, but we can generally deploy and stream any 3D application to any device via a web browser.

### Does MetaEditor support Unreal Engine's Pixel Streaming?

Absolutely! We have integrated Pixel streaming with our platform so that creators can intuitively publish their Unreal projects and distribute globally. Integrating with Pixel Streaming provides customers with superior image quality, lower latency and improved mouse/keyboard interactivity.

### Could anyone take a streaming protocol and build what MetaEditor has developed?

Yes. But this would take a great deal of technical expertise, years and money. So, unless scalable cloud deployments of interactive 3D is your core business, it is not often in your best interest to do it yourself. A few additional things to consider: - If you try to build it yourself, Unreal does not provide you with any servers. You have to find a cloud platform. - Unity also has a WebRTC based streaming plugin like Unreal that was recently released, but it is in the same boat as Unreal right now - you are not provided with servers or a scalable platform. To deploy and run something at scale sometimes appears easy, but it’s not. It's a lot of work and ongoing management in order to scale, realize cost-efficiencies and ensure optimal performance.

### Why should I choose MetaEditor for interactive 3D cloud streaming?

We offer a fully-managed 3D cloud streaming solution for publishing and distributing Unreal Engine or Unity game projects at scale for a variety of business use-cases, and make real-time 3D experiences accessible from a web browser on any connected device and screen size while keeping source data secure. MetaEditor eliminates any need for technical understandings or detail. We can support multiple users per server/box (vs. going directly to AWS who only support one user per app stream). We utilize the latest technology such as real-time ray tracing, and the new Nvidia Tesla T4 graphics. We are constantly innovating and staying one step ahead of the latest cloud gaming technologies.

### What's the difference between publishing 3D applications via MetaEditor vs WebGL

Unreal and Unity have WebGL deployment options, but only for desktop and not mobile devices. WebGL is less robust, limited in what you can do with publishing 3D applications as models will be lower in fidelity. Simple models that are fairly lightweight are okay for WebGL i.e. a shoe, jewelry, etc. However, high fidelity models and graphic intensive game projects are not supported by WebGL. Using MetaEditor vs. WebGL comes down to quality and cost. WebGL is cheaper to deploy, but with the tradeoff of quality suffering. WebGL depends on device capability rather than MetaEditor rendering from the cloud, which ensures consistency across devices.

### What do you mean when you say “Streaming protocol” ?

This refers to one element of our 3D publishing platform. It is what gets pixels from one end to another, but not how we make it more cost-efficient. The protocol only captures the streams and how one thing moves to another. MetaEditor has its own proprietary streaming protocol. It is proven and stable used in industry i.e. healthcare. (Think: being able to view 3D diagnostic images on a mobile device in full sunlight.) We are also working on a new WebRTC streaming protocol (aiming for Q1 2020) that will be comparable in performance to other modern streaming protocols.

### Why are we on AWS not Azure, Google cloud, IBM cloud, or Oracle?

AWS was the first cloud solution with high-end GPUs to support game projects created in Unreal / Unity. We can also support both cloud deployment and on-premise. Note: our on premise deployments are typically small scale, and we could deploy to a different cloud if needed.

### What do you mean when you say “MetaEditor platform” ?

This refers to the infrastructure that exists in the cloud and manages and scales your projects. Built with AWS, it includes the configuration, security, management, dynamic scaling of servers, etc. There are several layers to the cloud streaming solution we offer, and the MetaEditor platform refers to all the services that are running.

### How do you price your interactive 3D cloud streaming solution?

We offer a bespoke pricing model. Our pricing largely depends on the specific use case. We offer both a high volume and low volume usage model. Generally, we charge an initial project fee and then develop a pricing plan based on the number of concurrent users and whether you require servers running 24/7 hours, regular or extended business hours or customized hours. We take into consideration the project file size as this informs us whether we can fit more than one project on one server. At the moment, with Unity projects we can only fit one project per server vs. Unreal projects, where we can fit more than one depending on file size. Generally there is a pilot phase (1-3 months), which then rolls into an ongoing production phase.

### Is MetaEditor affiliated with Unreal Engine / Epic Games?

No, we do not have any official affiliation; however, we have a good relationship with Epic Games and Unreal's product tech support teams.

### What is the workflow to get project up and running?

We provide an optimization checklist for our customers to follow in preparing their 3D application / project for deployment. Customers then provide us with the source version of their project (i.e. pre build) and then we integrate and build the project with our MetaEditor plugin for Unreal or Unity. We then deploy the project on-line to the regions and availability level specified by the customer. A URL is provided to the customer that can be used to access the project directly or can be embedded into any webpage.

### How quickly can I have my project up and running?

We will have a project deployed within 2 weeks of receiving a game file. It only takes us 1 to 2 days of development time to integrate and deploy the project, but a 2 week time window is given to accommodate scheduling of the project amongst our team's workload.

### What do I receive at the end of a project deployment?

We provide a URL that can be used to access the project directly or can be embedded in any webpage in an iframe.

### What if I have multiple projects, can I get more than one on a server?

Multiple projects can be hosted on the same server, so long as the sum of the project size does not exceed 10GB for our entry level server, or 40GB for the larger server size we support. Performance and complexity of each project should be comparable and be able to support the same number of concurrent users on the server for maximum efficiency.

### How do we guarantee availability?

The MetaEditor platform will automatically scale your application to match demand. It creates new instances on demand. We do it in a way that doesn’t compromise user experience.

### How does MetaEditor cloud streaming scale “instantly”?

Simply put, if server capacity is under capacity vs number of requests, it will feel instant. If server capacity is over, then it will “spin” until the request is fulfilled.

### How do I know that the cloud usage you’re charging us for, is our actual usage?

We can provide a report of cloud usage, including the number of server hours, number of user engagements, total duration of user engagements, or a combination of these depending on the pricing model being used.


