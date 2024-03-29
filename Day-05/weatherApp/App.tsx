import React, { useEffect } from 'react';
import {
  StyleSheet,
  View,
  ImageBackground,
  Text,
  KeyboardAvoidingView,
  Platform,
  ActivityIndicator,
  StatusBar,
} from 'react-native';
import { useState } from 'react';

import { fetchLocationId, fetchWeather } from './utils/api';
import getImageForWeather from './utils/getImageForWeather';

import SearchInput from './components/SearchInput';

const App = () => {
  const [appState, setAppState] = useState({
      loading: false,
      error: false,
      location: '',
      temperature: 0,
      weather: '',
      city: 'Bangalore',
    });
  

  useEffect(() => {
    
    handleUpdateLocation(appState.city);

  }, [])

  const handleUpdateLocation = async city => {
    if (!city) return;
    setAppState({...appState, loading: true });
    try {
      
      const { location, weather, temperature } = await fetchWeather(city);

      setAppState({
        ...appState ,
        loading: false,
        error: false,
        location,
        weather,
        temperature,
      });
    } catch (e) {
      setAppState({
        ...appState,
        loading: false,
        error: true,
      });
    }
  };
    const {
      loading,
      error,
      location,
      weather,
      temperature,
    } = appState;
  
    return (
    
      <KeyboardAvoidingView
        style={styles.container}
        behavior="height"
      > 
        <StatusBar barStyle="light-content" hidden={true} />
        <ImageBackground
          source={getImageForWeather(weather)}
          style={styles.imageContainer}
          imageStyle={styles.image}
        >
          <View style={styles.detailsContainer}>
            <ActivityIndicator
              animating={loading}
              color="white"
              size="large"
            />

            {!loading && (
              <View>
                {error && (
                  <Text style={[styles.smallText, styles.textStyle]}>
                    Could not load weather, please try a different
                    city.
                  </Text>
                )}

                {!error && (
                  <View>
                    <Text
                      style={[styles.largeText, styles.textStyle]}
                    >
                      {location}
                    </Text>
                    <Text
                      style={[styles.smallText, styles.textStyle]}
                    >
                      {weather}
                    </Text>
                    <Text
                      style={[styles.largeText, styles.textStyle]}
                    >
                      {`${Math.round(temperature)}°`}
                    </Text>
                  </View>
                )}

                <SearchInput
                  placeholder="Search any city"
                  onSubmit={handleUpdateLocation}
                />
              </View>
            )}
          </View>
        </ImageBackground>
      </KeyboardAvoidingView>
     
    );
  }

{/* 
    
     
  */}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#34495E',
  },
  imageContainer: {
    flex: 1,
  },
  image: {
    flex: 1,
    width: null,
    height: null,
    resizeMode: 'cover',
  },
  detailsContainer: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: 'rgba(0,0,0,0.2)',
    paddingHorizontal: 20,
  },
  textStyle: {
    textAlign: 'center',
    fontFamily:
      Platform.OS === 'ios' ? 'AvenirNext-Regular' : 'Roboto',
    color: 'white',
  },
  largeText: {
    fontSize: 44,
  },
  smallText: {
    fontSize: 18,
  },
});

export default App;