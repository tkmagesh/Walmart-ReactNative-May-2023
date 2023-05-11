import { useEffect, useState } from "react";
import { Text } from "react-native";
const Timer = () => {
    const [currentTime, setCurrentTime] = useState(Date())
    useEffect(() => {
        // executed when the component is initialized & updated (conditional)

        const timerId = setInterval(() => {
            setCurrentTime(Date())
        }, 1000);
        console.log(`started timer. timerId = ${timerId}`)
        return () => {
            // executed when the component is unloaded
            console.log('clearing the timer')
            clearInterval(timerId)
        }
    }, [/* list the data which when changed we want the component to be rerendered */])


    return (
        <Text>{currentTime}</Text>
    )
}

export default Timer;