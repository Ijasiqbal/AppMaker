import { StyleSheet, Text, View, Image, FlatList, TouchableOpacity, SafeAreaView, ScrollView, Dimensions } from 'react-native';
import React, { useState, useRef } from 'react';
import BestsellerTag from './BestsellerTag';

interface ImageCarousalProps {
  images: any[];
}

const ImageCarousal: React.FC<ImageCarousalProps> = ({ images }) => {

  const [selectedImageIndex, setSelectedImageIndex] = useState(0);
  const scrollViewRef = useRef<ScrollView>(null);

  const handleThumbnailClick = (index: number) => {
    setSelectedImageIndex(index);
    scrollViewRef.current?.scrollTo({ x: index * Dimensions.get('window').width, animated: true });
  };

  const handleScroll = (event: any) => {
    const offsetX = event.nativeEvent.contentOffset.x;
    const currentIndex = Math.round(offsetX / Dimensions.get('window').width);
    setSelectedImageIndex(currentIndex);
  };

  return (
    <SafeAreaView style={styles.base}>
        <BestsellerTag />

      <ScrollView
        horizontal
        pagingEnabled
        showsHorizontalScrollIndicator={false}
        ref={scrollViewRef}
        onScroll={handleScroll}
        style={styles.mainCarousel}
      >
        {images.map((image, index) => (
          <Image key={index} source={image} style={styles.mainImg} />
        ))}
      </ScrollView>

      {/* Thumbnail List */}
      <FlatList
        data={images}
        horizontal
        contentContainerStyle={styles.thumbnailContainer}
        renderItem={({ item, index }) => (
          <TouchableOpacity onPress={() => handleThumbnailClick(index)}>
            <Image
              source={item}
              style={[
                styles.smallImg,
                index === selectedImageIndex && styles.selectedThumbnail,
              ]}
            />
          </TouchableOpacity>
        )}
      />
    </SafeAreaView>
  );
};

export default ImageCarousal;

const styles = StyleSheet.create({
  base: {
    justifyContent: 'center',
    alignItems: 'center',
    marginVertical:20,
    position: 'relative',
  },
  mainCarousel: {
    width: '100%',
    height: 300,
  },
  mainImg: {
    width: Dimensions.get('window').width,
    height: 300,
    resizeMode: 'contain',
  },
  thumbnailContainer: {
    marginTop: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  smallImg: {
    width: 50,
    height: 50,
    borderRadius: 10,
    marginHorizontal: 5,
    resizeMode: 'contain',
    
    
  },
  selectedThumbnail: {
    borderColor: '#156651',
    borderWidth: 2,
  },
});
