/**
 *
 * Created by chuans
 * Date: 2018/3/9
 */
import React, { Component } from 'react'
import { View, Text } from 'react-native'
import { Header } from './components/common'
import LoginForm from './components/loginForm'
import firebase from 'firebase'

class App extends Component {
  componentWillMount () {
    // 初始化firebase
    firebase.initializeApp({
      apiKey: 'AIzaSyDeFl_8SxW2m4jZ9008lC-qKIsb6OzXEYA',
      authDomain: 'authentication-36419.firebaseapp.com',
      databaseURL: 'https://authentication-36419.firebaseio.com',
      projectId: 'authentication-36419',
      storageBucket: 'authentication-36419.appspot.com',
      messagingSenderId: '221991093256'
    })
  }

  render () {
    return (
      <View>
        <Header headerText="Authentication" />
        <LoginForm />
      </View>
    )
  }
}

export default App
