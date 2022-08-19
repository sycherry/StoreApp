import React, {useState, useEffect} from 'react';
import {
  View,
  SafeAreaView,
  ScrollView,
  Image,
  TouchableOpacity,
} from 'react-native';
import {Header} from '../components/header';
import {DefaultStyle} from '../styles/DefaultStyle';
//import FontAwesome from 'react-native-vector-icons/FontAwesome';
import {useSelector, useDispatch} from 'react-redux';
import {styles} from './item.styles';
import {Text} from '../components/text';
import {ItemProps} from './item.props';

export const Item: React.FC<ItemProps> = ({route, navigation}) => {
  const goBack = () => navigation.goBack();
  const [likeButton, setLikeButton] = useState(false);
  const {item} = route.params;

  // OBSOLETE: This initial code is only kept for reference after implementing redux
  // const [likes, setLikes] = useState<number>(item.num_likes)
  // const clickLikeButton = () => {
  //     if (likeButton === false) {
  //         setLikeButton(true)
  //         setLikes(likes + 1)
  //     } else {
  //         setLikeButton(false)
  //         setLikes(likes - 1)
  //     }
  // }

  // get item like count from state
  const likes = useSelector((state: any) => state.useReducer.likeCount);

  // get item from reducer
  const itemDataList = useSelector((state: any) => state.useReducer.items);

  // and get the item by filtering by the id
  const newItemData = itemDataList.filter((e: any) => e.id == item.id);

  //console.log("number of like originally",newItemData[0].num_likes)

  const dispatch = useDispatch<any>();
  useEffect(() => {
    dispatch({
      type: 'TOGGLE_LIKE',
      payload: {
        likeCount: newItemData[0].num_likes,
      },
    });
  }, [dispatch, newItemData]);

  function clickLikeButton() {
    if (!likeButton) {
      setLikeButton(true);
      dispatch({
        type: 'TOGGLE_LIKE',
        payload: {
          action: 'add',
          likeCount: newItemData[0].num_likes,
        },
      });
    } else {
      setLikeButton(false);
      dispatch({
        type: 'TOGGLE_LIKE',
        payload: {
          action: 'remove',
          likeCount: newItemData[0].num_likes,
        },
      });
    }
  }

  return (
    <SafeAreaView style={DefaultStyle.container}>
      <Header headerText={item.name} leftIcon="left" onLeftPress={goBack} />
      <ScrollView>
        <View style={styles.imageWrap}>
          <Image
            source={{uri: item.photo}}
            resizeMode={'contain'}
            style={styles.image}
          />
          {item.status !== 'on_sale' && (
            <View style={DefaultStyle.badgeWrap}>
              <View style={[DefaultStyle.badge, styles.badge]}>
                <Text style={[DefaultStyle.badgeText, styles.badgeText]}>
                  SOLD OUT
                </Text>
              </View>
            </View>
          )}
        </View>

        <View style={DefaultStyle.row}>
          <View style={styles.name}>
            <Text style={styles.nameText}>{item.name}</Text>
          </View>

          <View style={styles.price}>
            <Text style={styles.priceText}>${item.price}</Text>
          </View>

          <View style={styles.iconListContainer}>
            <TouchableOpacity
              onPress={() => clickLikeButton()}
              style={styles.iconWrap}>
              {/* {!likeButton ? (
                <FontAwesome name="heart-o" style={styles.icon} size={30} /> 
              ) : (
               <FontAwesome
                  name="heart"
                  style={styles.iconClicked}
                  size={30}
                />
                )} */}
              <Text style={styles.likeText}>{likes}</Text>
            </TouchableOpacity>

            <View style={styles.iconWrap}>
              {/* <FontAwesome name="comment-o" style={styles.icon} size={30} /> */}
              <Text style={styles.commentText}>{item.num_comments}</Text>
            </View>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};
