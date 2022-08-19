import {StyleSheet} from 'react-native';
import {fullWidth} from './styleUtils';

export const styles = StyleSheet.create({
  imageWrap: {
    position: 'relative',
  },
  image: {
    width: fullWidth / 2 - 15,
    height: fullWidth / 2 - 15,
    marginBottom: 5,
  },
});
