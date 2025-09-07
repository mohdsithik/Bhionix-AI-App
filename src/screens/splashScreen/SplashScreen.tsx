import { Text, View } from 'react-native';
import Subtract from '../../assets/Icons/Subtract.svg';
import styles from './Styles';
import { Title } from '../../constants/Strings';
import { useEffect } from 'react';
import { RootStackScreenProps } from '../../navigation/Routes';
import { ScreenName } from '../../navigation/ScreenName';

const SplashScreen = ({ navigation }: RootStackScreenProps<'SplashScreen'>) => {
  const navigetToWalkthrough = () => {
    navigation.navigate(ScreenName.WALKTHROUGH);
  };

  const navigateToLogin = () => {};

  useEffect(() => {
    setTimeout(() => {
      navigetToWalkthrough();
    }, 1000);
  }, []);

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
