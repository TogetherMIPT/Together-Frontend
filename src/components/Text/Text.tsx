import { FC, PropsWithChildren } from "react";

export const Text: FC<PropsWithChildren> = ({ children }) => {
  return <p>{children}</p>
}