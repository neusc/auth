/**
 *
 * Created by chuans
 * Date: 2018/3/12
 */
import React, { Component } from 'react'
import { Text } from 'react-native'
import firebase from 'firebase'
import { Card, CardSection, Button, Input, Spinner } from './common'

class loginForm extends Component {
  constructor (props) {
    super(props)
    this.state = {
      email: '',
      password: '',
      loading: false
    }
  }

  onButtonPress () {
    // 必须在构造函数里绑定this或使用箭头函数来绑定当前作用域到this
    const { email, password } = this.state
    this.setState({ error: '', loading: true })
    firebase.auth().signInWithEmailAndPassword(email, password)
      .then(() => this.onLoginSuccess())
      .catch(() => {
        firebase.auth().createUserWithEmailAndPassword(email, password)
          .then(() => this.onLoginSuccess())
          .catch(() => {this.onLoginFail()})
      })
  }

  onLoginFail () {
    this.setState({
      loading: false,
      error: 'Authentication Failed.'
    })
  }

  onLoginSuccess () {
    this.setState({
      email: '',
      password: '',
      loading: false,
      error: ''
    })
  }

  renderButton () {
    if (this.state.loading) {
      return <Spinner size="small" />
    }
    return (
      <Button onPress={() => this.onButtonPress()}>
        log in
      </Button>
    )
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
          {this.renderButton()}
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
