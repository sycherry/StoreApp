import {StyleSheet} from 'react-native';
import {Dimensions} from 'react-native';
import {palette} from '../styles/color';

export const fullWidth = Dimensions.get('window').width;

export const styles = StyleSheet.create({
  name: {
    marginBottom: 10,
  },
  nameText: {
    fontSize: 28,
  },
  price: {
    marginBottom: 20,
  },
  priceText: {
    fontSize: 32,
    color: palette.red,
  },
  iconListContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  iconWrap: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    alignItems: 'center',
    minWidth: 80,
  },
  icon: {
    marginRight: 6,
    color: palette.black,
  },
  iconClicked: {
    marginRight: 6,
    color: palette.red,
  },
  likeText: {
    marginRight: 20,
    fontSize: 18,
    color: palette.gray,
  },
  commentText: {
    fontSize: 18,
    color: palette.gray,
  },
  imageWrap: {
    position: 'relative',
  },
  image: {
    width: fullWidth,
    height: fullWidth,
    marginBottom: 10,
  },
  badge: {
    paddingVertical: 12,
    paddingHorizontal: 30,
  },
  badgeText: {
    fontSize: 30,
  },
});
