
import React, { useState } from 'react'
import { Box, Button, Heading, Input, useToast } from 'native-base'
import Ionicons from '@expo/vector-icons/Ionicons';
import { ADD_NEW_QUESTION_MUTATION } from './queries';
import { useMutation } from '@apollo/client';
const AddNewModal = ({ closeModal }) => {
    const toast = useToast();
    const [addNewQuestion, { loading, error }] = useMutation(
        ADD_NEW_QUESTION_MUTATION);


    const [title, setTitle] = useState("");
    const [options, setOptions] = useState([{ text: "" }, { text: "" }]);

    const handleOptionChange = (val, i) => {
        const data = [...options];
        data[i].text = val;
        setOptions(data);
    };

    const handleNewOption = () => {
        if (options.length >= 5) { return; }
        setOptions((prev) => [...prev, { text: "" }]);
    };

    const handleSubmit = async () => {
        const options_data = options.filter((item) => item.text != "");
        if (!title || options_data.length < 2) {
            return;
        }

        await addNewQuestion({
            variables: {
                title,
                options: options_data,
            },
        });

        closeModal();
        toast.show({
            title: "question added",
            placement: "bottom",
            status: "success",
        })

    };
    return (
        <Box p={6} flex={"1"} >
            <Box flex={1}>    <Heading mb={2}>
                Questions
            </Heading>
                <Input placeholder='Enter a new question'
                    fontSize={20} variant={"filled"} value={title} onChangeText={setTitle}
                />
                <Heading mt={6} mb={2}>Options</Heading>
                {options.map((item, i) =>
                    <Input variant={"filled"} placeholder='Enter a new options'
                        fontSize={18} mb={1} key={i}
                        value={item.text}
                        onChangeText={(val) => handleOptionChange(val, i)}
                    />
                )}
                <Box mt={2} alignItems={{ base: "flex-end" }}>
                    <Button size="xs" colorScheme={"gray"}
                        disabled={options.length >= 5}
                        onPress={handleNewOption}
                        leftIcon={<Ionicons name="add-circle" size={30} color={"white"} ></Ionicons>} ></Button>
                </Box>

            </Box>
            <Box>
                <Button onPress={handleSubmit} colorScheme={"blue"} isLoading={loading}>SAVE</Button>
            </Box>

        </Box>
    );
}



export default AddNewModal;