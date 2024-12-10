import { ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import ProcuctCard from './ProcuctCard'

const FreqBought = () => {

    const products = [
        {
            id: 1,
            brand: 'EKERO',
            price: '$230.00',
            originalPrice: '$512.58',
            discount: '45%',
            rating: '4.9 (256)',
            image: require('../assets/images/freq1.png')
        },
        {
            id: 2,
            brand: 'STRANDMON',
            price: '$274.13',
            originalPrice: '$856.60',
            discount: '45%',
            rating: '4.8 (128)',
            image: require('../assets/images/freq2.png')
        },
        {
            id: 3,
            brand: 'EKERO',
            price: '$230.00',
            originalPrice: '$512.58',
            discount: '45%',
            rating: '4.9 (256)',
            image: require('../assets/images/freq3.png')
        },
        {
            id: 4,
            brand: 'EKERO',
            price: '$230.00',
            originalPrice: '$512.58',
            discount: '45%',
            rating: '4.9 (256)',
            image: require('../assets/images/freq4.png')
        }
    ]
  return (
    <View style={styles.base}>
        <View  style={styles.header}>
            <Text style={styles.headerText}>Frequently bought</Text>
            <TouchableOpacity>
                <Text style={styles.seeMore}>See More</Text>
            </TouchableOpacity>
        </View>
        <ScrollView
            horizontal
            showsHorizontalScrollIndicator={false}
        >
            { products.map((product, index) => (
                <ProcuctCard product={product} />
            ))}
        </ScrollView>
      
    </View>
  )
}

export default FreqBought

const styles = StyleSheet.create({
    base: {
    },
    header : {
        paddingHorizontal: 16,  
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: 12,
    },
    headerText: {
        fontSize: 20,
        fontWeight: '700',
        lineHeight: 24.59,
        width: '80%',
    },
    seeMore: {
        fontSize: 14,
        fontWeight: '700',
        lineHeight: 16,
        color: '#156651',
        textDecorationLine: 'underline',
    }
})