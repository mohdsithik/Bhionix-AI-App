import { Text, TextInput, TouchableOpacity, View } from 'react-native';
import React, { FC, useState } from 'react';
import CheckBox from '../../assets/Icons/checkbox.svg';
import styles from './Styles';
import { Title } from '../../constants/Strings';
import Dimension from '../../constants/Dimension';
import Colors from '../../constants/Colors';
import FontStyles from '../../assets/stylesheets/FontStyles';

interface LoginFormProps {
  onPressLogin: () => void;
}

const RegisterForm: FC<LoginFormProps> = ({ ...props }) => {
  const { onPressLogin } = props;

  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const [isCheckBoxClicked, setIsCheckBoxClicked] = useState(false);

  return (
    <View style={styles.container}>
      <TextInput
        value={username}
        style={styles.emailField}
        placeholder={Title.NAME}
        onChangeText={setUsername}
      />
      <TextInput
        value={username}
        style={styles.emailField}
        placeholder={Title.MOBILE_NUMBER}
        onChangeText={setUsername}
      />
      <TextInput
        value={username}
        style={styles.emailField}
        placeholder={Title.EMAIL}
        onChangeText={setUsername}
      />
      <TextInput
        value={password}
        style={styles.passwordField}
        placeholder={Title.PASSWORD}
        secureTextEntry
        onChangeText={setPassword}
      />

      <View style={styles.checkBoxContainer}>
        <TouchableOpacity
          onPress={() => setIsCheckBoxClicked(!isCheckBoxClicked)}
        >
          {isCheckBoxClicked ? (
            <CheckBox />
          ) : (
            <View style={styles.emptyCheckBox} />
          )}
        </TouchableOpacity>

        <Text style={styles.agreeText}>{Title.AGREE}</Text>
      </View>

      <View>
        <View style={styles.loginButton}>
          <Text style={styles.loginText}>{Title.CREATE_MY_ACCOUNT}</Text>
        </View>
        {/* {isCheckBoxClicked && (
          <View
            style={{
              position: 'absolute',
              top: 0,
              bottom: 0,
              left: 0,
              right: 0,
              backgroundColor: '#FFFFF1',
            }}
          />
        )} */}
      </View>

      <Text style={styles.validateText}>
        {Title.ALREADY_HAVE_ACC}{' '}
        <Text style={styles.signUpText} onPress={onPressLogin}>
          Log In
        </Text>{' '}
        now.
      </Text>
    </View>
  );
};

export default RegisterForm;
