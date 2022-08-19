import React, {useEffect} from 'react';
import {
  View,
  ActivityIndicator,
  SafeAreaView,
  FlatList,
  Alert,
  TouchableOpacity,
  ListRenderItemInfo,
} from 'react-native';
//import FontAwesome from 'react-native-vector-icons/FontAwesome';
import {Header} from '../components/header';
import {DefaultStyle} from '../styles/DefaultStyle';
import {useSelector, useDispatch} from 'react-redux';
import {getPosts} from '../redux/reducers/actions';
import {styles} from './home.styles';
import {Text} from '../components/text';
import {ItemType} from '../models/ItemType';
import {ItemThumbDisplay} from '../components/itemThumbDisplay';
import {HomeProps} from './home.props.';

export const Home: React.FC<HomeProps> = ({navigation}) => {
  const toItemSingle = (item: any) => {
    navigation.navigate('Item', {item: item});
  };

  // OBSOLETE: This initial code is only kept for reference after implementing redux
  // const [isItemLoading, setIsItemLoading] = useState<boolean>(true);
  // const [itemDataList, setItemDataList] = useState([]);
  // const getItemsData = async () => {
  //     try {
  //         const response = await fetch('https://s3-ap-northeast-1.amazonaws.com/m-et/Android/json/all.json');
  //         const json = await response.json();
  //         setItemDataList(json);
  //     } catch (error) {
  //         console.error(error);
  //          Alert.alert("Loading error")
  //     } finally {
  //         // This code is for testing of loading indicator
  //         // await wait(2)
  //         setIsItemLoading(false);
  //     }
  // }
  // useEffect(() => {
  //     getItemsData()
  // }, []);
  // // This code is for testing of loading indicator
  // function wait(seconds: number) {
  //     return new Promise(resolve => {
  //         setTimeout(() => { resolve('') }, seconds * 1000);
  //     })
  // }

  // data loading using Redux
  const dispatch = useDispatch<any>();
  const isItemLoading = useSelector(
    (state: any) => state.useReducer.isFetching,
  );
  const itemDataList = useSelector((state: any) => state.useReducer.items);
  const error = useSelector((state: any) => state.useReducer.error);
  //console.log("data loading status", isItemLoading)
  //console.log("an error happened", error)

  if (error) {
    Alert.alert('Loading error');
  }

  useEffect(() => {
    dispatch(getPosts());
  }, [dispatch]);

  const renderItem = ({item}: ListRenderItemInfo<ItemType>) => (
    <TouchableOpacity onPress={() => toItemSingle(item)}>
      <View style={styles.itemWrap}>
        <ItemThumbDisplay item={item} />

        <View style={styles.itemDetailPanel}>
          <View style={styles.textContainer}>
            <View style={styles.iconWrap}>
              <Text style={styles.icon}>$</Text>
              <Text style={styles.dollar}>{item.price}</Text>
            </View>
            <View style={styles.iconWrap}>
              {/*  <FontAwesome name="heart-o" style={styles.icon} size={15} /> */}
              <Text style={styles.like}>{item.num_likes}</Text>
            </View>
          </View>
        </View>
      </View>
    </TouchableOpacity>
  );

  return (
    <SafeAreaView style={DefaultStyle.container}>
      <Header headerText="Sample store" />

      {isItemLoading ? (
        <View style={styles.loading}>
          <ActivityIndicator size="large" />
        </View>
      ) : (
        <View style={DefaultStyle.row}>
          <FlatList
            numColumns={2}
            columnWrapperStyle={styles.flatList}
            data={itemDataList}
            keyExtractor={item => item.id}
            renderItem={renderItem}
          />
        </View>
      )}
    </SafeAreaView>
  );
};
