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
  interSB30White: getFont(Fonts.INTER_SEMIBOLD, 30, Colors.White),
  interSB30White1: getFont(Fonts.INTER_SEMIBOLD, 24, Colors.White),
  interSB16Purple: getFont(Fonts.INTER_SEMIBOLD, 14, Colors.Purple),
  interSB13White: getFont(Fonts.INTER_SEMIBOLD, 13, Colors.White),
  interSB16Black: getFont(Fonts.INTER_SEMIBOLD, 16, Colors.Black),
  interR14White: getFont(Fonts.INTER_R, 14, Colors.White),
  interR14Black: getFont(Fonts.INTER_R, 14, Colors.Black),
  interGray14White: getFont(Fonts.INTER_R, 14, Colors.Gray707070),
  interM16Black: getFont(Fonts.INTER_R, 13, Colors.Black),
  interB13Purple: getFont(Fonts.INTER_BOLD, 13, Colors.Purple),
});

export default FontStyles;
