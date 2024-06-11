import React from 'react';
import { View, Image } from 'react-native';
import { styles } from '../styles';

interface Props {
  source: any;
  size: number;
}

const CustomIcon: React.FC<Props> = ({ source, size }) => {
  return (
    <View style={styles.icon}>
      <Image source={source} style={{ width: size, height: size }} />
    </View>
  );
};

export default CustomIcon;