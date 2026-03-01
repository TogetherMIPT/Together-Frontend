import type { ChangeEventHandler, Dispatch, FC, SetStateAction } from "react"
import type { EditableClientFields } from "../../../../types/client";
import { FormGroup, FormControl, Label } from './styled';

interface IProps {
  title: string;
  name: keyof EditableClientFields;
  value: string;
  type: string;
  placeholder?: string;
  onChange: Dispatch<SetStateAction<Partial<EditableClientFields> | undefined>>;
}

export const FormField: FC<IProps> = ({ title, name, value, placeholder, onChange }) => {
  const handleChange: ChangeEventHandler<HTMLInputElement> = (e) => {
    onChange((prev) => ({ ...prev, [name]: e.target.value }))
  }

  return (
    <FormGroup>
      <Label htmlFor={name}>{title}</Label>
      <FormControl
        type="text"
        id={name}
        value={value}
        onChange={handleChange}
        placeholder={placeholder}
      />
    </FormGroup>
  );
};
