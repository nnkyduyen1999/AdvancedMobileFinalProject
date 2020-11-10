import React from 'react'

import theme from "../../globals/theme"
import css from "../../globals/style"
import Icon from "react-native-vector-icons/FontAwesome";

import { TouchableOpacity, Text } from 'react-native'

export default function BackButton(props) {
    return (
        <TouchableOpacity style={css.displayRow}>
            <Icon name="chevron-left" size={20} color={theme.BASIC_BLUE}/>
            <Text style={css.iconText}>{props.title}</Text>
        </TouchableOpacity>
    )
}

