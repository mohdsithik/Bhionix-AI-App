import { Text, View } from 'react-native';
import {
  Walkthrough1,
  Walkthrough2,
  Walkthrough3,
} from '../../assets/Images/Images';

const Walkthrough = () => {
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

  return (
    <View
      style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}
    ></View>
  );
};
export default Walkthrough;
