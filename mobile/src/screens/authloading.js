import React from "react";
import * as SecureStore from 'expo-secure-store';

import Loading from "../components/Loading";
 "../components/Loading";

const AuthLoading = ({ navigation}) => {
    const checkLoginState = async () => {
        const userToken = await SecureStore.getItemAsync('token');
        
    }
    return <Loading />
};

export default AuthLoading;

const checkLoginState = async () => {
    return await SecureStore.getItemAsync('token');
};