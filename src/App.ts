import React from 'react';
import { StyleSheet, Platform, Image, Text, View, ScrollView } from 'react-native';
import { createSwitchNavigator } from 'react-navigation'

import Loading from './auth/components/Loading';
import SignUp from './auth/components/SignUp'
import Login from './auth/components/Login'
import PostList from './post/components/PostList'

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