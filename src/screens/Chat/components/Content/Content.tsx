import type { FC } from "react"
import type { IMessage } from "../../../../types/message"
import { Messages } from "./components/Messages";
import { EmptyChat } from "./components/EmptyChat";

interface IProps {
  messages: IMessage[];
}

export const Content: FC<IProps> = ({
  messages
}) => {
  if (!messages.length) return <EmptyChat />

  return <Messages messages={messages} />
}