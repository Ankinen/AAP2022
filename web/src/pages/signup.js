import React, { useEffect } from "react";
import { useMutation, useApolloClient, gql } from "@apollo/client";
import { useNavigate } from "react-router-dom";

import UserForm from "../components/UserForm";

const SIGNUP_USER = gql`
    mutation signUp($email: String!, $username: String!, $password: String!) {
        signUp(email: $email, username: $username, password: $password)
    }
`;

const navigate = useNavigate();

//include the props passed to the component for later use
const SignUp = () => {
    
    useEffect(() => {
        // update the document title
        document.title = 'Sign Up - Notedly';
    });

    const client = useApolloClient();

    // add the mutation hook
    const [signUp, { loading, error }] = useMutation(SIGNUP_USER, {
        onCompleted: data => {
            // console.log the JSON Web Token when the mutation is complete
            console.log("data.signUp:", data.signUp);
            localStorage.setItem('token', data.signUp)
            // update the local cache
            client.writeData({ data: { isLoggedIn: true } });
            //redirect the user to the homepage
            navigate('/');
        }
    });

    // htmlFor is JSX version of HTML's for attribute
    return (
        <React.Fragment>
            <UserForm action={signUp} formType="signup" />
            {/* if the data is loading, display a loading message */}
            {loading && <p>Loading...</p>}
            {/* if there is an error, display an error message */}
            {error && <p>Error creating an account!</p>}
        </React.Fragment>
    );
};

export default SignUp;