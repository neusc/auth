/**
 *
 * Created by chuans
 * Date: 2018/3/12
 */
import React, { Component } from 'react'
import { TextInput } from 'react-native'
import { Card, CardSection, Button } from './common'

class loginForm extends Component {
  render () {
    return (
      <Card>
        <CardSection>
          <TextInput style={{ flex: 1, height: 20 }} />
        </CardSection>
        <CardSection></CardSection>
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
