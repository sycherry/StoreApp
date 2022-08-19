import {StyleSheet} from 'react-native';
import {palette} from '../styles/color';
import {fullWidth} from '../components/styleUtils';

export const styles = StyleSheet.create({
  flatList: {
    justifyContent: 'space-between',
    marginBottom: 15,
  },
  itemWrap: {
    flex: 1,
    justifyContent: 'space-between',
  },
  imageWrap: {
    position: 'relative',
  },
  image: {
    width: fullWidth / 2 - 15,
    height: fullWidth / 2 - 15,
    marginBottom: 5,
  },
  itemDetailPanel: {
    width: fullWidth / 2 - 15,
  },
  textContainer: {
    flex: 1,
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  iconWrap: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    alignItems: 'center',
  },
  icon: {
    color: palette.black,
    marginRight: 3,
  },
  dollar: {
    marginRight: 20,
    fontSize: 15,
  },
  like: {
    fontSize: 15,
  },
  loading: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
