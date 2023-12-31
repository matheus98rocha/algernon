// In App.js in a new project

import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import ReadingNow from "./src/views/reading-now/reading-now.view";
import AlreadyReaded from "./src/views/already-readed/already-readed.view";
import WantToRead from "./src/views/want-to-read/want-to-read.view";

import { Entypo } from "@expo/vector-icons";
import { Foundation } from "@expo/vector-icons";
import BookDetails from "./src/views/book-details/book-details";

const Tab = createBottomTabNavigator();
const View = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={{
          headerShown: false,
        }}
      >
        <Tab.Screen
          name="Quero ler"
          component={WantToRead}
          options={{
            tabBarIcon: () => <Entypo name="book" size={24} color="black" />,
            tabBarLabelStyle: {
              fontSize: 15,
              color: "#000",
            },
            tabBarActiveBackgroundColor: "#ecca7c",
          }}
        />
        <Tab.Screen
          name="Lendo Agora"
          component={ReadingNow}
          options={{
            tabBarIcon: () => (
              <Entypo name="open-book" size={24} color="black" />
            ),
            tabBarLabelStyle: {
              fontSize: 15,
              color: "#000",
            },
            tabBarActiveBackgroundColor: "#ecca7c",
          }}
        />
        <Tab.Screen
          name="Já Li"
          component={AlreadyReaded}
          options={{
            tabBarIcon: () => (
              <Foundation name="book-bookmark" size={24} color="black" />
            ),
            tabBarLabelStyle: {
              fontSize: 15,
              color: "#000",
            },
            tabBarActiveBackgroundColor: "#ecca7c",
          }}
        />
      <View.Screen name="book-details" component={BookDetails} options={{
        
      }} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

export default App;
