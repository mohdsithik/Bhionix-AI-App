import { Text, View } from 'react-native';
import Subtract from '../../assets/Icons/Subtract.svg';
import styles from './Styles';
import { Title } from '../../constants/Strings';

const SplashScreen = () => {
  return (
    <View style={styles.container}>
      <View style={styles.iconContainer}>
        <Subtract />
      </View>
      <Text style={styles.tagline}>{Title.Experts_Booked_Solved}</Text>
    </View>
  );
};
export default SplashScreen;
