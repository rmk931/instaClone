import React from 'react'
import { connect, DispatchProp } from 'react-redux';
import { StyleSheet, Text, TextInput, View, Button } from 'react-native'

import { Navigation } from './types';

interface Props {
    navigation: Navigation
}

interface State {
    readonly email: string,
    readonly password: string,
    readonly errorMessage: string,
}

class Login extends React.Component<Props, State> {

    state: State = {
        email: '',
        password: '',
        errorMessage: ''
    }

    handleLogin = () => {
        console.log('handleLogin')
    }
    render() {
        return (
            <View style={styles.container}>
                <Text>Login</Text>
                {this.state.errorMessage &&
                    <Text style={{ color: 'red' }}>
                        {this.state.errorMessage}
                    </Text>}
                <TextInput
                    style={styles.textInput}
                    autoCapitalize="none"
                    placeholder="Email"
                    onChangeText={email => this.setState({ email })}
                    value={this.state.email}
                />
                <TextInput
                    secureTextEntry
                    style={styles.textInput}
                    autoCapitalize="none"
                    placeholder="Password"
                    onChangeText={password => this.setState({ password })}
                    value={this.state.password}
                />
                <Button title="Login" onPress={this.handleLogin} />
                <Button
                    title="Don't have an account? Sign Up"
                    onPress={() => this.props.navigation.navigate('SignUp')}
                />
            </View>
        )
    }
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    textInput: {
        height: 40,
        width: '90%',
        borderColor: 'gray',
        borderWidth: 1,
        marginTop: 8
    }
})

const mapStateToProps = (state: State) => ({

});

const mapDispatchToProps = (dispatch: Dispatch) => ({
    handleClick: () => dispatch(incrementCounterAction())
});



export default connect(mapStateToProps, mapDispatchToProps)(Login);