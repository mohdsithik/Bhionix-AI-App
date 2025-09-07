import { RootStackParamTypes } from './ParamTypes';

import { StackScreenProps } from '@react-navigation/stack';

export type RootStackParamList = {
  SplashScreen: undefined;
  Walkthrough: undefined;
};

export type RootStackScreenProps<T extends keyof RootStackParamList> =
  StackScreenProps<RootStackParamList, T>;
