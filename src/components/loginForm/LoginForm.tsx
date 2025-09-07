import { Text, TextInput, TouchableOpacity, View } from 'react-native';
import React, { FC, useState } from 'react';
import OrSvg from '../../assets/Icons/Or.svg';
import styles from './Styles';
import { Title } from '../../constants/Strings';

interface LoginFormProps {
  onPressSignUp: () => void;
}

const LoginForm: FC<LoginFormProps> = ({ ...props }) => {
  const { onPressSignUp } = props;
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.loginWithOTP}>
        <Text style={styles.loginWithOtpText}>{Title.LOGINWITHOTP}</Text>
      </TouchableOpacity>

      <View style={styles.itemSaparateL}>
        <OrSvg />
      </View>

      <TextInput
        value={username}
        style={styles.emailField}
        placeholder={Title.MOBILE_OR_MAIL}
        onChangeText={setUsername}
      />
      <TextInput
        value={password}
        style={styles.passwordField}
        placeholder={Title.PASSWORD}
        secureTextEntry
        onChangeText={setPassword}
      />

      <TouchableOpacity>
        <Text style={styles.forgotPass}>{Title.FORGOT_PASSWORD}</Text>
      </TouchableOpacity>

      <View style={styles.loginButton}>
        <Text style={styles.loginText}>{Title.LOGIN}</Text>
      </View>

      <Text style={styles.validateText}>
        {Title.DONT_HAVE_ACC}{' '}
        <Text style={styles.signUpText} onPress={onPressSignUp}>
          Sign Up
        </Text>{' '}
        now.
      </Text>
    </View>
  );
};

export default LoginForm;
