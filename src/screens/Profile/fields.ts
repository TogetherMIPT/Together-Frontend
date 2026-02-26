import type { EditableClientFields } from "../../types/client";

interface IProfileFormField {
  title: string;
  name: keyof EditableClientFields;
  type: HTMLInputElement['type'];
  placeholder?: string;
}

export const formFields: IProfileFormField[] = [
  {
    title: "ФИО",
    name: "name",
    type: "text"
  },
  {
    title: "Дата рождения",
    name: "birthdate",
    type: "date",
    placeholder: "2000-12-31"
  },
  {
    title: "Страна",
    name: "country",
    type: "text"
  },
  {
    title: "Город",
    name: "city",
    type: "text"
  },
  {
    title: "Email",
    name: "email",
    type: "email"
  },
]