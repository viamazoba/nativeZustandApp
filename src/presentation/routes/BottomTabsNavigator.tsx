import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { HomeScreen } from '../screens/home/HomeScreen';
import { ProfileScreen } from '../screens/profile/ProfileScreen';
import { SettingsScreen } from '../screens/settings/SettingsScreen';
import { useCounterStore } from '../store/counter-store';

const Tab = createBottomTabNavigator();

export const BottomTabsNavigator = () => {
    const { count } = useCounterStore();

    return (
        <Tab.Navigator>
            <Tab.Screen name="Home" component={HomeScreen} />
            <Tab.Screen name="Profile" component={ProfileScreen} />
            <Tab.Screen options={{ headerTitle: `Counter: ${count}` }} name="Settings" component={SettingsScreen} />
        </Tab.Navigator>
    );
};
