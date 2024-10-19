import tw from "twrnc";
import React, { useState } from "react";
import { ActivityIndicator, Alert, Button, Image, Text, View } from "react-native";
import { FontAwesome } from "@expo/vector-icons";

const index = () => {
  const [loader , setLoader] = useState(false)
  return (
    <>
    </>
    // <View style={tw`bg-white/20 m-4 p-2 rounded-md flex h-full `}>
    //   <View style={tw`flex flex-row items-center`}>
    //     {/* <FontAwesome name="home" size={25} style={{ marginRight: 15 }} /> */}
    //     <Text style={tw` text-xl `}>Home</Text>
    //   </View>
    //   <View style={tw`h-44 w-full`}></View>
    //   <Image
    //     style={tw``}
    //     source={{
    //       uri: "https://img.freepik.com/premium-vector/paper-bag-with-fresh-food_81894-81.jpg?w=740",
    //     }}
    //   />
    //   {loader && <ActivityIndicator size="large" color="#00ff00" />}
    //   <Button title="Activate Me " onPress={() => setLoader(!loader)} />
      
    // </View>
  );
};

export default index;
