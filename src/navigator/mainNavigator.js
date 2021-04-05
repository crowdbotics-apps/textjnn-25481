import React from "react"
import { createDrawerNavigator } from "@react-navigation/drawer"
import { NavigationContainer } from "@react-navigation/native"

import SplashScreen from "../features/SplashScreen"
import SideMenu from "./sideMenu"
//@BlueprintImportInsertion
import Maps222245Navigator from '../features/Maps222245/navigator';
import Additem222244Navigator from '../features/Additem222244/navigator';
import Maps222240Navigator from '../features/Maps222240/navigator';
import UserProfile222236Navigator from '../features/UserProfile222236/navigator';

/**
 * new navigators can be imported here
 */

const AppNavigator = {
  //@BlueprintNavigationInsertion
Maps222245: { screen: Maps222245Navigator },
Additem222244: { screen: Additem222244Navigator },
Maps222240: { screen: Maps222240Navigator },
UserProfile222236: { screen: UserProfile222236Navigator },

  /** new navigators can be added here */
  SplashScreen: {
    screen: SplashScreen
  }
}

const Drawer = createDrawerNavigator()

const AppContainer = () => {
  return (
    <NavigationContainer>
      <Drawer.Navigator drawerContent={props => <SideMenu {...props} />}>
        {Object.keys(AppNavigator).map(s => (
          <Drawer.Screen name={s} component={AppNavigator[s].screen} />
        ))}
      </Drawer.Navigator>
    </NavigationContainer>
  )
}

export default AppContainer
