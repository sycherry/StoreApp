import {StyleSheet} from 'react-native';
import {palette} from './color';

export const DefaultStyle = StyleSheet.create({
  defaultText: {
    color: palette.black,
  },
  container: {
    flex: 1,
  },
  row: {
    marginHorizontal: 10,
  },
  headerWrap: {
    flexDirection: 'row',
    paddingHorizontal: 12,
    alignItems: 'center',
    paddingTop: 12,
    paddingBottom: 12,
    justifyContent: 'flex-start',
  },
  titleOuter: {
    flex: 1,
    justifyContent: 'center',
  },
  title: {
    fontWeight: 'bold',
    fontSize: 18,
    textAlign: 'center',
  },
  badgeWrap: {
    position: 'absolute',
    top: 0,
    left: 0,
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  badge: {
    backgroundColor: palette.red,
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 8,
    paddingHorizontal: 14,
  },
  badgeText: {
    color: palette.white,
    fontSize: 15,
    fontWeight: 'bold',
    letterSpacing: 0.25,
  },
});
