interface NotificationOptions {
  /**
   * The notification title. Defaults to "".
   */
  title?: string;
  /**
   * The notification subtitle.
   */
  subtitle?: string;
  /**
   * The notification sound. Defaults to "default". Sound names are listed in /System/Library/Sounds.
   */
  sound?: string;
  /**
   * A string which identifies the group the notifications belong to.
   * Old notifications with the same ID will be removed.
   */
  group?: string;
  /**
   * The bundle identifier of the application to activate when the user clicks the notification.
   */
  activate?: string;
  /**
   * The URL of a resource to open when the user clicks the notification.
   */
  open?: string;
  /**
   * A shell command to perform when the user clicks the notification.
   */
  execute?: string;
}

/**
 * options.title     The notification title. Defaults to ‘Terminal’.
 * options.subtitle  The notification subtitle.
 * options.group     A string which identifies the group the notifications belong to.
 *                   Old notifications with the same ID will be removed.
 * options.activate  The bundle identifier of the application to activate when the user clicks the notification.
 * options.open      The URL of a resource to open when the user clicks the notification.
 * options.execute   A shell command to perform when the user clicks the notification.
 */
declare function notify(message: string);
declare function notify(message: string, options: NotificationOptions);

export = notify;
