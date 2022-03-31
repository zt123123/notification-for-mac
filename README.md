# Native Notifier For Mac

This module provides a node API for notifications on Mac OS X.

## Installation

```shell
npm install notification-for-mac
```

## Usage

```js
const notifier = require("notification-for-mac");

notifier("Hello World!!!");

notifier({
  title: "Title",
  subtitle: "subtitle",
  message: "message",
});
```

Pass an object as the second argument to set additional options:

- title The notification title. Defaults to "".
- subtitle The notification subtitle. Defaults to "".
- message The notification message. Defaults to "".
- sound The notification sound. Defaults to "Frog".
