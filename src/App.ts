import React from 'react';
import { StyleSheet, Platform, Image, Text, View, ScrollView } from 'react-native';
import { createSwitchNavigator } from 'react-navigation'

import Loading from './commons/Loading';
import SignUp from './auth/SignUp'
import Login from './auth/Login'
import PostList from './post/PostList'

const App = createSwitchNavigator(
  {
    Loading,
    SignUp,
    Login,
    PostList
  },
  {
    initialRouteName: 'Loading'
  }
)
export default App