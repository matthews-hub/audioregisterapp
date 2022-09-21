import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Apps from './Components/audiorecords';
import Navbar from './Components/navbar';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import SignUp from './Components/signUp';
import LogIn from './Components/logIn';
import Dashboard from './Components/dashboard';

const Stack = createStackNavigator();
function MyStack() {
  return (
    <Stack.Navigator
      initialRouteName="Signup"
      screenOptions={{
        headerTitleAlign: 'center',
        headerStyle: {
          backgroundColor: '#3740FE',
        },
        headerTintColor: '#fff',
        headerTitleStyle: {
          fontWeight: 'bold',
        },
      }}>
      <Stack.Screen 
        name="Signup" 
        component={SignUp} 
        options={{ title: 'Signup' }}
      />       
      <Stack.Screen 
        name="Login" 
        component={LogIn} 
        // options={
        //   {title: 'Login'},
        //   {headerLeft: null} 
        // }
      />
      <Stack.Screen 
       name="Dashboard" 
       component={Dashboard} 
      //  options={
      //    { title: 'Dashboard' },
      //    {headerLeft: null} 
      //  }
      />
    </Stack.Navigator>
  );
}

export default function App() {
  return (
    <View >
        <NavigationContainer>
      {/* <MyStack /> */}
       <Navbar />
      {/* <Apps/> */}
      <SignUp/>
      <LogIn/>
    </NavigationContainer>

     
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 3,
    color:'orange',
    backgroundColor: '#3F4E4F',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
