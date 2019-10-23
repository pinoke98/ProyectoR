import React, { Component } from "react";
import { TextInput, Text, Dimensions,View, 
    TouchableOpacity, ActivityIndicator,
 Alert ,ScrollView,StyleSheet,
 Image,KeyboardAvoidingView,AppRegistry,
 Animated} from "react-native";

import MapView from 'react-native-maps';
import {Marker, PROVIDER_GOOGLE } from 'react-native-maps';

export const getCurrentLocation = () => {
    return new Promise((resolve, reject) => {
      navigator.geolocation.getCurrentPosition(position => resolve(position), e => reject(e));
    }); 
  };
  
  const Images = [
    { image: require("../../Images/mountains.jpg")},
    { image: require('../../Images/music.jpg') },
    { image: require('../../Images/wolf.jpg' )},
  ]

  

const { width, height } = Dimensions.get("window");

const CARD_HEIGHT = height / 4;
const CARD_WIDTH = CARD_HEIGHT - 50;


export default class Map extends Component{

    constructor(props){
        super(props);
        state = {
            marginBottom : 0
        }
    }
    
    state = {
        mapRegion: {
           // latitude: position.coords.latitude,
           latitude: 6.2521792,
           // longitude: position.coords.longitude,
           longitude:-75.56468199999999 ,
           latitudeDelta: 0.003,
           longitudeDelta: 0.003,
        },
        markers: [
            {
              coordinate: {
                latitude: 6.2521792,
                longitude: -75.56468199999999,
              },
              title: "mountains",
              description: "thats a great mountain",
              image: Images[0].image,
            },
            {
              coordinate: {
                latitude: 6.252416051898985,
                longitude: -75.56482851505281,
              },
              title: "music",
              description: "OMG !!",
              image: Images[1].image,
            },
            {
              coordinate: {
                latitude:6.252320066726161,
                longitude: -75.5643403530121,
              },
              title: "Wolf",
              description: "Magestic",
              image: Images[2].image,
            },
          ],region: {
            latitude: 6.252320066726161,
            longitude: -75.5643403530121,
            latitudeDelta: 0.003,
            longitudeDelta: 0.003,
          },
      };

      componentWillMount() {
        this.index = 0;
        this.animation = new Animated.Value(0);
      }
      
    componentDidMount() {
        this.animation.addListener(({ value }) => {
            let index = Math.floor(value / CARD_WIDTH + 0.3); // animate 30% away from landing on the next item
            if (index >= this.state.markers.length) {
              index = this.state.markers.length - 1;
            }
            if (index <= 0) {
              index = 0;
            }
      
            clearTimeout(this.regionTimeout);
            this.regionTimeout = setTimeout(() => {
              if (this.index !== index) {
                this.index = index;
                const { coordinate } = this.state.markers[index];
                this.map.animateToRegion(
                  {
                    ...coordinate,
                    latitudeDelta: this.state.region.latitudeDelta,
                    longitudeDelta: this.state.region.longitudeDelta,
                  },
                  350
                );
              }
            }, 10);
          });

        return getCurrentLocation().then(position => {
          if (position) {
            this.setState({
                mapRegion: {
                // latitude: position.coords.latitude,
                latitude: 6.2521792,
                // longitude: position.coords.longitude,
                longitude:-75.56468199999999 ,
                latitudeDelta: 0.003,
                longitudeDelta: 0.003,

                
              },
            });
          }
        });
      }
    
  
      
  _handleMapRegionChange = mapRegion => {
    this.setState({ mapRegion });
  };

