import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Box, Heading } from 'native-base'

const EmptyList = ({ message }) => {
    return (
        <Box w={"100%"} h={"100%"} justifyContent={"center"} alignItems={"center"}>
            <Heading size={"md"} fontWeight={"normal"}>{message}</Heading>
        </Box>
    )
}

export default EmptyList

const styles = StyleSheet.create({})