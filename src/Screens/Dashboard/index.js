import {StyleSheet, Text, View, Image, Button, ScrollView} from 'react-native';
import React from 'react';
import Header from '../../component/Header';
import Product from '../../component/Product/product';

import { useDispatch } from 'react-redux';

const Dashboard = () => {
  const product = [
    {
      name: 'Samsung Mobile',
      color: 'white',
      price: 30000,
      image: 'https://reactjs.org/logo-og.png',
    },
    {
      name: 'Nokia Mobile',
      color: 'black',
      price: 20000,
      image: 'https://reactjs.org/logo-og.png',
    },
    {
      name: 'Apple Mobile',
      color: 'rose Gold',
      price: 50000,
      image: 'https://reactjs.org/logo-og.png',
    },
    {
      name: 'oppo Mobile',
      color: 'rose Gold',
      price: 50000,
      image: 'https://reactjs.org/logo-og.png',
    },
    {
      name: 'versache Mobile',
      color: 'rose Gold',
      price: 50000,
      image: 'https://reactjs.org/logo-og.png',
    },
  ];
  return (
    <View >
       <Header />
      <ScrollView>
        {/* <Product />  */}

      {product.map(item => <Product item={item} /> )}
      </ScrollView> 

      <Text>Dashboard</Text>
      <Text>Dashboard</Text>
    </View>
    
  );
};

export default Dashboard;

const styles = StyleSheet.create({});
