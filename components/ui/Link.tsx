import { Colors } from '@/constants/Colors';
import { Link as ExpoLink, LinkProps } from 'expo-router';
import { FC, PropsWithChildren } from 'react';
import { StyleSheet } from 'react-native';

export const Link: FC<PropsWithChildren<LinkProps>> = ({ href, children}) => {
  return (
    <ExpoLink href={href} style={styles.link}>
      {children}
    </ExpoLink>
  )
}

const styles = StyleSheet.create({
  link: {
    color: Colors.blue,
    textAlign: 'center'
  }
})
