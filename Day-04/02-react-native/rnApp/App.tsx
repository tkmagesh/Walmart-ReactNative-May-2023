import { View, Text, StyleSheet } from 'react-native'
import Greeter from './components/greeter';
import Timer from './components/timer';
import BoxModelDemo from './components/flexbox/BoxModelDemo2';
import BoxModelDemo1 from './components/flexbox/BoxModelDemo1';

const App = () => {
  return (
   <Greeter/>
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