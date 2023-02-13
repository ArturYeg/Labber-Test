import { StyleSheet } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import SignUpPage from "../../screens/Auth/SignUpPage";
import SignUpVerification from "../../screens/Auth/SignUpVerification";
import WelcomePage from "../../screens/Welcom/WelcomePage";
import LoginPage from "../../screens/Auth/LoginPage";
import LoginVerification from "../../screens/Auth/LoginVerification";
import Home from "../../screens/Home/Home";
import Profile from "../../screens/Profile/Profile";
import CreateOrder from "../../screens/CreateOrder/CreateOrder";
import Notifications from "../../screens/Notification/Notification";
import OrderHistory from "../../screens/OrderHistory/OrderHistory";
import { Colors } from "../../constants/style";
import HomeIcon from '../../assets/navbarsvg/HomeIcon.svg';
import BookIcon from '../../assets/navbarsvg/BookIcon.svg';
import AddIcon from '../../assets/navbarsvg/AddIcon.svg';
import SubscriptionIcon from '../../assets/navbarsvg/SubscriptionIcon.svg';
import ProfileIcon from '../../assets/navbarsvg/ProfileIcon.svg';

const Stack = createNativeStackNavigator();
const BottomTabs = createBottomTabNavigator()

function NavigationOverview() {
    return (
        <BottomTabs.Navigator screenOptions={{
            headerStyle: { backgroundColor: Colors.color.primary, borderBottomLeftRadius: 12, borderBottomRightRadius: 12, },
            headerTintColor: '#fefefe',
            tabBarStyle: { backgroundColor: Colors.color.primary, marginBottom: 20, marginHorizontal: 26, borderRadius: 16, height: 60,paddingBottom:20,paddingTop:20, color: '#2199DD', },
            tabBarActiveTintColor: '#fefefe',
            tabBarInactiveTintColor: '#2199DD',
            tabBarShowLabel: false

        }}>
            <BottomTabs.Screen options={{
                tabBarIcon: ({ focused }) => <HomeIcon stroke={focused ? '#fefefe' : '#2199DD'} />,
            }}

                name="HomePage" component={Home} />
            <BottomTabs.Screen options={{
                tabBarIcon: ({ focused }) => <>
                    <BookIcon stroke={focused ? '#fefefe' : '#2199DD'} />
                </>,
            }} name="OrderHistory" component={OrderHistory} />
            <BottomTabs.Screen options={{
                tabBarIcon: ({ focused }) => <AddIcon stroke={focused ? '#fefefe' : '#2199DD'} />,
            }} name="CreateOrder" component={CreateOrder} />
            <BottomTabs.Screen options={{
                tabBarIcon: ({ focused }) => <SubscriptionIcon stroke={focused ? '#fefefe' : '#2199DD'} />,
            }} name="Notification" component={Notifications} />
            <BottomTabs.Screen options={{
                tabBarIcon: ({ focused }) => <ProfileIcon stroke={focused ? '#fefefe' : '#2199DD'} />,
            }} name="Profile" component={Profile} />
        </BottomTabs.Navigator>
    )
}
const AuthStack = () => {
    return (
        <Stack.Navigator screenOptions={{ headerStyle: { backgroundColor: 'transparent' }, headerTransparent: false, headerTitle: '', headerLeft: undefined, headerShown: false }} >
            <Stack.Screen name="Welcome" component={WelcomePage} />
            <Stack.Screen options={{ headerLeft: () => null }} name="SignUpPage" component={SignUpPage} />
            <Stack.Screen options={{ headerLeft: () => null }} name="SignUpVerification" component={SignUpVerification} />
            <Stack.Screen options={{ headerLeft: () => null }} name="LoginPage" component={LoginPage} />
            <Stack.Screen options={{ headerLeft: () => null }} name="LoginVerification" component={LoginVerification} />
            <Stack.Screen options={{ headerShown: false }} name="Home" component={NavigationOverview} />

        </Stack.Navigator>
    )
}

export default AuthStack;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'flex-start',
    },
});

