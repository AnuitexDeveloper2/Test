
import { createBottomTabNavigator } from 'react-navigation-tabs';
import { createStackNavigator } from 'react-navigation-stack'
import { createDrawerNavigator } from "react-navigation-drawer";
import { createAppContainer } from "react-navigation";

import Cities from "./cities/index";
import City from "./cities/city";
import AddCities from "./addCities/index";

import { colors } from "./theme";

const options = {
    defaultNavigationOptions: {
        headerTitleAlign: 'center',
        headerStyle: {
            backgroundColor: colors.primary
        },
        headerTintColor: '#fff'

    }
}

const screens = {
    Page1: { screen: Cities },
    Page2: { screen: AddCities }
}

const DrawerNav = createDrawerNavigator(screens)

const CitiesNav = createStackNavigator({
    Cities: { screen: Cities as any },
    City: { screen: City as any }
}, options as any)

const Tabs = createBottomTabNavigator({
    Cities: { screen: CitiesNav },
    AddCities: { screen: AddCities }
})

export default createAppContainer(Tabs)