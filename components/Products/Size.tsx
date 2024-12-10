import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import upArrow from '../../assets/images/upArrow.png';

interface SizeProps {
    size: {
        Height: string;
        Width: string;
        Depth: string;
        SeatWidth: string;
        SeatDepth: string;
        SeatHeight: string;
    }
}

const Size:React.FC<SizeProps> = ({size}) => {
    const [isOpen, setIsOpen] = useState(false);
  return (
    <View style={styles.base}>
      <TouchableOpacity style={styles.header} onPress={()=>{setIsOpen(!isOpen)}}>
        <Text style={styles.headerText}>Size</Text>
        <Image source={upArrow} style={[styles.upArrow,!isOpen &&{display:'none'}]} />
        <Image source={upArrow} style={[styles.downArrow,isOpen &&{display:'none'}]} />
      </TouchableOpacity>
      <View style={[styles.contentBox, !isOpen && {display: 'none'}]}>
        {
            Object.entries(size).map(([key, value], index) => (
                <View key={index} style={[styles.content, !isOpen && {display: 'none'}]}>
                    <View style={styles.row}>
                        <Text style={styles.contentText}>{key} :</Text>
                        <Text style={styles.contentText}>{value}</Text>
                    </View>
                    <View style={[styles.line,index==Object.entries(size).length-1 && {display: 'none'}]}></View>
                </View>
            ))
        }
        <Image source={require('../../assets/images/size.png')} style={styles.image} />
        
      </View>
    </View>
  )
}

export default Size

const styles = StyleSheet.create({
    base:{
        paddingHorizontal: 16,
    },
    line: {
        height: 1,
        backgroundColor: '#E0E0E0',
        marginVertical: 8,
    },
    header:{
        flexDirection: 'row',
        alignItems: 'center',
    },
    headerText: {
        fontSize: 18,
        fontWeight: '700',
        lineHeight: 24.59,
        width: '94%',
    },
    upArrow : {
        width: '6%',
        resizeMode: 'contain',       
    },
    downArrow: {
        width: '6%',
        resizeMode: 'contain',
        transform: [{rotate: '180deg'}]
    },
    contentBox: {
        marginTop: 12,
    },
    content:{},

    contentText: {
        fontSize: 14,
        lineHeight: 20,
        color: '#404040',
        fontWeight: '500',
    },
    row: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: '99%',
    },
    image: {
        width: '100%',
        height: 420,
        resizeMode: 'contain',
    },

})