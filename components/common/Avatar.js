import { useMemo } from 'react';
import { Image, StyleSheet } from 'react-native';
import { getCircle } from '../../styles/utils/getCircle';

export const Avatar = ({ uri, large }) => {
  const imageStyles = useMemo(
    () => [styles.image, large && styles.large],
    [large]
  )

  return (
    <Image source={{ uri }} style={imageStyles} resizeMode='cover' />
  )
}

const SIZES = {
  small: 70,
  large: 200,
}

const styles = StyleSheet.create({
  image: {
    ...getCircle(SIZES.small),
    borderColor: '#ccc',
    borderWidth: 2,
  },
  large: {
    ...getCircle(SIZES.large),
  }
})
