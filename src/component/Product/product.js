import {StyleSheet, Text, View, Image, Button} from 'react-native';
import React, {useEffect, useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {add_to_cart,remove_to_cart} from '../Redux/Action/action';

const Product = props => {
  const [added, SetAdded] = useState(false);
  console.log(props.item, 'props');
  const item = props.item;
  console.log(item,'item');
  const dispatch = useDispatch();
  const cartitems = useSelector(state => state.reducer);

  const handleaddtocart = item => {
    console.log('addtocart', item);
    dispatch(add_to_cart(item));
  };
  const handleremovetocart = item => {
    console.log('remove', item);
    dispatch(remove_to_cart(item.name));
  };

  useEffect(() => {
  let check = cartitems.find(item => item.name === props.item.name);
    if (check) {
      SetAdded(true);
    }else{
      SetAdded(false);
    }
  }, [cartitems]);
  return (
    <View style={{alignItems: 'center'}}>
      <Image
        source={{uri: props.item.image}}
        style={{width: 150, height: 200}}
      />
      <Text style={{fontSize: 20, fontWeight: '500'}}>{props.item.name}</Text>
      <Text style={{fontSize: 20, fontWeight: '500'}}>Color:{item.color}</Text>
      {added ? (
        <Button title="Remove From cart" onPress={() => handleremovetocart(item)} />
      ) : (
        <Button title="Add to cart" onPress={() => handleaddtocart(item)} />
      )}
    </View>
  );
};

export default Product;

const styles = StyleSheet.create({});
