import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import Ionicons from '@expo/vector-icons/Ionicons';

const AddButton = ({ onPress }) => {
    return (
        <TouchableOpacity onPress={onPress}>
            <Ionicons name="md-add-outline" size={30} />
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({})

export default AddButton;