import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Box, Heading, Image } from 'native-base'

const EmptyList = ({ message }) => {
    return (
        <Box w={"100%"} h={"100%"} justifyContent={"center"} alignItems={"center"}>
            <Image source={require("./empty.png")} w={200} height={200} alt='empty image' mb={4}></Image>
            <Heading size={"lg"} fontWeight={"normal"}>{message}</Heading>
        </Box>
    )
}

export default EmptyList

const styles = StyleSheet.create({})