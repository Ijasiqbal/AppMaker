// ColorOptions.tsx
import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';

interface ColorOptionsProps {
  colors: { name: string; code: string }[];
  selectedColor: string;
  onColorChange: (color: string) => void;
}

const ColorOptions: React.FC<ColorOptionsProps> = ({ colors, selectedColor, onColorChange }) => {
  return (
    <View style={styles.ColorsContainer}>
      <Text style={styles.ColorH1}>Colors</Text>
      <View style={styles.colors}>
        {colors.map((color, index) => (
          <TouchableOpacity
            key={index}
            style={[
              styles.colorOption,
              selectedColor === color.name && styles.selectedColorOption,
            ]}
            onPress={() => onColorChange(color.name)}
          >
            <View style={[styles.colorBox, { backgroundColor: color.code }]} />
            <Text style={styles.colorsText}>{color.name}</Text>
          </TouchableOpacity>
        ))}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  ColorsContainer: {
    marginTop: 2,
    paddingHorizontal: 16,
  },
  colors: {
    flexDirection: 'row',
    gap: '4%',
    flexWrap: 'wrap',
  },
  colorOption: {
    borderWidth: 1,
    borderColor: '#E0E0E0',
    padding: 8,
    borderRadius: 8,
    width: '48%',
    flexDirection: 'row',
    marginVertical: 4,
  },
  selectedColorOption: {
    borderColor: 'black',
  },
  ColorH1: {
    fontSize: 18,
    fontWeight: '700',
    marginBottom: 8,
  },
  colorsText: {
    fontSize: 14,
    fontWeight: '400',
    lineHeight: 16.8,
    textAlignVertical: 'center',
  },
  colorBox: {
    width: 35,
    height: 35,
    borderRadius: 5,
    marginRight: 8,
  },
});

export default ColorOptions;