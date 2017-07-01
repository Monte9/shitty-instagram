import React from 'react';
import { StyleSheet, Image, Text, View, ScrollView, Dimensions } from 'react-native';

import Icon from 'react-native-vector-icons/FontAwesome';
import IconEvil from 'react-native-vector-icons/EvilIcons';

const SCREEN_HEIGHT = Dimensions.get('window').height;
const SCREEN_WIDTH = Dimensions.get('window').width;

export default class Post extends React.Component {
  constructor() {
    super();

    this.state ={
      liked: false,
      retweet: true
    }
  }

  render() {
    const { userName, profileImage, createdAt, image } = this.props.postData

    return (
      <View style={{height: 510, width: SCREEN_WIDTH, borderColor: '#000', borderBottomWidth: 1}}>
        <View style={{height: 70, width: SCREEN_WIDTH, flexDirection: 'row', alignItems: 'center'}}>
          <Image source={{uri: profileImage}} style={{height: 50, width: 50, marginVertical: 10, marginLeft: 10, borderRadius: 25}} />
          <Text style={{flex: 4, marginLeft: 10, fontSize: 18}}>{userName}</Text>
          <Text style={{flex: 2, justifyContent: 'flex-end', fontSize: 13}}>{createdAt}</Text>
        </View>
        <View style={{height: 400, width: SCREEN_WIDTH}}>
          <Image source={{uri: image}} style={{height: 400, width: SCREEN_WIDTH}} />
        </View>
        <View style={{height: 40, width: SCREEN_WIDTH, alignItems: 'center', flexDirection: 'row'}}>
          {this.state.liked ?
            <Icon name="heart" size={20} color='red' style={{margin: 10}} onPress={() => this.setState({liked: !this.state.liked})} /> :
            <Icon name="heart-o" size={20} color='red' style={{margin: 10}} onPress={() => this.setState({liked: !this.state.liked})} />
          }
          {this.state.retweet ?
            <Icon name="retweet" size={20} color='green' style={{margin: 10}} onPress={() => this.setState({retweet: !this.state.retweet})} /> :
            <IconEvil name="retweet" size={24} color='green' style={{margin: 10}} onPress={() => this.setState({retweet: !this.state.retweet})} />
          }
          <Icon name="share" size={20} color="#000" style={{margin: 10}} />
        </View>
      </View>
    );
  }
}
