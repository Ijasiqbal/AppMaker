import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const BestsellerTag = () => {
  return (
    <View style={styles.base}>
        
        <View style={styles.bottom}>

        </View>
        <View style={styles.top}>
            

        </View>
        <Text style={styles.text}>Best seller</Text>
      
    </View>
  )
}

export default BestsellerTag

const styles = StyleSheet.create({
    base: { 
        position: 'absolute',
        top: 10,
        left:0,
        zIndex: 1,
        
    },
    top: {
        position: 'relative',
        width: 90,
        height: 0,
        borderTopWidth: 23,
        borderTopColor: 'rgba(228, 74, 74, 0.94)',
        borderRightWidth: 23,
        borderRightColor: 'transparent',
        
           
        
        

    },
    text:{
        position: 'absolute',
        color: 'white',
        fontSize: 12,
        top: 2.5,
        left: 7,
        fontFamily: 'Manrope',
        fontWeight: 700
       
    },
    bottom: {
        position: 'absolute',

        width: 90,
        height: 0,
        borderBottomWidth: 23,
        borderBottomColor: '#B24040',
        borderRightWidth: 23,
        borderRightColor: 'transparent',



    }
})