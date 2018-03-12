/**
 *
 * Created by chuans
 * Date: 2018/3/12
 */
import React, { Component } from 'react'
import { Card, CardSection, Button, Input } from './common'

class loginForm extends Component {
  constructor (props) {
    super(props)
    this.state = {
      email: '',
      password: ''
    }
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
        <CardSection>
          <Button>
            log in
          </Button>
        </CardSection>
      </Card>
    )
  }
}

export default loginForm
