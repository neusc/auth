/**
 *
 * Created by chuans
 * Date: 2018/3/9
 */
import React, { Component } from 'react'
import { View } from 'react-native'
import { Button, Header, Spinner } from './components/common'
import LoginForm from './components/loginForm'
import firebase from 'firebase'

class App extends Component {
  constructor (props) {
    super(props)
    this.state = { loggedIn: null }
  }

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

    firebase.auth().onAuthStateChanged(user => {
      if (user) {
        this.setState({ loggedIn: true })
      } else {
        this.setState({ loggedIn: false })
      }
    })
  }

  renderContent () {
    switch (this.state.loggedIn) {
      case true:
        return <Button>Log Out</Button>
      case false:
        return <LoginForm />
      default:
        return <Spinner size="large" />
    }
  }

  render () {
    return (
      <View>
        <Header headerText="Authentication" />
        {this.renderContent()}
      </View>
    )
  }
}

export default App
