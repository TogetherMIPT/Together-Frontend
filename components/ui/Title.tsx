import { FC, PropsWithChildren } from "react"
import { StyleSheet, Text, View } from 'react-native'

export const Title: FC<PropsWithChildren> = ({children}) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{children}</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    width: '100%',
  },
  title: {
    lineHeight: 36,
    fontSize: 36,
    fontFamily: 'roboto',
    letterSpacing: -0.08,
    fontWeight: 100,
  }
})