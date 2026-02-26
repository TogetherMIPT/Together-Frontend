export interface IClient {
  user_id: number;
  name: string;
  email: string;
  country: string;
  city: string;
  birthdate: string;
  gender: string;
  creation_datetime: string;
}

export type EditableClientFields = Pick<IClient, 'birthdate' | 'city' | 'country' | 'email' | 'gender' | 'name'>
