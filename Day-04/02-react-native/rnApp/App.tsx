import { View, Text, StyleSheet } from 'react-native'
import Greeter from './components/greeter';
import Timer from './components/timer';

const App = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>React Native App!</Text>
      <Greeter/>
      {/* <Timer/> */}
    </View>
  )
}

const styles = StyleSheet.create({
  container : {
    padding : 20
    // paddingLeft : 2
  
  },
  text : {
    color : 'red',
    fontSize : 22,
    fontWeight : 'bold',
    textAlign: 'center'
  }
})

export default App;