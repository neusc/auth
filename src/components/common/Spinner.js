/**
 *
 * Created by chuans
 * Date: 2018/3/13
 */
import React from 'react'
import { View, ActivityIndicator } from 'react-native'

const Spinner = (props) => {
  return (
    <View style={styles.spinnerStyle}>
      <ActivityIndicator size={props.size || 'large'} />
    </View>
  )
}

const styles = {
  spinnerStyle: {
    justifyContent: 'center',
    alignItems: 'center'
  }
}

export { Spinner }
