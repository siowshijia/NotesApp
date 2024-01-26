import React from 'react';
import {View, Text, ScrollView, Image, Button, TouchableOpacity} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

const SummaryScreen = ({navigation}) => {
  return (
    <LinearGradient
      start={{x: 0, y: 0}}
      end={{x: 1, y: 1}}
      colors={['#1B284F', '#351159', '#421C45', '#3B184E']}
      style={{flex: 1}}>
      <Image
        source={require('../images/bg_robot.png')}
        style={{width: 229, height: 185, position: 'absolute', top: 0, right: 0}}
      />
      <ScrollView>
        <View style={{paddingTop: 150, paddingBottom: 120}}>
          <View style={{flex:1, paddingLeft:20, paddingRight: 20, paddingVertical: 20, borderTopLeftRadius: 20, borderTopRightRadius: 20, backgroundColor: 'rgba(255,255,255,0.05)'}}>
            <View style={{marginBottom: 24}}>
              <View style={{flexDirection: 'row', alignItems: 'center'}}>
                <Image
                  source={require('../images/icon_cat_work.png')}
                  style={{width: 50, height: 50, marginRight: 5}}
                />
                <Text style={{color: '#fff', fontSize: 16, flex: 1}}>Work and study</Text>
                <TouchableOpacity style={{borderRadius: 30, backgroundColor: '#F94695', color: '#fff', paddingHorizontal: 16, paddingVertical: 8}} >
                  <Text style={{color: '#fff', fontSize: 14, fontWeight: '500'}}>Detail</Text>
                </TouchableOpacity>
              </View>
              <View style={{backgroundColor: 'rgba(255,255,255,0.12)', borderRadius: 16, padding: 15, marginTop: 10, borderWidth: 1, borderColor: 'rgba(255,255,255,0.12)'}}>
                <Text style={{color: 'rgba(255,255,255,0.7)'}}>This topic has a total of 50 records.</Text>
              </View>
            </View>
            
            <View style={{marginBottom: 24}}>
              <View style={{flexDirection: 'row', alignItems: 'center'}}>
                <Image
                  source={require('../images/icon_cat_work.png')}
                  style={{width: 50, height: 50, marginRight: 5}}
                />
                <Text style={{color: '#fff', fontSize: 16, flex: 1}}>Work and study</Text>
                <TouchableOpacity style={{borderRadius: 30, backgroundColor: '#F94695', color: '#fff', paddingHorizontal: 16, paddingVertical: 8}} >
                  <Text style={{color: '#fff', fontSize: 14, fontWeight: '500'}}>Detail</Text>
                </TouchableOpacity>
              </View>
              <View style={{backgroundColor: 'rgba(255,255,255,0.12)', borderRadius: 16, padding: 15, marginTop: 10, borderWidth: 1, borderColor: 'rgba(255,255,255,0.12)'}}>
                <Text style={{color: 'rgba(255,255,255,0.7)'}}>This topic has a total of 50 records.</Text>
              </View>
            </View>
            
            <View style={{marginBottom: 24}}>
              <View style={{flexDirection: 'row', alignItems: 'center'}}>
                <Image
                  source={require('../images/icon_cat_work.png')}
                  style={{width: 50, height: 50, marginRight: 5}}
                />
                <Text style={{color: '#fff', fontSize: 16, flex: 1}}>Work and study</Text>
                <TouchableOpacity style={{borderRadius: 30, backgroundColor: '#F94695', color: '#fff', paddingHorizontal: 16, paddingVertical: 8}} >
                  <Text style={{color: '#fff', fontSize: 14, fontWeight: '500'}}>Detail</Text>
                </TouchableOpacity>
              </View>
              <View style={{backgroundColor: 'rgba(255,255,255,0.12)', borderRadius: 16, padding: 15, marginTop: 10, borderWidth: 1, borderColor: 'rgba(255,255,255,0.12)'}}>
                <Text style={{color: 'rgba(255,255,255,0.7)'}}>This topic has a total of 50 records.</Text>
              </View>
            </View>
          </View>
        </View>
      </ScrollView>
    </LinearGradient>
  );
};

export default SummaryScreen;
