import { Colors } from "@/constants/Colors"
import { FC } from "react"
import { StyleSheet, TextInput, TextInputProps } from "react-native"

export const Input: FC<TextInputProps> = (props) => {
  return (
    <TextInput {...props} style={styles.input} />
  )
}

const styles = StyleSheet.create({

  input: {
    borderWidth: 1,
    borderStyle: 'solid',
    borderColor: Colors.grey,
    borderRadius: 8,
    paddingHorizontal: 16,
    paddingVertical: 12,
    width: '100%',
  }
})