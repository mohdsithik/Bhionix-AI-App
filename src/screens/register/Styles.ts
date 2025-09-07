import { StyleSheet } from 'react-native';
import Dimension from '../../constants/Dimension';
import Colors from '../../constants/Colors';
import FontStyles from '../../assets/stylesheets/FontStyles';

const styles = StyleSheet.create({
  Banner: {
    width: '100%',
    height: Dimension.n(450),
  },
  container: { flex: 1, backgroundColor: Colors.White },
  scrollview: { position: 'absolute', top: 0, width: '100%' },
  appLogo: { marginTop: Dimension.n(70), alignSelf: 'center' },
  welcomeText: {
    ...FontStyles.interSB30White1,
    textAlign: 'center',
    marginTop: Dimension.n(26),
    marginHorizontal: Dimension.n(20),
  },
  description: {
    ...FontStyles.interR14White,
    textAlign: 'center',
    marginTop: Dimension.n(10),
  },
});

export default styles;
