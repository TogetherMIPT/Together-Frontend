import { IClient } from "./client";

export interface IUser extends IClient {
  login: string;
  password: string;
}
