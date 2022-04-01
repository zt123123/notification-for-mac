interface NotificationOptions {
  /**
   * The notification message. Defaults to "".
   */
  message: string;
  /**
   * The notification title. Defaults to "".
   */
  title?: string;
  /**
   * The notification subtitle. Defaults to "".
   */
  subtitle?: string;
  /**
   * The notification sound. Defaults to "default". Sound names are listed in /System/Library/Sounds.
   */
  sound?: string;
}

declare function notify(message: string);
declare function notify(options: NotificationOptions);

export = notify;
