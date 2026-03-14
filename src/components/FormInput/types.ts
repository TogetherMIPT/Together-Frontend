import type { ChangeEventHandler, HTMLInputTypeAttribute } from "react"

export interface FormInputProps {
  type: HTMLInputTypeAttribute;
  id: string;
  name: string;
  placeholder: string;
  value: string | number | readonly string[] | undefined;
  onChange: ChangeEventHandler<HTMLInputElement, HTMLInputElement>;
  required?: boolean;
  error?: string;
}