import { Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Icon from 'react-native-vector-icons/FontAwesome';

interface ProductCardProps {
    product: {
        id: number;
        brand: string;
        price: string;
        originalPrice: string;
        discount: string;
        rating: string;
        image: any;
    }
}

const ProcuctCard: React.FC<ProductCardProps> = ({product}) => {
  return (
    <View style={styles.base}>
        <Image source={product.image} style={styles.image} />
        <Text style={styles.brand}>{product.brand}</Text>
        <Text style={styles.price}>{product.price}</Text>
        <Text style={styles.cutPrice}>{product.originalPrice}</Text>
        <View style={styles.ratingContainer}>
          <Icon name="star" size={16} color="#FFD700" style={styles.starIcon} />
          <Text>{product.rating}</Text>
        </View>
        <View style={styles.discount}>
            <Text style={styles.discountText}>{product.discount} OFF</Text>
        </View>

    </View>
  )
}

export default ProcuctCard

const styles = StyleSheet.create({
    base: {
        position: 'relative',
        padding: 16,
        backgroundColor: '#fff',
        borderRadius: 14,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 24,
        elevation: 150,
        width: 152,
        marginHorizontal: 8,
        marginVertical: 16,
    },
    image: {
        width: '100%',
        height: 100,
        resizeMode: 'contain',
    },
    brand: {
        fontSize: 14,
        fontWeight: '400',
        lineHeight: 17,
        marginTop: 14,
    },
    price: {
        fontSize: 20,
        fontWeight: '700',
        lineHeight: 24.59,
    },
    cutPrice: {
        fontSize: 12,
        fontWeight: '400',
        lineHeight: 17,
        textDecorationLine: 'line-through',
        color: '#404040',
    },
    ratingContainer: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    starIcon: {
        marginRight: 4,
    },
    discount: {
        width: 51,
        backgroundColor: '#E44A4A',
        borderTopLeftRadius: 10,
        borderBottomRightRadius: 10,
        position: 'absolute',
        padding: 3,
        top: 100,
        left:16,
        
     

    },
    discountText: {
        color: '#fff',
        fontSize: 10,
        fontWeight: '600',
        lineHeight: 14,
        textAlign: 'center',
    },
})