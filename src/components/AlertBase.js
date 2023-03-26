import Toast from 'react-native-root-toast';

export const useAlertBase = message =>
  Toast.show(message, {
    duration: Toast.durations.LONG,
    position: Toast.positions.BOTTOM,
    shadow: true,
    animation: true,
    hideOnPress: true,
    delay: 2000,
    backgroundColor: '#22c55e',
  });
