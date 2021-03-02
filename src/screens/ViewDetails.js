import React from 'react';
import {
  View,
  Text,
  Dimensions,
  TouchableOpacityBase,
  Image,
  ImageBackground,
  TouchableOpacity,
  SafeAreaView,
  FlatList,
} from 'react-native';
import {Icon} from 'react-native-elements';
import {TakeHolidayContext} from '../screens/context';
const {height, width} = Dimensions.get('window');

export function ViewDetails({navigation}) {
  const {state, setState} = React.useContext(TakeHolidayContext);
  const [dataItems, setDataItems] = React.useState([]);
  const AllData = Object.values(state);
  const allKeys = Object.keys(state);
  let mArray = [];
  React.useEffect(() => {
    allKeys.map((key) => {
      state[key].map((e) => {
        mArray.push({...e, type: key});
      });
    });
    setDataItems(mArray);
  }, []);

  const renderItem = ({item, index}) => {
    return (
      <View
        style={{
          // backgroundColor: 'black',
          flexDirection: 'row',
          width: width * 0.96,
          justifyContent: 'center',
          alignSelf: 'center',
          marginTop: 20
        }}>
        <View
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
        </View>
      </View>
      
    );
  };
  return (
    <SafeAreaView>
      <ImageBackground
        style={{width, height}}
        blurRadius={0}
        source={require('../assets/ebk.jpg')}>
      <View style={{width, height}}>
        <View
          style={{
            justifyContent: 'space-between',
            backgroundColor: 'rgba(0,0,0,0.8)',
            height: height * 0.065,
            flexDirection: 'row',
          }}>
          <TouchableOpacity
            style={{justifyContent: 'center', padding: 5}}
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
              View Details
            </Text>
          </View>
          <View style={{padding: 20}}>
            <Text></Text>
          </View>
        </View>
        <View
          style={{
            justifyContent: 'center',
            alignItems: 'center',
            // backgroundColor: '#f5fafa',
            height: height * 0.9,
          }}>
          {dataItems.length ? (
            <FlatList
              data={dataItems}
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
                //  borderTopRightRadius: height * 0.03,
                //  borderBottomLeftRadius: height * 0.03,
                 borderRadius: 20,
                borderColor: 'black',
                borderWidth: 5,
              }}>
              <Text
                style={{
                  color: 'black',
                  fontSize: height * 0.03,
                  textAlign: 'center',
                }}>
                No Data Found , Please click on ' + ' to add data in category
                details page
              </Text>
            </View>
          )}
        </View>
      </View>
      </ImageBackground>
    </SafeAreaView>
  );
}
