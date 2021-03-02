import React from 'react';
import {
  View,
  Text,
  Dimensions,
  TouchableOpacityBase,
  Image,
  TouchableOpacity,
  FlatList,
  SafeAreaView,
  ImageBackground,
} from 'react-native';
import {Icon} from 'react-native-elements';
import {TakeHolidayContext} from './context';
import {useIsFocused} from '@react-navigation/native';

const {height, width} = Dimensions.get('window');

export function Details({navigation, route}) {
  const {details} = route.params;
  console.log(details);
  const {state, setState} = React.useContext(TakeHolidayContext);
  const isFocused = useIsFocused();
  const getInitialData = async () => {};
  React.useEffect(() => {
    getInitialData();
  }, [navigation, isFocused]);

  const handleDelete = (idx) => {
    setState({
      ...state,
      [details]: state[details].filter((e, index) => index !== idx),
    });
  };
  console.log(state, details);
  const renderItem = ({item, index}) => {
    return (
      <View
        style={{
          // backgroundColor: 'pink',
          flexDirection: 'row',
          width: width * 1,
          justifyContent: 'space-between',
          alignSelf: 'center',
          marginTop: 10,
        }}>
        <TouchableOpacity
          onPress={() =>
            navigation.navigate('AddDetails', {item: item, details: details})
          }
          style={{
            width: width * 0.85,
            height: height * 0.3,
            borderWidth: 5,
            borderColor: 'black',
            elevation: 1,
            marginLeft: 5,
            borderRadius: 40,
            backgroundColor: '#c4def6',
            justifyContent: 'space-between',
            alignContent: 'center',
            shadowColor: 'white',
            shadowOffset: {width: 4, height: -10},
            shadowOpacity: 10,
            shadowRadius: 5,
            marginTop: height * 0.02,
          }}>
          <View
            style={{
              width: width * 0.79,
              height: height * 0.095,
              marginLeft: 10,
              marginTop: 5,
              // backgroundColor: 'red',
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'center',
            }}>
            <View style={{marginLeft: 17}}>
              {item.image.length ? (
                <Image
                  source={{uri: item.image}}
                  style={{
                    // flexDirection: 'row',
                    marginTop: 4,
                    // marginLeft: 5,
                    marginLeft: -50,
                    justifyContent: 'center',
                    height: height * 0.08,
                    borderWidth: 2,
                    borderColor: 'black',
                    borderRadius: 40,
                    width: width * 0.18,
                  }}
                />
              ) : (
                <Text style={{textAlign: 'center', alignSelf: 'center'}}>
                  No Image
                </Text>
              )}
            </View>
            <Text
              style={{
                fontSize: height * 0.035,
                fontWeight: 'bold',
                textAlign: 'justify',
                alignSelf: 'center',
                marginLeft: 15,
              }}>
              Student Image
            </Text>
          </View>

          <View
            style={{
              width: width * 0.75,
              height: height * 0.075,
              // borderWidth: 4,
              alignSelf: 'center',
              justifyContent: 'center',
              backgroundColor: '#c1e1c5',
              borderLeftWidth: 4,
              borderRightWidth: 4,
              borderBottomWidth: 4,
              borderBottomEndRadius: 20,
              borderBottomLeftRadius: 20,
              marginTop: 1,
              shadowColor: 'black',
              shadowOffset: {width: 5, height: 5},
              shadowOpacity: 5,
              shadowRadius: 5,
            }}>
            <Text
              style={{
                fontSize: height * 0.03,
                textAlign: 'center',
                fontWeight: 'bold',
              }}>
              {item.place}
            </Text>
          </View>

          <View
            style={{
              width: width * 0.73,
              height: height * 0.08,
              borderLeftWidth: 4,
              borderRightWidth: 4,
              borderBottomWidth: 4,
              borderBottomEndRadius: 20,
              borderBottomLeftRadius: 20,
              backgroundColor: '#c1e1c5',
              justifyContent: 'center',
              alignSelf: 'center',
              marginTop: 5,
              shadowColor: 'black',
              shadowOffset: {width: 5, height: 5},
              shadowOpacity: 5,
              shadowRadius: 5,
            }}>
            <View
              style={{
                // backgroundColor: 'red',
                flexDirection: 'row',
                justifyContent: 'space-around',
              }}>
              <Text
                style={{
                  // backgroundColor: 'red',
                  width: width * 0.23,
                  fontSize: height * 0.027,
                  fontWeight: 'bold',
                  textAlign: 'left',
                  // marginLeft: -23
                }}>
                Subject:
              </Text>
              <Text
                style={{
                  // backgroundColor: 'red',
                  fontSize: height * 0.03,
                  //  width: width * 0.3,
                  fontWeight: 'bold',
                  textAlign: 'auto',
                }}>
                {item.from.slice(0, 8)}...
              </Text>
            </View>
          </View>

          <View
            style={{
              alignItems: 'center',
              flexDirection: 'row',
              justifyContent: 'space-between',
            }}>
            <Text style={{fontWeight: 'bold'}}></Text>

            {/* <View style={{alignItems: 'center'}}>
              <View
                style={{
                  width: 'auto',
                  alignItems: 'center',
                  padding: height * 0.01,
                  borderWidth: 2,
                  borderRadius: height * 0.2,
                  backgroundColor: '#ff9',
                }}>
                <Text style={{color: '#000', fontSize: height * 0.02}}>
                  {item.from}
                </Text>
              </View>
            </View> */}
          </View>
        </TouchableOpacity>
        <TouchableOpacity
          style={{
            padding: height * 0.01,
            width: width * 0.15,
            justifyContent: 'center',
          }}
          onPress={(e) => handleDelete(index)}>
          <Icon name="trash" type="ionicon" color="darkred" />
        </TouchableOpacity>
      </View>
    );
  };

  return (
    <SafeAreaView>
      <ImageBackground
        style={{width, height}}
        blurRadius={0}
        source={require('../assets/ebk.jpg')}>
        <View
          style={{
            justifyContent: 'space-between',
            backgroundColor: 'rgba(0,0,0,0.8)',
            height: height * 0.065,
            flexDirection: 'row',
          }}>
          <TouchableOpacity
            style={{justifyContent: 'center', padding: 3}}
            onPress={() => navigation.goBack()}>
            <Icon
              name="ios-arrow-back-outline"
              type="ionicon"
              size={height * 0.05}
              color="#fff"
            />
          </TouchableOpacity>
          <View style={{justifyContent: 'center'}}>
            <Text
              style={{
                color: '#fff',
                fontSize: height * 0.03,
                fontWeight: 'bold',
              }}>
              Details
            </Text>
          </View>
          <TouchableOpacity
            style={{justifyContent: 'center', padding: 5}}
            onPress={() =>
              navigation.navigate('AddDetails', {details: details})
            }>
            <Icon
              name="ios-add-sharp"
              type="ionicon"
              size={height * 0.05}
              color="#fff"
            />
          </TouchableOpacity>
        </View>

        <View
          style={{
            justifyContent: 'center',
            alignItems: 'center',

            // backgroundColor: '#c1e1c5',
            height: height * 0.9,
          }}>
          {state[details].length ? (
            <FlatList
              showsVerticalScrollIndicator={false}
              data={state[details]}
              keyExtractor={(item, index) => index.toString()}
              renderItem={renderItem}
            />
          ) : (
            <View
              style={{
                width: width * 0.85,
                height: height * 0.18,
                alignItems: 'center',
                justifyContent: 'center',
                backgroundColor: '#8ed1fc',
                borderTopRightRadius: height * 0.03,
                borderBottomLeftRadius: height * 0.03,
                // borderRadius: 20,
                borderColor: 'black',
                borderWidth: 5,
              }}>
              <Text
                style={{
                  color: 'black',
                  fontSize: height * 0.03,
                  textAlign: 'center',
                }}>
                No Data Found , Please click on ' + ' to add data
              </Text>
            </View>
          )}
        </View>
      </ImageBackground>
    </SafeAreaView>
  );
}
