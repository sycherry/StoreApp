import React from 'react';
import {View, Image} from 'react-native';
import {DefaultStyle} from '../styles/DefaultStyle';
import {Text} from './text';
import {styles} from './itemThumbDisplay.styles';
import {ItemThumbDisplayProps} from './itemThumbDisplay.props';

export function ItemThumbDisplay(props: ItemThumbDisplayProps) {
  const {item} = props;

  return (
    <View style={styles.imageWrap}>
      <Image
        source={{uri: item.photo}}
        resizeMode="contain"
        style={styles.image}
      />
      {
        /* When an item is sold out, display the sold out badge */
        item.status !== 'on_sale' && (
          <View style={DefaultStyle.badgeWrap}>
            <View style={DefaultStyle.badge}>
              <Text style={DefaultStyle.badgeText}>SOLD OUT</Text>
            </View>
          </View>
        )
      }
    </View>
  );
}
