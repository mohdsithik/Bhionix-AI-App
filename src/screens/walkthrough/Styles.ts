import { StyleSheet } from 'react-native';
import Colors from '../../constants/Colors';
import FontStyles from '../../assets/stylesheets/FontStyles';
import Dimension from '../../constants/Dimension';

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: Colors.White },
  image: {
    width: Dimension.n(300),
    height: Dimension.n(350),
    resizeMode: 'contain',
    marginTop: Dimension.n(140),
    alignSelf: 'center',
  },
  textContainer: { margin: Dimension.n(20) },
  title: {
    ...FontStyles.interSB30Black,
  },
  description: {
    ...FontStyles.interRegular16Gray,
    marginTop: Dimension.n(12),
  },
  navigationContainer: {
    flexDirection: 'row',
    margin: Dimension.n(20),
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: Dimension.n(60),
  },
  indicatorContainer: { flexDirection: 'row', justifyContent: 'center' },
  positionBottom: {
    position: 'absolute',
    left: 0,
    right: 0,
    bottom: Dimension.n(30),
  },
});

export default styles;
