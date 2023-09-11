import { StyleSheet, Text, View, FlatList } from 'react-native'
import React from 'react'
import { gql, useQuery, useSubscription } from '@apollo/client'
import { GET_QUESTIONS_SUBSCRIPTION } from './queries';


export default function Questions() {
    const { loading, data, error } = useSubscription(GET_QUESTIONS_SUBSCRIPTION);
    if (loading) {
        return <Text>Loading...</Text>
    }

    if (error) { return <Text> {JSON.stringify(error)}</Text> }
    console.log("data", data);
    return (
        <View style={styles.container}>
            <FlatList
                data={data.questions} // Veri kaynağını belirtin
                keyExtractor={(item) => item.id.toString()} // Her öğenin benzersiz bir anahtarı olduğunu varsayalım
                renderItem={({ item }) => (
                    <View style={styles.item}>
                        <Text>{item.text}</Text>
                    </View>
                )}
            />

        </View>
    )
}

const styles = StyleSheet.create({
    container:
    {
        backgroundColor: 'white',

    }
    ,
    item: {
        padding: 16,
        borderBottomWidth: 1,
        borderBottomColor: '#ccc',

    },


})