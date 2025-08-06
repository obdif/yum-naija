import React, { useState } from 'react';
import {
  View,
  FlatList,
  Text,
  TouchableOpacity,
  Dimensions,
  Image,
  SafeAreaView,
  StatusBar,
  StyleSheet,
} from 'react-native';
import { useNavigation } from '@react-navigation/native';
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
    description: 'Ready to cook? Let’s begin your culinary journey!',
    image: require('../../assets/images/foods/jollof.png'),
  },
];

const GetStartedScreen = () => {
  const navigation = useNavigation();
  const [currentSlide, setCurrentSlide] = useState(0);

  const renderSlide = ({ item }: { item: typeof slides[0] }) => (
    <View style={styles.slideContainer}>
      <LinearGradient
        colors={['#FFF5E1', '#F4E4BC']} 
        style={styles.gradientBackground}
      >
        <SafeAreaView style={styles.safeArea}>
          <StatusBar barStyle="dark-content" backgroundColor="#FFF5E1" />
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
                onPress={() => {  }}
              >
                <Text style={styles.getStartedText}>Get Started</Text>
              </TouchableOpacity>
            )}
          </View>
        </SafeAreaView>
      </LinearGradient>
    </View>
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
    backgroundColor: '#F4E4BC',
  },
  slideContainer: {
    width,
    height,
  },
  gradientBackground: {
    flex: 1,
    width: '100%',
    height: '100%',
  },
  safeArea: {
    flex: 1,
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
  },
  description: {
    fontSize: 16,
    color: '#4A2C2A',
    textAlign: 'center',
    marginBottom: 30,
    paddingHorizontal: 20,
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
    paddingVertical: 12,
    paddingHorizontal: 30,
    backgroundColor: '#D35400',
    borderRadius: 25,
    elevation: 3,
  },
  getStartedText: {
    color: '#FFF',
    fontSize: 18,
    fontWeight: 'bold',
  },
  indicatorContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    paddingVertical: 10,
    backgroundColor: 'transparent',
  },
  dot: {
    width: 8,
    height: 8,
    borderRadius: 4,
    backgroundColor: '#A9A9A9',
    marginHorizontal: 5,
  },
  activeDot: {
    backgroundColor: '#D35400',
    width: 10,
    height: 10,
  },
  flatList: {
    flex: 1,
  },
});

export default GetStartedScreen;