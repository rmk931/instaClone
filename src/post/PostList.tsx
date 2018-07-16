import React from 'react'
import { StyleSheet, Platform, Image, Text, View } from 'react-native'

interface Props {

}

interface State {
    email: string
}

export default class PostList extends React.Component<Props, State> {

    state: State = {
        email: ''
    }

    render() {
        const { email } = this.state
        return (
            <View style={styles.container}>
                <Text>
                    Hi {email !== '' && email}!
                </Text>
            </View>
        )
    }
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    }
})