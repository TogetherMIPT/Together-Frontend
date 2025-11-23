import { FC, PropsWithChildren } from "react";
import { StyleSheet, View } from "react-native";

export const PageWrapper: FC<PropsWithChildren> = ({children}) => {
  return <View style={styles.view}>{children}</View>;
}

const styles = StyleSheet.create({
  view: {
    flex: 1,
    padding: 20,
    alignItems: 'center',
    justifyContent: 'center'
  }
})