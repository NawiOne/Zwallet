import PushNotification from 'react-native-push-notification';

const showLocalNotification = (title, message, channelId) => {
  PushNotification.localNotification({
    channelId,
    title,
    message,
  });
};

export { showLocalNotification };
