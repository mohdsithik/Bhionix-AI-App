import { StyleSheet } from 'react-native';
import Dimension from '../../constants/Dimension';
import Colors from '../../constants/Colors';
import FontStyles from '../../assets/stylesheets/FontStyles';

const styles = StyleSheet.create({
  container: {
    marginTop: Dimension.n(30),
    paddingHorizontal: Dimension.n(20),
    backgroundColor: Colors.White,
    marginHorizontal: Dimension.n(20),
    borderRadius: Dimension.n(20),
    elevation: 10,
  },
  loginWithOTP: {
    marginTop: Dimension.n(30),
    borderWidth: 1,
    borderColor: Colors.LineGray,
    padding: Dimension.n(10),
    borderRadius: Dimension.n(30),
  },
  loginWithOtpText: { ...FontStyles.interSB16Black, textAlign: 'center' },
  itemSaparateL: { marginTop: Dimension.n(20), alignItems: 'center' },
  emailField: {
    borderWidth: 1,
    borderColor: Colors.LineGray,
    borderRadius: Dimension.n(5),
    padding: Dimension.n(10),
    marginTop: Dimension.n(20),
    paddingVertical: Dimension.n(14),
    ...FontStyles.interGray14White,
  },
  passwordField: {
    borderWidth: 1,
    borderColor: Colors.LineGray,
    borderRadius: Dimension.n(5),
    padding: Dimension.n(10),
    marginTop: Dimension.n(20),
    paddingVertical: Dimension.n(14),
    ...FontStyles.interGray14White,
  },
  forgotPass: {
    ...FontStyles.interSB16Purple,
    textAlign: 'right',
    marginTop: Dimension.n(10),
  },
  loginButton: {
    backgroundColor: Colors.Purple,
    marginTop: Dimension.n(26),
    padding: Dimension.n(14),
    borderRadius: Dimension.n(10),
    alignItems: 'center',
  },
  loginText: { ...FontStyles.interSB13White },
  validateText: {
    ...FontStyles.interM16Black,
    textAlign: 'center',
    marginVertical: Dimension.n(30),
  },
  signUpText: { ...FontStyles.interB13Purple },
});

export default styles;
