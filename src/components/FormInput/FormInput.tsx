import type { FC } from "react"
import { Error, FormGroup, Input, Label } from "./styled"
import type { FormInputProps } from "./types"

export const FormInput: FC<FormInputProps> = ({ type, id, label, name, placeholder, value, onChange, required, error }) => {
  return (
    <FormGroup>
      <Label htmlFor={id}>{label}</Label>
      <Input
        type={type}
        id={id}
        name={name}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        required={required}
      />
      {error && <Error>{error}</Error>}
    </FormGroup>
  )
}