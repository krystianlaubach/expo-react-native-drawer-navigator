import { View, Text, Button, StyleSheet } from 'react-native';

function UserScreen({ navigation }) {
    const openDrawer = () => {
        navigation.toggleDrawer();
    };

    return (
        <View style={ styles.rootContainer }>
            <Text>
                This is the <Text style={ styles.highlight }>"User"</Text> screen!
            </Text>
            <View style={ styles.buttonContainer }>
                <Button title="Open Drawer" onPress={ openDrawer }/>
            </View>
        </View>
    );
}

export default UserScreen;

const styles = StyleSheet.create({
    rootContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    highlight: {
        fontWeight: 'bold',
        color: '#eb1064',
    },
    buttonContainer: {
        margin: 16,
    },
});
