import React from 'react';
import {
  StyleSheet,
  Text,
  View
} from 'react-native';

const BoxModelDemo1 = () => (
  <View style={styles.main}>
    {/* 
    <Text>
      Ut et ex tempor sint fugiat pariatur id amet. Irure aliquip Lorem nisi cillum proident in reprehenderit labore aliqua dolor. Officia in mollit dolor culpa dolor anim elit commodo. Aliqua culpa non veniam dolore ad eu eiusmod nisi ut consectetur veniam velit minim.
    </Text> 
    */}
    
    <Text style={styles.content1}>Column 1</Text>
    <Text style={styles.content2}>Column 2</Text>
    <Text style={styles.content3}>Column 3</Text> 
   
  </View>
);

const styles = StyleSheet.create({
  main: {
    flex: 1,
    paddingVertical: 20,
    flexDirection: 'column',
    backgroundColor : '#e7e7e7',
    alignItems: 'center', //cross axis
    justifyContent : 'space-around' //main axis
    
    // flexWrap: 'wrap'
  },
  content1: {
    // flex : 2,
    padding: 20,
    margin: 0,
    backgroundColor: '#ef4c',
    width: 125,
    height: 125,
    borderWidth: 1,
    borderColor: 'red',
    textAlign: 'center',
   
  },
  content2: {
    // flex: 1,
    padding: 20,
    margin: 0,
    backgroundColor: '#ef4c',
    width: 125,
    height: 125,
    borderWidth: 1,
    borderColor: 'red',
    textAlign: 'center'
  },
  content3: {
    // flex: 1,
    padding: 20,
    margin: 0,
    backgroundColor: '#ef4c',
    width: 125,
    height: 125,
    borderWidth: 1,
    borderColor: 'red',
    textAlign: 'center'
  }
});

export default BoxModelDemo1;
