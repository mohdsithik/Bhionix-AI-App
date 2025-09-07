import { StyleSheet } from 'react-native';
import Fonts from '../../constants/Fonts';
import Colors from '../../constants/Colors';

export const getFont = (font: string, size: number, color: string) => {
  return { fontFamily: font, fontSize: Fonts.n(size), color: color };
};

const FontStyles = StyleSheet.create({
  interR15Gray: getFont(Fonts.INTER_R, 15, Colors.Gray),
});

export default FontStyles;
