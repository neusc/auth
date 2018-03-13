/**
 *
 * Created by chuans
 * Date: 2018/3/12
 */
import React, { Component } from 'react'
import { Text } from 'react-native'
import firebase from 'firebase'
import { Card, CardSection, Button, Input } from './common'

class loginForm extends Component {
  constructor (props) {
    super(props)
    this.state = {
      email: '',
      password: ''
    }
  }

  onButtonPress () {
    // 必须在构造函数里绑定this或使用箭头函数来绑定当前作用域到this
    const { email, password } = this.state
    this.setState({ error: '' })
    firebase.auth().signInWithEmailAndPassword(email, password).then(() => console.log('signIn'))
      .catch(() => {
        firebase.auth().createUserWithEmailAndPassword(email, password).then(() => console.log('signUp'))
          .catch((e) => {
            console.log(e)
            this.setState({ error: 'Authentication Failed.' })
          })
      })
  }

  render () {
    return (
      <Card>
        <CardSection>
          <Input
            placeholder="user@gmail.com"
            label="Email"
            value={this.state.email}
            onChangeText={email => this.setState({ email })}
          />
        </CardSection>
        <CardSection>
          <Input
            secureTextEntry
            placeholder="password"
            label="Password"
            value={this.state.password}
            onChangeText={password => this.setState({ password })}
          />
        </CardSection>
        <Text style={styles.errorStyle}>{this.state.error}</Text>
        <CardSection>
          <Button onPress={() => this.onButtonPress()}>
            log in
          </Button>
        </CardSection>
      </Card>
    )
  }
}

const styles = {
  errorStyle: {
    fontSize: 20,
    alignSelf: 'center',
    color: 'red'
  }
}

export default loginForm
