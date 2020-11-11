import React from 'react';
import { Text } from 'react-native'
import theme from "../../../../globals/theme"
const TextButton = ({txt}) => {
    return (
        <Text
          style={{
            color: theme.BASIC_BLUE,
            fontSize: theme.FONT_SIZE_SMALL,
            textAlign: "center",
            paddingVertical: 10,
          }}
        >
          {txt}
        </Text>
    );
}

export default TextButton;
