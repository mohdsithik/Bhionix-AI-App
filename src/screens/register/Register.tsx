import { Image, ScrollView, Text, View } from 'react-native';
import { Banner } from '../../assets/Images/Images';
import Dimension from '../../constants/Dimension';
import Logo from '../../assets/Icons/Logo.svg';
import { Title } from '../../constants/Strings';
import styles from './Styles';
import RegisterForm from '../../components/registerForm/RegisterForm';
import { RootStackScreenProps } from '../../navigation/Routes';
import { ScreenName } from '../../navigation/ScreenName';

const Register = ({ navigation }: RootStackScreenProps<'Register'>) => {
  const onPressLogin = () => {
    navigation.goBack();
  };

  return (
    <View style={styles.container}>
      <Image source={Banner} style={styles.Banner} />
      <ScrollView style={styles.scrollview}>
        <View style={styles.appLogo}>
          <Logo width={Dimension.n(40)} height={Dimension.n(40)} />
        </View>
        <Text style={styles.welcomeText}>{Title.JOIN}</Text>
        <View style={{ paddingBottom: 20 }}>
          <RegisterForm onPressLogin={onPressLogin} />
        </View>
        <View style={{ height: 20 }} />
      </ScrollView>
    </View>
  );
};
export default Register;
