import React, { useState } from 'react';
import {
  View,
  FlatList,
  Text,
  TouchableOpacity,
  Dimensions,
  Image,
  StyleSheet,
  Platform,
  StatusBar,
} from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

const { width, height } = Dimensions.get('window');

const slides = [
  {
    id: '1',
    title: 'Welcome to NaijaPlate',
    description: 'Discover a world of delicious recipes from Nigeria and beyond.',
    image: require('../../assets/images/foods/jollof.png'),
  },
  {
    id: '2',
    title: 'Explore Local Flavors',
    description: 'Enjoy authentic Nigerian dishes like Jollof Rice and Egusi Soup.',
    image: require('../../assets/images/foods/fried-rice.png'),
  },
  {
    id: '3',
    title: 'Share Your Recipes',
    description: 'Join a community to share and rate recipes with other food lovers.',
    image: require('../../assets/images/foods/white-rice.png'),
  },
  {
    id: '4',
    title: 'Get Started',
    description: 'Ready to cook? Lets begin your culinary journey!',
    image: require('../../assets/images/foods/jollof.png'),
  },
];

const GetStartedScreen = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const renderSlide = ({ item }: { item: typeof slides[0] }) => (
    <LinearGradient
      colors={['#FFF5E1', '#F4E4BC']} 
      style={styles.slideContainer}
    >
      <StatusBar 
        barStyle="dark-content" 
        backgroundColor="transparent" 
        translucent={true}
      />
      <View style={styles.content}>
        <Text style={styles.title}>{item.title}</Text>
        <Text style={styles.description}>{item.description}</Text>
        <Image
          source={item.image}
          style={styles.foodImage}
          resizeMode="contain"
        />
        {item.id === '4' && (
          <TouchableOpacity
            style={styles.getStartedButton}
            onPress={() => {
              // Add your navigation logic here
              console.log('Get Started pressed');
            }}
          >
            <Text style={styles.getStartedText}>Get Started</Text>
          </TouchableOpacity>
        )}
      </View>
    </LinearGradient>
  );

  return (
    <View style={styles.container}>
      <FlatList
        data={slides}
        renderItem={renderSlide}
        horizontal
        pagingEnabled
        showsHorizontalScrollIndicator={false}
        onScroll={(event) => {
          const slideIndex = Math.round(event.nativeEvent.contentOffset.x / width);
          setCurrentSlide(slideIndex);
        }}
        keyExtractor={(item) => item.id}
        style={styles.flatList}
      />
      <View style={styles.indicatorContainer}>
        {slides.map((_, index) => (
          <View
            key={index}
            style={[
              styles.dot,
              currentSlide === index && styles.activeDot,
            ]}
          />
        ))}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFF5E1',
  },
  slideContainer: {
    width,
    height,
    paddingTop: Platform.OS === 'ios' ? 50 : 30,
    paddingBottom: 100,
  },
  content: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#4A2C2A',
    textAlign: 'center',
    marginBottom: 15,
    fontFamily: Platform.OS === 'ios' ? 'System' : 'Roboto',
  },
  description: {
    fontSize: 16,
    color: '#4A2C2A',
    textAlign: 'center',
    marginBottom: 30,
    paddingHorizontal: 20,
    lineHeight: 22,
    fontFamily: Platform.OS === 'ios' ? 'System' : 'Roboto',
  },
  foodImage: {
    width: '80%',
    height: 200,
    marginBottom: 30,
    borderRadius: 15,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
    elevation: 5,
  },
  getStartedButton: {
    paddingVertical: 15,
    paddingHorizontal: 40,
    backgroundColor: '#D35400',
    borderRadius: 25,
    elevation: 3,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 4,
  },
  getStartedText: {
    color: '#FFF',
    fontSize: 18,
    fontWeight: 'bold',
    fontFamily: Platform.OS === 'ios' ? 'System' : 'Roboto',
  },
  indicatorContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    paddingVertical: 20,
    backgroundColor: 'transparent',
    position: 'absolute',
    bottom: Platform.OS === 'ios' ? 50 : 30,
    left: 0,
    right: 0,
  },
  dot: {
    width: 8,
    height: 8,
    borderRadius: 4,
    backgroundColor: 'rgba(74, 44, 42, 0.3)',
    marginHorizontal: 5,
  },
  activeDot: {
    backgroundColor: '#D35400',
    width: 12,
    height: 8,
    borderRadius: 4,
  },
  flatList: {
    flex: 1,
  },
});

export default GetStartedScreen;