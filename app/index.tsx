import {  ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import React, { useState } from 'react';
import AddToCartTab from '@/components/AddToCartTab';
import ImageCarousal from '../components/ImageCarousal';
import Icon from 'react-native-vector-icons/FontAwesome'; // Import the icon library
import ColorOptions from '../components/ColorOptions'; // Import the ColorOptions component
import Description from '@/components/Description';
import Size from '@/components/Size';
import FreqBought from '@/components/FreqBought';
import { SafeAreaView } from 'react-native-safe-area-context';

const images = [
  require('@/assets/images/image1.png'),
  require('@/assets/images/image2.png'),
  require('@/assets/images/image3.png'),
];

const ProductDetail = () => {
  const [selectedId, setSelectedId] = useState('1');
  const products = [
    {
      id: '1',
      brand: 'EKERÖ',
      price: '$230.00',
      originalPrice: '$512.58',
      discount: '45%',
      rating: '4.9 (256)',
      description: 'A minimalist chair with a reversible back cushion provides soft support for your back and has two sides to wear.',
      colors: [
        { name: 'Harvest Gold', code: '#FFB300' },
        { name: 'Eerie Black', code: '#1A1919' },
        { name: 'Flame', code: '#E35D33' },
        { name: 'Pakistan Green', code: '#1C3A13' }
      ],
      color: 'Harvest Gold',
      detailedDescription: 'Choose a stylish dark color or brighten up your home with colorful sarongs. The EKERÖ armchair has a sleek and modern look with two sides that meet at the back and a waist support for added comfort!',
      size: {
        Width: '70 cm',
        Height: '80 cm',
        Depth: '70 cm',
        SeatWidth: '55 cm',
        SeatDepth: '55 cm',
        SeatHeight: '45 cm',
      }
    },
    {
      id: '2',
      brand: 'EKERÖ',
      price: '$250.00',
      originalPrice: '$540.00',
      discount: '46%',
      rating: '4.8 (200)',
      description: 'A sleek armchair with a cushioned backrest offering excellent support and comfort for long hours.',
      colors: [
        { name: 'Harvest Gold', code: '#FFB300' },
        { name: 'Eerie Black', code: '#1A1919' },
        { name: 'Flame', code: '#E35D33' },
        { name: 'Pakistan Green', code: '#1C3A13' }
      ],
      color: 'Eerie Black',
      detailedDescription: 'Bring a touch of sophistication with a bold dark color. The EKERÖ armchair combines modern aesthetics with superior comfort, making it a standout addition to your living space.',
      size: {
        Width: '70 cm',
        Height: '80 cm',
        Depth: '70 cm',
        SeatWidth: '55 cm',
        SeatDepth: '55 cm',
        SeatHeight: '45 cm',
      }
    },
    {
      id: '3',
      brand: 'EKERÖ',
      price: '$240.00',
      originalPrice: '$525.00',
      discount: '42%',
      rating: '4.7 (180)',
      description: 'A versatile chair with a durable frame and a reversible cushion for added flexibility and style.',
      colors: [
        { name: 'Harvest Gold', code: '#FFB300' },
        { name: 'Eerie Black', code: '#1A1919' },
        { name: 'Flame', code: '#E35D33' },
        { name: 'Pakistan Green', code: '#1C3A13' }
      ],
      color: 'Flame',
      detailedDescription: 'Brighten up your living room with a fiery hue. The EKERÖ armchair is designed for those who want to make a bold statement without compromising on comfort.',
      size: {
        Width: '70 cm',
        Height: '80 cm',
        Depth: '70 cm',
        SeatWidth: '55 cm',
        SeatDepth: '55 cm',
        SeatHeight: '45 cm',
      }
    },
    {
      id: '4',
      brand: 'EKERÖ',
      price: '$245.00',
      originalPrice: '$530.00',
      discount: '44%',
      rating: '4.8 (220)',
      description: 'A modern armchair with a soft and supportive back cushion that adds style and comfort to any space.',
      colors: [
        { name: 'Harvest Gold', code: '#FFB300' },
        { name: 'Eerie Black', code: '#1A1919' },
        { name: 'Flame', code: '#E35D33' },
        { name: 'Pakistan Green', code: '#1C3A13' }
      ],
      color: 'Pakistan Green',
      detailedDescription: 'Embrace the freshness of green with this elegant armchair. The EKERÖ blends contemporary design with a natural touch, making it a perfect fit for any decor.',
      size: {
        Width: '70 cm',
        Height: '80 cm',
        Depth: '70 cm',
        SeatWidth: '55 cm',
        SeatDepth: '55 cm',
        SeatHeight: '45 cm',
      }
    }
  ];
  

  let selectedProduct = products.find((product) => product.id === selectedId);

  const handleColorChange = (color: string) => {
    const product = products.find(p => p.color === color);
    if (product) {
      setSelectedId(product.id);
    }
  };

  return (
    <SafeAreaView>
      <ScrollView style={styles.page}>
        <ImageCarousal images={images} />
        <View style={styles.productInfo}>
          <Text style={styles.brand}>{selectedProduct?.brand}</Text>
          <View style={styles.priceContainer}>
            <Text style={styles.price}>{selectedProduct?.price}</Text>
            <Text style={styles.cutPrice}>{selectedProduct?.originalPrice}</Text>
            <View style={styles.discountContainer}>
              <Text style={styles.discount}>{selectedProduct?.discount} OFF</Text>
            </View>
          </View>
          <View style={styles.ratingContainer}>
            <Icon name="star" size={16} color="#FFD700" style={styles.starIcon} />
            <Text>{selectedProduct?.rating}</Text>
          </View>
          <Text style={styles.description}>{selectedProduct?.description}</Text>
        </View>
        <View style={styles.line}></View>
        <ColorOptions
          colors={selectedProduct?.colors || []}
          selectedColor={selectedProduct?.color || ''}
          onColorChange={handleColorChange}
        />
        <View style={styles.line}></View>
        <Description description={selectedProduct?.detailedDescription ?? ''} />
        
        <View style={styles.line}></View>
        {selectedProduct?.size && <Size size={selectedProduct.size} />}
        <View style={styles.line}></View>
        <FreqBought />
  
        
      </ScrollView>
      <AddToCartTab />

    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  page: {
    backgroundColor: '#fff',
  },
  productInfo: {
    paddingHorizontal: 16,
    marginBottom: 4,
  },
  brand:{
    fontSize: 16,
    fontWeight: '400',

  },
  line: {
    borderBottomWidth: 1,
    borderBottomColor: '#E0E0E0',
    marginVertical: 16,
  },
  priceContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  price: {
    fontSize: 32,
    fontWeight: '800',
  },
  cutPrice: {
    textDecorationLine: 'line-through',
    fontSize: 14,
    lineHeight: 16.8,
    color: '#404040',
    textAlignVertical: 'center',
    marginLeft: 8,
  },
  discountContainer: {
    backgroundColor: '#E44A4A',
    borderTopLeftRadius: 10,
    borderBottomRightRadius: 10,
    height: 20,
    marginLeft: 8,
    justifyContent: 'center',
    paddingHorizontal: 8,
  },
  discount: {
    color: 'white',
    fontSize: 12,
    fontWeight: '400',
    lineHeight: 14.4,
  },
  ratingContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 8,
  },
  starIcon: {
    marginRight: 4,
  },
  description: {
    fontSize: 16,
    color: '#404040',
    lineHeight: 19.2,
    fontWeight: '400',
    marginTop: 6,
  },
});

export default ProductDetail;