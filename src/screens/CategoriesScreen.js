import React from 'react';
import {
  View,
  Text,
  Dimensions,
  TouchableOpacityBase,
  SafeAreaView,
  Image,
  ImageBackground,
  TouchableOpacity,
  FlatList,
} from 'react-native';
import {Icon} from 'react-native-elements';
import {TakeHolidayContext} from '../screens/context';
const {height, width} = Dimensions.get('window');

export function CategoriesScreen({navigation}) {
  const {state, setState} = React.useContext(TakeHolidayContext);
  const renderItem = ({item}) => (
    <TouchableOpacity
      onPress={() => navigation.navigate('Details', {details: item})}
      style={{
        width: width * 1,
        alignItems: 'center',
        flexDirection: 'row',
        height: height * 0.3,
        // borderRadius: 50,
        backgroundColor: 'white',
        justifyContent: 'center',
        // borderWidth: 5,
        marginTop: height * 0.014,
        
      }}>
      
        <ImageBackground
          source={require('../assets/cimg.jpg')}
          style={{
            height: height * 0.3,
            width,
            alignItems: 'center',
            justifyContent: 'center',
          }}>
          <View
            style={{
              width,
              height: height * 0.14,
              justifyContent: 'center',
              alignSelf: 'center',
              // backgroundColor: 'red',
              marginBottom: 20,
            }}>
            <Text
              style={{
                fontSize: height * 0.06,
                fontWeight: 'bold',
                textAlign: 'center',
                // textDecorationLine: 'underline',
                color: 'white',
              }}>
              {item}
            </Text>
          </View>
        </ImageBackground>
      
    </TouchableOpacity>
  );
  return (
    <SafeAreaView style={{width, height}}>
      <ImageBackground
        style={{width, height, flex: 1}}
        blurRadius={0}
        source={require('../assets/bcbk1.jpg')}>
        <View
          style={{
            justifyContent: 'space-between',
            backgroundColor: 'rgba(0,0,0,0.9)',
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
              Categories
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
            // backgroundColor: '#f5fa',
            height: height * 0.85,
          }}>
          <FlatList
            showsVerticalScrollIndicator={false}
            data={[
              'Class 1',
              'Class 2',
              'Class 3',
              'Class 4',
              'Class 5',
              'Class 6',
              'Class 7',
              'Class 8',
              'Class 9',
              'Class 10',
              'Class 11',
              'Class 12'
            ]}
            keyExtractor={(item, index) => index.toString()}
            renderItem={renderItem}
          />
        </View>
      </ImageBackground>
    </SafeAreaView>
  );
}
