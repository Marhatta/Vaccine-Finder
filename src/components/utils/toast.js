import Toast from 'react-native-simple-toast';

export const showToast = (message, duration, viewControllerBlacklist) =>
  Toast.show(
    message,
    duration || Toast.SHORT,
    ['UIAlertController'] || viewControllerBlacklist,
  );
