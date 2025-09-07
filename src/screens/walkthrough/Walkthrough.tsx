import { Image, Text, TouchableOpacity, View } from 'react-native';
import {
  Walkthrough1,
  Walkthrough2,
  Walkthrough3,
} from '../../assets/Images/Images';
import Colors from '../../constants/Colors';
import Dimension from '../../constants/Dimension';
import FontStyles from '../../assets/stylesheets/FontStyles';
import NextIcon from '../../assets/Icons/NextIcon.svg';
import { useMemo, useState } from 'react';
import styles from './Styles';
import { Title } from '../../constants/Strings';
import { RootStackScreenProps } from '../../navigation/Routes';

const Walkthrough = ({ navigation }: RootStackScreenProps<'Walkthrough'>) => {
  const WalkthroughData = [
    {
      id: 1,
      title: 'Discover Verified Experts Instantly',
      description:
        'CA, Lawyers, Doctors, Architects — all in one place.Find trusted professionals in Finance, Legal, Healthcare & Infrastructure.',
      image: Walkthrough1,
    },
    {
      id: 2,
      title: 'Book Appointments, On Your Time',
      description:
        'Check real-time availability. Schedule video calls or in-person meetings with just a few taps.',
      image: Walkthrough2,
    },
    {
      id: 3,
      title: 'Pay Securely. Get Instant Invoices.',
      description:
        'Integrated wallet, UPI, card payments & auto-generated bills — fully secure and compliant.',
      image: Walkthrough3,
    },
  ];

  const [currentIndex, setCurrentIndex] = useState<number>(0);

  const currentIndexData = useMemo(() => {
    return WalkthroughData[currentIndex];
  }, [currentIndex]);

  const onPressNext = () => {
    if (currentIndex < WalkthroughData.length - 1) {
      setCurrentIndex(currentIndex + 1);
    } else {
      onPressSkip();
    }
  };

  const onPressSkip = () => {
    // Navigate to SignIn Screen
  };

  return (
    <View style={styles.container}>
      <Image source={currentIndexData.image} style={styles.image} />
      <View style={styles.textContainer}>
        <Text style={styles.title}>{currentIndexData.title}</Text>
        <Text style={styles.description}>{currentIndexData.description}</Text>
      </View>
      <View style={styles.positionBottom}>
        <View style={styles.navigationContainer}>
          <TouchableOpacity onPress={onPressSkip}>
            <Text style={{ ...FontStyles.interBold14Purple }}>
              {Title.SKIP}
            </Text>
          </TouchableOpacity>

          <View style={styles.indicatorContainer}>
            {[1, 2, 3].map((item, index) => (
              <View
                key={index}
                style={{
                  width: Dimension.n(30),
                  height: Dimension.n(6),
                  borderRadius: Dimension.n(40),
                  backgroundColor:
                    item === currentIndexData.id ? Colors.Purple : Colors.Gray,
                  margin: Dimension.n(2),
                }}
              ></View>
            ))}
          </View>

          <TouchableOpacity onPress={onPressNext}>
            <NextIcon />
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};
export default Walkthrough;
