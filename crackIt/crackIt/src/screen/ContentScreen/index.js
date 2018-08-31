import React, { Component } from 'react';
import axios from 'axios';
import { Text, View, TouchableOpacity, StyleSheet, Linking} from 'react-native';
import { Card,  List, ListItem } from 'react-native-elements';
import { StackNavigator } from 'react-navigation';


class ContentScreen extends Component {
  static navigationOptions =
  {
     title: 'Contents',
  };
   constructor(props) {
    super(props);

    this.state = {
      contents: [],
    };
  }

  componentDidMount() {
    fetch('http://localhost:3001/contents')
      .then(response => response.json())
      .then(contents => this.setState({ contents }));
  }
   
  //  alertItemName = (item) => {
  //         alert(item.name)
  //      }
   render() {
     
      return (
      //   <TouchableOpacity
      //   key={i}
      //   style={styles.item}
      //   onPress={() => this.props.navigation.navigate('Item', { title: item.name })}
      // >
      //   <Text style={styles.itemText}>{item.name}</Text>
      // </TouchableOpacity>)
      <List>
        <TouchableOpacity containerStyle={{marginBottom: 20}} onPress = {() => this.props.navigation.navigate('Details')} >
          {
            this.state.contents.map((item, index) => (
              <Card
                key={item._id}
                title={item.name}>
                  <Text style = {styles.text} >
                   {item.contentId} {item.name}
                  </Text>
              </Card>
            ))
          }
        </TouchableOpacity>
        </List>

        //  <View> 
        //     {
        //        this.state.contents.map((item, index) => (
        //           <TouchableOpacity
        //              key = {item._id}
        //              style = {styles.container}
        //              onPress = {() => this.alertItemName(item)}>
        //              <Text style = {styles.text}>
        //              {item.id} {item.name}
        //              </Text>
        //           </TouchableOpacity>
        //        ))
        //     }
        //  </View>
      )
   }
}
export default ContentScreen

const styles = StyleSheet.create ({
   container: {
      padding: 10,
      marginTop: 3,
      backgroundColor: '#b1b4f9',
      alignItems: 'center',
   },
   text: {
      color: '#4f603c',
   }
})


