import { StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'
import { Radio, Box, Button } from 'native-base'
import { useMutation } from '@apollo/client';
import { NEW_ANSWER_MUTATION } from './queries';

const Form = ({ options, setIsVoted }) => {

    const [selected, setSelected] = useState("");

    const [newAnswer, { loading }] = useMutation(NEW_ANSWER_MUTATION);

    const handleSubmit = async () => {
        if (!selected) {
            return;
        }

        await newAnswer({
            variables: {
                option_id: selected,
            },

        });
        setIsVoted(true);
    };

    return (
        <Box py={"3"}>
            <Radio.Group value={selected} onChange={setSelected}>
                {options.map(option =>
                    (<Radio key={option.id} value={option.id} my={1}>{option.text}</Radio>))}
            </Radio.Group>

            <Button onPress={handleSubmit} isLoading={loading} mt={5}>Submit</Button>
        </Box>


    )
}

export default Form

const styles = StyleSheet.create({})