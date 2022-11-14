import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { App } from '../components/coba'

const Stack = createNativeStackNavigator()

const HomeScreen = ({ navigation }) => {
    return (
        <Button
            title="Go to Jane's profile"
            onPress={() =>
                navigation.navigate('Profile', { name: 'Jane' })
            }
        />
    );
};
// const ProfileScreen = ({ navigation, route }) => {
//     return <Text>This is {route.params.name}'s profile</Text>;
// };

export default function Router() {
    return (
        <Stack.Navigator>
            <Stack.Screen
                name="Home"
                component={HomeScreen}
                options={{ title: 'Welcome' }}
            />
            {/* <Stack.Screen name="Profile" component={ProfileScreen} /> */}
        </Stack.Navigator>
    )
}