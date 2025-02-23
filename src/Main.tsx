import { NavigationContainer } from '@react-navigation/native';
import { BottomTabsNavigator } from './presentation/routes/BottomTabsNavigator';


export const Main = () => {

    return (
        <NavigationContainer>
            <BottomTabsNavigator />
        </NavigationContainer>
    );
};


