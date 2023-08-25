import { collection, addDoc, getDocs } from 'firebase/firestore';
import { dataBase } from '../config/firebase-config'
import { useState } from 'react';

const AddUser = () => {
    const [inputName, setUserName] = useState("");
    const [inputPassword, setUserPassword] = useState("");
    const usersCollectionRef = collection(dataBase, "user")

    const createuser = async () => {
        await addDoc(usersCollectionRef, {name: inputName, password: inputPassword});
    }

}

export default AddUser