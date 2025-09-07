import { StyleSheet } from 'react-native';
import Fonts from '../../constants/Fonts';
import Colors from '../../constants/Colors';

export const getFont = (font: string, size: number, color: string) => {
  return { fontFamily: font, fontSize: Fonts.n(size), color: color };
};

const FontStyles = StyleSheet.create({
  interR15Gray: getFont(Fonts.INTER_R, 15, Colors.Gray),
  interSB30Black: getFont(Fonts.INTER_SEMIBOLD, 25, Colors.Black),
  interRegular16Gray: getFont(Fonts.INTER_R, 14, Colors.Gray),
  interBold14Purple: getFont(Fonts.INTER_BOLD, 14, Colors.Purple),
});

export default FontStyles;
