import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators, Dispatch } from 'redux';
import { StyleSheet, Text, TextInput, View, Button } from 'react-native';

import { Navigation } from '../../types';
import { AppReducerState } from '../../reducer';
import * as actions from '../actions';

interface Props {
    navigation: Navigation;
    error: string;
    signupRequest: (email: string, password: string, redirectTo: Function) => any;
}

interface State {
    readonly email: string;
    readonly password: string; 
}

class SignUp extends React.Component<Props, State> {

    state: State = { 
        email: '', 
        password: '', 
    }

    handleSignUp = () => {
       this.props.signupRequest(this.state.email, this.state.password, this.props.navigation.navigate);
    }

    render() {
        return (
            <View style={styles.container}>
                <Text>Sign Up</Text>
                {this.props.error !== '' &&
                    <Text style={{ color: 'red' }}>
                        {this.props.error}
                    </Text>}
                <TextInput
                    placeholder="Email"
                    autoCapitalize="none"
                    style={styles.textInput}
                    onChangeText={email => this.setState({ email })}
                    value={this.state.email}
                />
                <TextInput
                    secureTextEntry
                    placeholder="Password"
                    autoCapitalize="none"
                    style={styles.textInput}
                    onChangeText={password => this.setState({ password })}
                    value={this.state.password}
                />
                <Button title="Sign Up" onPress={this.handleSignUp} />
                <Button
                    title="Already have an account? Login"
                    onPress={() => this.props.navigation.navigate('Login')}
                />
            </View>
        )
    }
}

const mapStateToProps = (state: AppReducerState) => ({
    error: state.authReducer.error
});

const mapDispatchToProps = (dispatch: Dispatch) => bindActionCreators({
    signupRequest: actions.signupRequest
}, dispatch)


export default connect(mapStateToProps, mapDispatchToProps)(SignUp);

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