  _onMapReady = () => this.setState({marginBottom: 0})
    render(){

        const interpolations = this.state.markers.map((marker, index) => {
            const inputRange = [
              (index - 1) * CARD_WIDTH,
              index * CARD_WIDTH,
              ((index + 1) * CARD_WIDTH),
            ];
            const scale = this.animation.interpolate({
              inputRange,
              outputRange: [1, 2.5, 1],
              extrapolate: "clamp",
            });
            const opacity = this.animation.interpolate({
              inputRange,
              outputRange: [0.35, 1, 0.35],
              extrapolate: "clamp",
            });
            return { scale, opacity };
          });
        return(
     
    <View style={styles.container}>
    <MapView
    mapPadding= {{
        left: 0,
        right: 0 ,
        top: 0,
        bottom: height /2,
      }}
      provider={PROVIDER_GOOGLE}
      ref={map => this.map = map}
      showsMyLocationButton = {true}
      showsUserLocation={true}
      initialRegion={this.state.mapRegion}
      style={styles.container}
      style={{flex: 1, marginBottom: this.state.marginBottom}}
    onMapReady={this._onMapReady}
    >
       {this.state.markers.map((marker, index) => {
            const scaleStyle = {
              transform: [
                {
                  scale: interpolations[index].scale,
                },
              ],
            };
            const opacityStyle = {
              opacity: interpolations[index].opacity,
            };
            return (
              <MapView.Marker key={index} coordinate={marker.coordinate}>
                <Animated.View style={[styles.markerWrap, opacityStyle]}>
                  <Animated.View style={[styles.ring, scaleStyle]} />
                  <View style={styles.marker} />
                </Animated.View>
              </MapView.Marker>
            );
          })}


    </MapView>
    <Animated.ScrollView
      horizontal
      scrollEventThrottle={1}
      showsHorizontalScrollIndicator={false}
      snapToInterval={CARD_WIDTH}
      onScroll={Animated.event(
        [
          {
            nativeEvent: {
              contentOffset: {
                x: this.animation,
              },
            },
          },
        ],
        { useNativeDriver: true }
      )}
      style={styles.scrollView}
      contentContainerStyle={styles.endPadding}
    >

      {this.state.markers.map((marker, index) => (
        <View style={styles.card} key={index}>
          <Image
            source={marker.image}
            style={styles.cardImage}
            resizeMode="cover"
          />
          <View style={styles.textContent}>
            <Text numberOfLines={1} style={styles.cardtitle}>{marker.title}</Text>
            <Text numberOfLines={1} style={styles.cardDescription}>
              {marker.description}
            </Text>
          </View>
        </View>
      ))}
    </Animated.ScrollView>
  </View>


        )
    }
}

const styles1 = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
    mapStyle: {
      width: Dimensions.get('window').width,
      height: Dimensions.get('window').height,
    },
  });


const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  scrollView: {
    position: "absolute",
    bottom: 30,
    left: 0,
    right: 0,
    paddingVertical: 10,
  },
  endPadding: {
    paddingRight: width - CARD_WIDTH,
  },
  card: {
    padding: 10,
    elevation: 2,
    backgroundColor: "#FFF",
    marginHorizontal: 10,
    shadowColor: "#000",
    shadowRadius: 5,
    shadowOpacity: 0.3,
    shadowOffset: { x: 2, y: -2 },
    height: CARD_HEIGHT,
    width: CARD_WIDTH,
    overflow: "hidden",
  },
  cardImage: {
    flex: 3,
    width: "100%",
    height: "100%",
    alignSelf: "center",
  },
  textContent: {
    flex: 1,
  },
  cardtitle: {
    fontSize: 12,
    marginTop: 5,
    fontWeight: "bold",
  },
  cardDescription: {
    fontSize: 12,
    color: "#444",
  },
  markerWrap: {
    alignItems: "center",
    justifyContent: "center",
  },
  marker: {
    width: 8,
    height: 8,
    borderRadius: 4,
    backgroundColor: "rgba(130,4,150, 0.9)",
  }, 
  ring: {
    width: 24,
    height: 24,
    borderRadius: 12,
    backgroundColor: "rgba(130,4,150, 0.3)",
    position: "absolute",
    borderWidth: 1,
    borderColor: "rgba(130,4,150, 0.5)",
  },
});

