import React from 'react';
import { StyleSheet, Image, Text, View, ScrollView, Dimensions } from 'react-native';

import Icon from 'react-native-vector-icons/FontAwesome';

const SCREEN_HEIGHT = Dimensions.get('window').height;
const SCREEN_WIDTH = Dimensions.get('window').width;

import Post from './Post';

const data = [
  {
    userName: 'Monte Thakkar',
    profileImage: 'https://s-media-cache-ak0.pinimg.com/736x/7f/be/50/7fbe50ec634c65709d7fe6ac267c4e6f.jpg',
    createdAt: '12th July, 2017',
    image: 'https://s-media-cache-ak0.pinimg.com/736x/7f/be/50/7fbe50ec634c65709d7fe6ac267c4e6f.jpg'
  },
  {
    userName: 'Jessie Parker',
    profileImage: 'https://s-media-cache-ak0.pinimg.com/736x/7f/be/50/7fbe50ec634c65709d7fe6ac267c4e6f.jpg',
    createdAt: '8th Feb, 2016',
    image: 'https://static.pexels.com/photos/111755/pexels-photo-111755.jpeg'
  },
  {
    userName: 'James Harden',
    profileImage: 'https://s-media-cache-ak0.pinimg.com/736x/7f/be/50/7fbe50ec634c65709d7fe6ac267c4e6f.jpg',
    createdAt: '28th August, 2017',
    image: 'http://cdn2-www.dogtime.com/assets/uploads/gallery/30-impossibly-cute-puppies/impossibly-cute-puppy-8.jpg'
  },
  {
    userName: 'Stephen Curry',
    profileImage: 'https://s-media-cache-ak0.pinimg.com/736x/7f/be/50/7fbe50ec634c65709d7fe6ac267c4e6f.jpg',
    createdAt: '1st Feb, 2017',
    image: 'https://www.cesarsway.com/sites/newcesarsway/files/styles/large_article_preview/public/The-stages-of-puppy-growth.jpg?itok=9ptPJwY8'
  },
  {
    userName: 'Kope Bryant',
    profileImage: 'https://s-media-cache-ak0.pinimg.com/736x/7f/be/50/7fbe50ec634c65709d7fe6ac267c4e6f.jpg',
    createdAt: '23th December, 2017',
    image: 'https://bluebuffalo.com/contentassets/db30e3f69a1e4370a6b611e3614077bc/puppy-tbt-callout.png'
  }
]

export default class App extends React.Component {
  renderPosts() {
    console.log(data)

    return data.map( ( postData, index ) => {
      return <Post key={index} postData={postData} />
    })
  }

  render() {
    return (
      <View style={{flex: 1}}>
        <View style={{height: 60, width: SCREEN_WIDTH, justifyContent: 'center', alignItems: 'center', borderColor: '#000', borderBottomWidth: 1}}>
          <Text style={{fontSize: 30, marginTop: 10, color: '#123531'}}>Instagram</Text>
        </View>
        <ScrollView>
          {this.renderPosts()}
        </ScrollView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
});
