import React from 'react'
import { connect } from 'react-redux';
import { bindActionCreators, Dispatch } from 'redux';
import { StyleSheet, Platform, Image, Text, View, Button } from 'react-native'

import { AppReducerState } from '../reducer';
import { logoutAction } from '../auth';
import { Navigation } from '../types';


interface Props {
    navigation: Navigation;
    email: string;
    logout: (redirectTo: Function) => any;
}

class PostList extends React.Component<Props> {

    logout = () => {
        this.props.logout(this.props.navigation.navigate);
    }

    render() {
        const { email } = this.props
        return (
            <View style={styles.container}>
                <Text>
                    Hi {email !== '' && email}!
                </Text>
                <Button title="Logout" onPress={this.logout}/>
            </View>
        )
    }
}

const mapStateToProps = (state: AppReducerState) => ({
    email: state.authReducer.user.email
});

const mapDispatchToProps = (dispatch: Dispatch) => bindActionCreators({
    logout: logoutAction
}, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(PostList);

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    }
})