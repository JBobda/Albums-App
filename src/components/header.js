// Import libraries for making a component
import React from 'react';
import { Text, View } from 'react-native';

//Make a component
const Header = (props) => {
    const { textStyle, viewStyle } = styles;

    return (
        <View style={viewStyle}>
            <Text style={textStyle}>{props.headerText}</Text>
        </View>
    );
};

const styles = {
    viewStyle: {
        backgroundColor: '#FFFF00',
        justifyContent: 'center',
        alignItems: 'center',
        height: 60,
        paddingTop: 15,

        //IOS Shadow Configuration
        shadowColor: '#000000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.2,

        //Android Shadow Configuration
        elevation: 2,
        position: 'relative'
    },
    textStyle: {
        fontSize: 20,
        color: 'black'
    }
};

// Make the component available to other parts of the app
export default Header;
