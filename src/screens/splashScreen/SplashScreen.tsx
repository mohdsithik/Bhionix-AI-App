import { Text, View } from 'react-native';
import FontStyles from '../../assets/stylesheets/FontStyles';

import Subtract from '../../assets/Icons/Subtract.svg';

const SplashScreen = () => {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text style={{ ...FontStyles.interSB14 }}>SplashScreen</Text>
      <Text style={{ ...FontStyles.interBold14 }}></Text>

      <Subtract />
    </View>
  );
};
export default SplashScreen;
