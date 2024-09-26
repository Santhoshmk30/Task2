import React, { useState, useEffect } from 'react';
import { View, Text, Image, FlatList, StyleSheet } from 'react-native';
import axios from 'axios';

const ProductList = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    axios
      .get('https://dummyjson.com/products?limit=20&skip=10&select=title,price,category,thumbnail')
      .then((response) => setProducts(response.data.products))
      .catch((error) => console.error(error));
  }, []);

  const renderItem = ({ item }) => (
    <View style={styles.productCard}>
      <Image source={{ uri: item.thumbnail }} style={styles.thumbnail} />
      <Text style={styles.title}>{item.title}</Text>
      <Text>Category: {item.category}</Text>
      <Text>Price: ${item.price}</Text>
    </View>
  );

  return (
    <FlatList
      data={products}
      renderItem={renderItem}
      keyExtractor={(item) => item.id.toString()}
    />
  );
};

const styles = StyleSheet.create({
  productCard: {
    padding: 10,
    borderWidth: 1,
    borderColor: '#ddd',
    margin: 10,
    borderRadius: 5,
  },
  thumbnail: {
    width: '100%',
    height: 150,
    resizeMode: 'contain',
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    marginVertical: 5,
  },
});

export default ProductList;