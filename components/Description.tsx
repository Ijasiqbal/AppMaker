import { useState } from 'react';
import { StyleSheet, Text, View, Image } from 'react-native'
import UpArrow from '../assets/images/upArrow.png';
import { TouchableOpacity } from 'react-native';

interface DescriptionProps {
    description: string;
}

const Description: React.FC<DescriptionProps> = ({description}) => {
    const [isOpen, setIsOpen] = useState(false);
  return (
    <View style={styles.base}>
      <TouchableOpacity style={styles.header} onPress={()=>{setIsOpen(!isOpen)}}>
        <Text style={styles.headerText}>Product Description</Text>
        <Image source={UpArrow} style={[styles.upArrow,!isOpen && {display: 'none'}]} />
        <Image source={UpArrow} style={[styles.downArrow,isOpen && {display: 'none'}]} />

      </TouchableOpacity>
      <View style={[styles.contentBox, !isOpen && { display: 'none' }]}>
        <Text style={styles.content}>{description}</Text>

      </View>
    </View>
  )
}

export default Description

const styles = StyleSheet.create({
    base: {
        paddingHorizontal: 16,

    },
    header: {
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
    contentBox: {},
    content: {
        fontSize: 14,
        lineHeight: 20,
        color: '#404040',
        fontWeight: '400',
    }
})