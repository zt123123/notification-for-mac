# Native Notifier For Mac

This module provides a node API for notifications on Mac OS X.

## Demo Preview

![demo](https://images.cnblogs.com/cnblogs_com/zt123123/2136739/o_220401144900_demo.gif)

## Installation

```shell
npm install notification-for-mac
```

## Usage

```js
const notifier = require("notification-for-mac");

notifier("Hello World!!!");

notifier("Click me to npm🚀", {
  title: "Hi! I am title",
  subtitle: "I am subtitle😊",
  sound: "Frog",
  open: "https://www.npmjs.com/package/notification-for-mac",
});
```

Pass an object as the second argument to set additional options:

- title The notification title. Defaults to "".
- subtitle The notification subtitle. Defaults to "".
- message The notification message. Defaults to "".
- sound The notification sound. Defaults to "default". Sound names are listed in /System/Library/Sounds.
