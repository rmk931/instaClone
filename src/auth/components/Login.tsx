import React from 'react'
import { connect } from 'react-redux';
import { bindActionCreators, Dispatch } from 'redux';
import { StyleSheet, Text, TextInput, View, Button, AppState } from 'react-native'

import { Navigation } from '../../types';
import { AppReducerState } from '../../reducer';
import * as actions from '../actions';

interface Props {
    navigation: Navigation;
    error: string;
    loginRequest: (email: string, password: string, redirectTo: Function) => any;
}

interface State {
    readonly email: string;
    readonly password: string;
}

class Login extends React.Component<Props, State> {

    state: State = {
        email: '',
        password: ''
    }

    handleLogin = () => {
        this.props.loginRequest(this.state.email, this.state.password, this.props.navigation.navigate);
    }
    render() {
        return (
            <View style={styles.container}>
                <Text>Login</Text>
                {this.props.error !== '' &&
                    <Text style={{ color: 'red' }}>
                        {this.props.error}
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

const mapStateToProps = (state: AppReducerState) => ({
    error: state.authReducer.error
});

const mapDispatchToProps = (dispatch: Dispatch) => bindActionCreators({
    loginRequest: actions.loginRequest
}, dispatch);



export default connect(mapStateToProps, mapDispatchToProps)(Login);

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
