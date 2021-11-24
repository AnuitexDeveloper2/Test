
import React, { useEffect, useState } from 'react';
import Tabs from './app/index';
import { City, Location } from './app/types/city';

import AsyncStorage from "@react-native-async-storage/async-storage";
const App = () => {

  const [state, setState] = useState({
    cities: Array<City>()
  })

  useEffect(()=> {
    getCity()
  },[])

  const getCity = async() => {
    let data =  await AsyncStorage.getItem("stack")
    if (data) {
      const cities =  JSON.parse(data)
      setState({...state, cities: cities})
    }
  }


  const addCity = (city: City) => {
    const cities = state.cities
    cities.push(city)
    setState({ ...state, cities: cities })
    AsyncStorage.clear()
    AsyncStorage.setItem("stack",JSON.stringify(cities))
  }

  const addLocation = (location: Location, city: City) => {
    const index = state.cities.findIndex((item: City) => {
      return item.id === city.id
    })

    const chosenCity = state.cities[index]
    chosenCity.locations.push(location)
    const cities = [
      ...state.cities.slice(0, index),
      chosenCity,
      ...state.cities.slice(index + 1)
    ]
    setState({
      cities
    })
  }

  return (
    <Tabs screenProps={{
      cities: state.cities,
      addCity: addCity,
      addLocation: addLocation
    }} />
  );
};



export default App;
