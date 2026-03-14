import type { FC, PropsWithChildren } from "react"
import { StyledMessage } from "./styled"
import { Skeleton } from "../../../../../../../../components/Skeleton";

interface IProps extends PropsWithChildren {
  isLoading?: boolean;
  onClick: () => void;
}

export const NewMessage: FC<IProps> = ({ isLoading, onClick, children }) => {
  if (isLoading) {
    return <Skeleton width="100%" height="48px" />
  }

  return <StyledMessage onClick={onClick}>{children}</StyledMessage>
}