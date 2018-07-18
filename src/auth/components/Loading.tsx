import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators, Dispatch } from 'redux';
import { View, Text, ActivityIndicator, StyleSheet } from 'react-native';

import { isAuthRequest } from '../actions'
import { Navigation } from '../../types';

interface Props {
    navigation: Navigation;
    isAuthRequest: (redirectTo: Function) => any;
}

class Loading extends React.Component<Props> {

    componentDidMount() {
        this.props.isAuthRequest(this.props.navigation.navigate);
    }

    render() {
        return (
            <View style={styles.container}>
                <Text>Loading</Text>
                <ActivityIndicator size="large" />
            </View>
        )
    }
}


const mapDispatchToProps = (dispatch: Dispatch) => bindActionCreators({
    isAuthRequest: isAuthRequest
}, dispatch);

export default connect(null, mapDispatchToProps)(Loading);

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    }
})
