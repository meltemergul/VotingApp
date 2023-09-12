import { StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'
import { useQuery } from '@apollo/client';
import { GET_QUESTION_DETAIL } from './queries';
import Loading from '../../components/AddButton/Loading';
import { Box, Heading, Divider } from 'native-base';
import Form from './Form';
import Result from './Results/index';
const Detail = ({ route }) => {
    const { id } = route.params;
    const [isVoted, setIsVoted] = useState(false);
    const { loading, data } = useQuery(GET_QUESTION_DETAIL, {
        variables: {
            id,
        },
    });
    if (loading) {
        return <Loading></Loading>;
    }

    const { text, options } = data.questions_by_pk;
    return (
        <Box p="3">
            <Heading> {text}</Heading>
            <Divider my={2} />
            {!isVoted ? (<Form options={options} setIsVoted={setIsVoted}></Form>) : (<Result id={id}></Result>)}
        </Box>
    )
}

export default Detail

const styles = StyleSheet.create({})