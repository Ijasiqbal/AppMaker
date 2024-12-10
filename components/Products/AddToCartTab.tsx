import { ActivityIndicator, Modal, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import React, { useState } from 'react';
import Icon from 'react-native-vector-icons/FontAwesome'; // Import FontAwesome icons
import AddToCartModal from './AddToCartModal';

const AddToCartTab = () => {
  const [isWishlisted, setIsWishlisted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [modalVisible, setModalVisible] = useState(false);

  const toggleWishlist = () => {
    setIsWishlisted(!isWishlisted);
  };

  const handleAddToCart = () => {
    setLoading(true);
    setTimeout(()=>{
      setModalVisible(true);
      setLoading(false);

    },2000)
  }

  return (
    <View style={styles.base}>
      <TouchableOpacity
        style={styles.wishlistBtn}
        onPress={toggleWishlist}
      >
        <Icon
          name={isWishlisted ? 'heart' : 'heart-o'} // Use 'heart-o' for outlined and 'heart' for solid
          size={20}
          color={'#156651'} // Green for both states
        />
      </TouchableOpacity>
      <TouchableOpacity style={styles.AddToCartBtn} onPress={handleAddToCart}>
        {!loading && <Text style={styles.AddToCartText}>Add to Cart</Text>}
        {loading && <ActivityIndicator size="small" color="white" />}
      </TouchableOpacity>
      <AddToCartModal modalVisible={modalVisible} setModalVisible={setModalVisible}  />
      
    </View>
  );
};

export default AddToCartTab;

const styles = StyleSheet.create({
  base: {
    position: 'absolute',
    bottom: 0,
    flexDirection: 'row',
    backgroundColor: 'white',
    width: '100%',
    paddingHorizontal: 16,
    paddingVertical: 12,
    borderTopLeftRadius: 14,
    borderTopRightRadius: 14,
  },
  wishlistBtn: {
    borderWidth: 1,
    borderColor: '#156651', // Green border
    borderRadius: 8,
    padding: 12,
    justifyContent: 'center',
    alignItems: 'center',
  },
  AddToCartBtn: {
    backgroundColor: '#156651',
    borderRadius: 8,
    marginLeft: 8,
    paddingVertical: 12,
    paddingHorizontal: 18,
    flex: 1,
  },
  AddToCartText: {
    color: 'white',
    fontSize: 16,
    fontWeight: '700',
    textAlign: 'center',
  },
});
