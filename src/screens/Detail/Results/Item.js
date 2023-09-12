import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Heading, Box, Progress } from 'native-base'
export default function Item({ item, total }) {
    return (
        <Box my={3}>
            <Heading size={"sm"} mb={3}>
                {item.text}(%{" "}
                {((item.answers_aggregate.aggregate.count * 100) / total).toFixed(1)})
                {' -  '}
                {item.answers_aggregate.aggregate.count} total
            </Heading>

            <Progress size={"lg"} value={item.answers_aggregate.aggregate.count} max={total} my="4" />
        </Box>
    )
}

const styles = StyleSheet.create({})