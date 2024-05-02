import { StyleSheet, Text, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'

const Header = () => {
  const cartdata=useSelector((state)=>state.reducer)
  const [cartitems,Setcartitems]=useState(0)
  useEffect(()=>{
    Setcartitems(cartdata.length)
  },[cartdata])
  // console.warn(cartdata);
  return (
    <View>
      <Text style={{fontSize:28}}>{cartitems}</Text>
    </View>
  )
}

export default Header

const styles = StyleSheet.create({})