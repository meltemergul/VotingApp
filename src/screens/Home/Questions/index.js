import React from 'react';
import { gql, useQuery, useSubscription } from '@apollo/client';
import { GET_QUESTIONS_SUBSCRIPTION } from './queries';
import Loading from '../../../components/AddButton/Loading';
import Item from './Item'; // Item komponentini ekledik
import { FlatList, Text } from 'react-native';
import EmptyList from '../../../components/AddButton/EmptyList/index'
export default function Questions() {
    const { loading, data, error } = useSubscription(GET_QUESTIONS_SUBSCRIPTION);

    if (loading) {
        return <Loading />;
    }

    if (error) {
        return <Text>{JSON.stringify(error)}</Text>;
    }

    return (
        <>
            {
                data.questions.length > 0 ? (
                    <FlatList data={data.questions}
                        renderItem={({ item }) => <Item item={item} />}
                        keyExtractor={(item) => item.id.toString()} />)
                    :
                    (<EmptyList></EmptyList>)

            }
        </>
    );
}
