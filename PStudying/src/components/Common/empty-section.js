import React from 'react';
import css from "../../globals/style";
import { View, Image, Text } from 'react-native'
const EmptySection = (props) => {
   
    return (
        <View style={css.viewWithRadius}>
            <Image
              source={require("../../../assets/bookmark.png")}
              style={{
                width: 50,
                height: 50,
                marginVertical: 10,
              }}
            />
            <Text style={css.courseTitle}>
              {props.content}
            </Text>
        </View>
    );
}

export default EmptySection;
