import Notification = require('@qtk/reliable-notification-service');
let notification = new Notification();
export = {
    publish: notification.publish
}
export as namespace NotificationCenter;
