import React, { useState } from 'react';
import { View, Text, TextInput, StyleSheet, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const UserForm = props => {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [username, setUsername] = useState();

  const navigation = useNavigation();

  const handleSubmit = () => {
    props.action({
      variables: {
        email: email,
        password: password,
        username: username
      }
    });
  };

  return (
    <View style={styles.formView}>
      <Text style={styles.formLabel}>Email</Text>
      <TextInput
        style={styles.styledInput}
        onChangeText={text => setEmail(text)}
        value={email}
        textContentType="emailAddress"
        autoCompleteType="email"
        autoFocus={true}
        autoCapitalize="none"
      />
      {props.formType === 'signUp' && (
        <View>
          <Text style={styles.formLabel}>Username</Text>
          <TextInput
          style={StyleSheet.styledInput}
            onChangeText={text => setUsername(text)}
            value={username}
            textContentType="username"
            autoCapitalize="none"
          />
        </View>
      )}
      <Text style={styles.formLabel}>Password</Text>
      <TextInput
        style={StyleSheet.styledInput}
        onChangeText={text => setPassword(text)}
        value={password}
        textContentType="password"
        secureTextEntry={true}
      />
      <TouchableOpacity onPress={handleSubmit}>
        <Text style={styles.buttonText}>Submit</Text>
      </TouchableOpacity>
      {props.formType !== 'signUp' && (
        <TouchableOpacity onPress={() => navigation.navigate('SignUp')}>
          <Text>
            Need an account? <Text>Sign up.</Text>
          </Text>
        </TouchableOpacity>
      )}
    </View>
  );
};

export default UserForm;

const styles = StyleSheet.create({
    formView: {
        padding: 10,
    },
    styledInput: {
        borderWidth: 1,
        borderStyle: 'solid',
        borderColor: 'gray',
        fontSize: 18,
        padding: 8,
        marginBottom: 24,
    },
    formLabel: {
        fontSize: 18,
        fontWeight: 'bold',
    },
    formButton: {
        background: '#0077cc',
        width: '100%',
        padding: 8,
    },
    buttonText: {
        textAlign: 'center',
        color: '#fff',
        fontWeight: 'bold',
        fontSize: 18,
    },
    signup: {
        marginTop: 20,
    },
    link: {
        color: '#0077cc',
        fontWeight: 'bold',
    }
});