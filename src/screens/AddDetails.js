import React from 'react';
import {
  View,
  Text,
  Dimensions,
  TouchableOpacityBase,
  Image,
  TouchableOpacity,
  SafeAreaView,
  TextInput,
  ImageBackground,
  FlatList,
} from 'react-native';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import {Icon} from 'react-native-elements';
import ImagePicker from 'react-native-image-crop-picker';
import {TakeHolidayContext} from './context';

const {height, width} = Dimensions.get('window');

export function AddDetails({navigation, route}) {
  const {state, setState} = React.useContext(TakeHolidayContext);
  const {details, item} = route.params;
  const [formState, setFormState] = React.useState({
    place: '',
    from: '',
    to: '',
    by: '',
    information: '',
    image: '',
  });
  React.useEffect(() => {
    if (item) {
      setFormState(item);
    }
  }, []);

  const handleSubmit = () => {
    if (item) {
      const index = state[details].findIndex((e) => e.place === item.place);
      [...state[details].splice(index, 1, formState)];
      setState(state);
    } else {
      setState({...state, [details]: [...state[details], {...formState}]});
    }
    navigation.goBack();
  };
  const pickImage = () => {
    ImagePicker.openPicker({
      width: 300,
      height: 400,
      cropping: true,
    })
      .then((image) => {
        setFormState({...formState, image: image.path});
      })
      .catch((err) => {
        console.log(err);
      });
  };
  return (
    <SafeAreaView>
      <ImageBackground
        style={{width, height}}
        source={require('../assets/edbk1.jpg')}>
        <KeyboardAwareScrollView style={{width, height}}>
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
              {item ? (
                <Text
                  style={{
                    color: '#fff',
                    fontSize: height * 0.035,
                    fontWeight: 'bold',
                  }}>
                  Update Details
                </Text>
              ) : (
                <Text
                  style={{
                    color: '#fff',
                    fontSize: height * 0.035,
                    fontWeight: 'bold',
                  }}>
                  Add Details
                </Text>
              )}
            </View>
            <View style={{padding: 20}}>
              <Text></Text>
            </View>
          </View>

          <View
            style={{
              backgroundColor: 'rgba(0,0,0,0.5)',
              height: height * 0.9,
              width: width * 0.97,
              alignSelf: 'center',
              marginTop: height * 0.009,
              borderRadius: 15,
              borderColor: 'black',
              borderWidth: 5,
              // justifyContent: 'center',
              // alignContent: 'center'
            }}>
            <View
              style={{
                // backgroundColor: 'red',
                justifyContent: 'center',
                height: height * 0.09,
                alignItems: 'center',
              }}>
              <TouchableOpacity
                onPress={() => handleSubmit()}
                style={{
                  backgroundColor: '#c4def6',
                  height: height * 0.07,
                  width: width * 0.8,
                  alignItems: 'center',
                  justifyContent: 'center',
                  borderRadius: height * 0.03,
                  borderColor: 'black',
                  borderWidth: 4,
                  shadowColor: 'black',
                  shadowOffset: {width: 8, height: 8},
                  shadowOpacity: 5,
                }}>
                <Text
                  style={{
                    fontSize: height * 0.03,
                    fontWeight: 'bold',
                    color: 'black',
                  }}>
                  Submit
                </Text>
              </TouchableOpacity>
            </View>

            <View
              style={{
                marginTop: height * 0.012,
                // flexDirection: 'row',
                // justifyContent: 'center',
                // alignItems: 'center',
                // alignSelf: 'center',
                height: height * 0.125,
                width: width * 0.95,
                backgroundColor: '#c1e1c5',
                borderTopWidth: 5,
                borderBottomWidth: 5,
              }}>
              <View
                style={{
                  flexDirection: 'row',
                  backgroundColor: 'white',
                  height: height * 0.035,
                  borderRadius: 20,
                  width: width * 0.3,
                  marginLeft: 5,
                  marginTop: 4,
                  borderWidth: 2,
                  // alignSelf: 'center',
                  alignItems: 'center',
                  justifyContent: 'center',
                }}>
                <Text
                  style={{
                    fontSize: height * 0.02,
                    // padding: 5,
                    fontWeight: 'bold',
                    color: 'black',
                  }}>
                  Name
                </Text>
                {/* <Image
                  style={{
                    width: width * 0.22,
                    height: height * 0.095,
                    marginLeft: 10,
                  }}
                  source={require('../assets/mtimg.png')}></Image> */}
              </View>
              <View style={{marginTop: 4, alignItems: 'center'}}>
                <TextInput
                  // placeholder="Body Parts"
                  onChangeText={(text) =>
                    setFormState({
                      ...formState,
                      place: text,
                    })
                  }
                  value={formState.place}
                  style={{
                    // alignSelf: 'flex-end',
                    // marginRight: 5,
                    backgroundColor: 'white',
                    borderRadius: 20,
                    width: width * 0.85,
                    height: height * 0.065,
                    borderWidth: 3,
                    // borderRadius: 20,
                  }}
                />
              </View>
            </View>

            <View
              style={{
                marginTop: height * 0.012,
                // flexDirection: 'row',
                // justifyContent: 'center',
                // alignItems: 'center',
                // alignSelf: 'center',
                height: height * 0.125,
                width: width * 0.95,
                backgroundColor: '#c1e1c5',
                borderTopWidth: 5,
                borderBottomWidth: 5,
              }}>
              <View
                style={{
                  flexDirection: 'row',
                  backgroundColor: 'white',
                  height: height * 0.035,
                  borderRadius: 20,
                  width: width * 0.3,
                  marginLeft: 5,
                  marginTop: 4,
                  borderWidth: 2,
                  // alignSelf: 'center',
                  alignItems: 'center',
                  justifyContent: 'center',
                }}>
                <Text
                  style={{
                    fontSize: height * 0.02,
                    // padding: 5,
                    fontWeight: 'bold',
                    color: 'black',
                  }}>
                  Sub. Name
                </Text>
                {/* <Image
                  style={{
                    width: width * 0.22,
                    height: height * 0.095,
                    marginLeft: 10,
                  }}
                  source={require('../assets/mtimg.png')}></Image> */}
              </View>
              <View style={{marginTop: 4, alignItems: 'center'}}>
                <TextInput
                  // placeholder="Body Parts"
                  onChangeText={(text) =>
                    setFormState({
                      ...formState,
                      from: text,
                    })
                  }
                  value={formState.from}
                  style={{
                    // alignSelf: 'flex-end',
                    // marginRight: 5,
                    backgroundColor: 'white',
                    borderRadius: 20,
                    width: width * 0.85,
                    height: height * 0.065,
                    borderWidth: 3,
                    // borderRadius: 20,
                  }}
                />
              </View>
            </View>

            <View
              style={{
                marginTop: height * 0.012,
                // flexDirection: 'row',
                // justifyContent: 'center',
                // alignItems: 'center',
                // alignSelf: 'center',
                height: height * 0.125,
                width: width * 0.95,
                backgroundColor: '#c1e1c5',
                borderTopWidth: 5,
                borderBottomWidth: 5,
              }}>
              <View
                style={{
                  flexDirection: 'row',
                  backgroundColor: 'white',
                  height: height * 0.035,
                  borderRadius: 20,
                  width: width * 0.3,
                  marginLeft: 5,
                  marginTop: 4,
                  borderWidth: 2,
                  // alignSelf: 'center',
                  alignItems: 'center',
                  justifyContent: 'center',
                }}>
                <Text
                  style={{
                    fontSize: height * 0.02,
                    // padding: 5,
                    fontWeight: 'bold',
                    color: 'black',
                  }}>
                  Roll No.
                </Text>
                {/* <Image
                  style={{
                    width: width * 0.22,
                    height: height * 0.095,
                    marginLeft: 10,
                  }}
                  source={require('../assets/mtimg.png')}></Image> */}
              </View>
              <View style={{marginTop: 4, alignItems: 'center'}}>
                <TextInput
                  // placeholder="Body Parts"
                  onChangeText={(text) =>
                    setFormState({
                      ...formState,
                      to: text,
                    })
                  }
                  value={formState.to}
                  style={{
                    // alignSelf: 'flex-end',
                    // marginRight: 5,
                    backgroundColor: 'white',
                    borderRadius: 20,
                    width: width * 0.85,
                    height: height * 0.065,
                    borderWidth: 3,
                    // borderRadius: 20,
                  }}
                />
              </View>
            </View>

            <View
              style={{
                marginTop: height * 0.012,
                // flexDirection: 'row',
                // justifyContent: 'center',
                // alignItems: 'center',
                // alignSelf: 'center',
                height: height * 0.18,
                width: width * 0.95,
                backgroundColor: '#c1e1c5',
                borderTopWidth: 5,
                borderBottomWidth: 5,
                
              }}>
              <View
                style={{
                  flexDirection: 'row',
                  backgroundColor: 'white',
                  height: height * 0.035,
                  borderRadius: 20,
                  width: width * 0.3,
                  marginLeft: 5,
                  marginTop: 4,
                  borderWidth: 2,
                  // alignSelf: 'center',
                  alignItems: 'center',
                  justifyContent: 'center',
                }}>
                <Text
                  style={{
                    fontSize: height * 0.02,
                    // padding: 5,
                    fontWeight: 'bold',
                    color: 'black',
                  }}>
                  Notes
                </Text>
                {/* <Image
                  style={{
                    width: width * 0.22,
                    height: height * 0.095,
                    marginLeft: 10,
                  }}
                  source={require('../assets/mtimg.png')}></Image> */}
              </View>
              <View style={{marginTop: 4, alignItems: 'center'}}>
                <TextInput
                  // placeholder="Body Parts"
                  onChangeText={(text) =>
                    setFormState({
                      ...formState,
                      by: text,
                    })
                  }
                  value={formState.by}
                  style={{
                    // alignSelf: 'flex-end',
                    // marginRight: 5,
                    backgroundColor: 'white',
                    borderRadius: 20,
                    width: width * 0.85,
                    height: height * 0.117,
                    borderWidth: 3,
                    // borderRadius: 20,
                  }}
                />
              </View>
            </View>

            <View
              style={{
                marginTop: height * 0.01,
                height: height * 0.1,
                flexDirection: 'row',
                justifyContent: 'space-between',
                backgroundColor: '#c4def6',
                padding: height * 0.02,
                alignItems: 'center',
              }}>
              <TouchableOpacity
                onPress={() => pickImage()}
                style={{
                  height: height * 0.09,
                  width: height * 0.1,
                  borderWidth: 5,
                  justifyContent: 'center',
                }}>
                {formState.image ? (
                  <Image
                    source={{uri: formState.image}}
                    resizeMode="stretch"
                    style={{height: height * 0.08, width: height * 0.09}}
                  />
                ) : (
                  <Icon
                    type="ionicon"
                    name="ios-image-outline"
                    size={height * 0.07}
                  />
                )}
              </TouchableOpacity>
              <View>
                <Icon type="ionicon" name="arrow-back" />
              </View>
              <View>
                <Text style={{fontSize: height * 0.03, fontWeight: 'bold'}}>
                  Student Image
                </Text>
              </View>
            </View>
          </View>
        </KeyboardAwareScrollView>
      </ImageBackground>
    </SafeAreaView>
  );
}
