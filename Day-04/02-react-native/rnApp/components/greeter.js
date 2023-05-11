import { useState } from 'react'
import { View, Text, StyleSheet, Button, Alert, TextInput } from 'react-native'

const Greeter = () => {
    const [msg, setMsg] = useState('dummy message')
    const [userName, setUserName] = useState('');

    const onGreetBtnClick = () => {
        setMsg(`Hi ${userName}!`)
    }
    const onUserNameChange = (userName) => {
        setUserName(userName)
    }
    return (
        
        <View style={styles.container}>
            <TextInput 
                style={styles.textInput} 
                placeholder='Enter you name'
                onChangeText={onUserNameChange}
            />
            <Button title="Greet" onPress={onGreetBtnClick}></Button>
            <Text style={styles.text}>{msg}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        paddingTop: 20
    },
    text: {
        color: 'red',
        fontSize: 22,
        fontWeight: 'bold'
    },
    textInput : {
        fontSize: 18
    }
})

export default Greeter;