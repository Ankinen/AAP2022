import React, { useEffect } from "react";
import { useMutation, useApolloClient, gql } from "@apollo/client";
import { useNavigate } from "react-router-dom";

import UserForm from "../components/UserForm";
import { Navigate } from "react-router-dom";

const SIGNIN_USER = gql`
    mutation signUp($username: String!, $password: String!) {
        signUp(username: $username, password: $password)
    }
`;
const navigate = useNavigate();

const SignIn = () => {
    useEffect(() => {
        //update the document title
        document.title = 'Sign In - Notedly';
    });

    const client = useApolloClient();
    const [signIn, { loading, error }] = useMutation(SIGNIN_USER, {
        onCompleted: data => {
            //store the token
            localStorage.setItem('token', data.signIn);
            //update the local chache
            client.writeData({ data: { isLoggedIn: true } });
            //redirect the user to the homepage
            navigate('/')
        }
    });

    return(
        <React.Fragment>
            <UserForm action={signIn} formType="signin" />
            {/* if the data is loading, display a loading message */}
            {loading && <p>Loading...</p>}
            {/* if there is an error, display an error message */}
            {error && <p>Error signing in!</p>}
        </React.Fragment>
    );
};

export default SignIn;