import React from 'react';
import {View, TouchableOpacity} from 'react-native';
import {DefaultStyle} from '../styles/DefaultStyle';
//import AntDesign from 'react-native-vector-icons/AntDesign';
import {HeaderProps} from './header.props';
import {Text} from '../components/text';

export function Header(props: HeaderProps) {
  const {onLeftPress, onRightPress, rightIcon, leftIcon, headerText} = props;

  const defaultIconSize = {width: 32};
  return (
    <View style={DefaultStyle.headerWrap}>
      {leftIcon ? (
        <TouchableOpacity onPress={onLeftPress} style={defaultIconSize}>
          {/*  <AntDesign name={leftIcon} size={18} /> */}
        </TouchableOpacity>
      ) : (
        <View style={defaultIconSize} />
      )}
      <View style={DefaultStyle.titleOuter}>
        <Text style={DefaultStyle.title}>{headerText}</Text>
      </View>
      {rightIcon ? (
        <TouchableOpacity onPress={onRightPress} style={defaultIconSize}>
          {/*  <AntDesign name={rightIcon} size={18} /> */}
        </TouchableOpacity>
      ) : (
        <View style={defaultIconSize} />
      )}
    </View>
  );
}
