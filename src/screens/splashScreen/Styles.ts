import { StyleSheet } from 'react-native';
import Colors from '../../constants/Colors';
import FontStyles from '../../assets/stylesheets/FontStyles';
import Dimension from '../../constants/Dimension';

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    flex: 1,
    alignItems: 'center',
    backgroundColor: Colors.White,
  },
  iconContainer: { flex: 1, justifyContent: 'center', alignItems: 'center' },
  tagline: { ...FontStyles.interR15Gray, marginBottom: Dimension.n(20) },
});

export default styles;
