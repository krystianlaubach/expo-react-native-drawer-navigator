import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { StatusBar } from 'expo-status-bar';
import { Ionicons } from '@expo/vector-icons';
import WelcomeScreen from './screens/WelcomeScreen';
import UserScreen from './screens/UserScreen';

const Drawer = createDrawerNavigator();

export default function App() {
    return (
        <>
            <StatusBar style='light' />
            <NavigationContainer>
                <Drawer.Navigator screenOptions={{
                    headerStyle: { backgroundColor: '#3c0a6b' },
                    headerTintColor: 'white',
                    drawerActiveBackgroundColor: '#f0e1ff',
                    drawerActiveTintColor: '#3c0a6b',
                    drawerTintColor: 'black',
                    drawerStyle: { backgroundColor: 'white' },
                }}>
                    <Drawer.Screen name='Welcome' component={ WelcomeScreen } options={{
                        drawerIcon: ({color, size}) => <Ionicons name='home' color={color} size={size} />,
                        drawerLabel: 'Home'
                    }} />
                    <Drawer.Screen name='UserScreen' component={ UserScreen } options={{
                        drawerIcon: ({color, size}) => <Ionicons name='person' color={color} size={size} />,
                        drawerLabel: 'User Dashboard'
                    }} />
                </Drawer.Navigator>
            </NavigationContainer>
        </>
    );
}
