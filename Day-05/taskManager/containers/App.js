import React, { Component, PropTypes } from 'react'
import { View, StyleSheet } from 'react-native'
import { useDispatch, useSelector } from 'react-redux'

import { actionCreators } from '../redux/todoRedux'
import Title from '../components/Title'
import Input from '../components/Input'
import List from '../components/List'
import Footer from '../components/Footer'

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  divider: {
    height: 1,
    backgroundColor: 'whitesmoke',
  },
})


export default function App(){

  const dispatch = useDispatch()
  const items = useSelector(state => state.items);

  const addItem = (item) => {
    dispatch(actionCreators.addItem(item))
  }

  const removeItem = (index) => {
    dispatch(actionCreators.removeItem(index))
  }

  const toggleItemCompleted = (index) => {
    dispatch(actionCreators.toggleItemCompleted(index))
  }

  const removeCompleted = () => {
    dispatch(actionCreators.removeCompleted())
  }



  return (
    <View style={styles.container}>
      <Title> Todo List </Title>
      <Input
        placeholder={'Enter an item!'}
        onSubmit={addItem}
      />
      <View style={styles.divider}/>
      <List
        items={items}
        onRemoveItem={removeItem}
        onToggleItemCompleted={toggleItemCompleted}
      />
      <View style={styles.divider} />
      <Footer onRemoveCompleted={removeCompleted} />
    </View>
  )
}
