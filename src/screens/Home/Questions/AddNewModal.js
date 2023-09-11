
import React, { useState } from 'react'
import { Box, Button, Heading, Input } from 'native-base'
import Ionicons from '@expo/vector-icons/Ionicons';

const AddNewModal = () => {
    const [question, setQuestion] = useState("");
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

    const handleSubmit = () => {
        console.log("question", question);
        console.log("options", options);

    };
    return (
        <Box p={6} flex={"1"} >
            <Box flex={1}>    <Heading mb={2}>
                Questions
            </Heading>
                <Input placeholder='Enter a new question'
                    fontSize={20} borderColor="#686565" value={question} onChangeText={setQuestion}
                />
                <Heading mt={6} mb={2}>Options</Heading>
                {options.map((item, i) =>
                    <Input placeholder='Enter a new question'
                        fontSize={18} borderColor="#686565" mb={1} key={i}
                        value={item.text}
                        onChangeText={(val) => handleOptionChange(val, i)}
                    />
                )}
                <Box mt={2} alignItems={{ base: "flex-end" }}>
                    <Button size="xs" colorScheme={"blueGray"}
                        disabled={options.length >= 5}
                        onPress={handleNewOption}
                        leftIcon={<Ionicons name="add-circle" size={30} color={"white"} ></Ionicons>} ></Button>
                </Box>

            </Box>
            <Box>
                <Button onPress={handleSubmit} >Save</Button>
            </Box>

        </Box>
    );
}



export default AddNewModal;