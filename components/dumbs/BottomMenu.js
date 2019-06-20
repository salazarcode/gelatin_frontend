import * as React from 'react';
import { Text, View, ScrollView } from 'react-native';
import { connect } from 'react-redux'


class BottomMenu extends React.Component {
    static navigationOptions = {
        header: null
    }
    render() {
        return(
            <View style={{ flex: 1, flexDirection: 'column', justifyContent: 'space-between', }}>
                <View style={{flex:1, backgroundColor: 'powderblue'}} />
                <View style={{width: "100%", height: 50, backgroundColor: 'steelblue'}}>
                    
                </View>
            </View>
        )
    }
}

export default BottomMenu