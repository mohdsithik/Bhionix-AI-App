import { Dimensions, PixelRatio } from 'react-native';

const { width: SCREEN_WIDTH, height: SCREEN_HEIGHT } = Dimensions.get('window');
const scale = SCREEN_WIDTH / 375;

export function normalize(size: number) {
  const newSize = size * scale;
  return Math.round(PixelRatio.roundToNearestPixel(newSize));
}

export default {
  INTER_BLACK: 'Inter-Black',
  INTER_BOLD: 'Inter-Bold',
  INTER_EB: 'Inter-ExtraBold',
  INTER_M: 'Inter-Medium',
  INTER_R: 'Inter-Regular',
  INTER_SEMIBOLD: 'Inter-SemiBold',
  INTER_THIN: 'Inter-Thin',
  fontSize: normalize,
  n: normalize,
};
