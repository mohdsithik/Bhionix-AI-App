import { StyleSheet } from 'react-native';
import Fonts from '../../constants/Fonts';
import Colors from '../../constants/Colors';

export const getFont = (font: string, size: number, color: string) => {
  return { fontFamily: font, fontSize: Fonts.n(size), color: color };
};

const FontStyles = StyleSheet.create({
  // font name format : name|Type|size|Color (color name should be refor from color constans)

  //  poppinsM16White: getFont(Fonts.POPPINS_M, 16, Colors.white),

  interBold14: getFont(Fonts.INTER_BOLD, 14, Colors.BLUE),
  interSB14: getFont(Fonts.INTER_SEMIBOLD, 30, Colors.RED),
});

export default FontStyles;
