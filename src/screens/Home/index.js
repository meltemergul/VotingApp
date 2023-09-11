import { StyleSheet, Text, View, Modal } from 'react-native'
import React, { useEffect, useState } from 'react'
import { Button } from "native-base";
import Questions from './Questions';
import AddButton from '../../components/AddButton';
import AddNewModal from './Questions/AddNewModal';

const Home = ({ navigation }) => {
    const [modalVisible, setModalVisible] = useState(false);
    React.useEffect(() => {

        navigation.setOptions({
            headerRight: () => <AddButton onPress={() => setModalVisible((prev) => !prev)} ></AddButton>,
        });
    }, [navigation]);
    return (
        <View>

            <Questions></Questions>
            <Modal
                animationType="slide"
                visible={modalVisible}
                presentationStyle={"pageSheet"}
                onRequestClose={() => setModalVisible(false)
                }
            >
                <AddNewModal></AddNewModal>
            </Modal>
        </View>
    )
}

export default Home

const styles = StyleSheet.create({})
