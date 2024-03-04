import React from "react";
import { MessageListStyles } from "./styles/messagelist";
import { useAppSelector } from "../../../hooks/reduxtoolkit";
import moment from "moment";
type MessageListProps = {
  setMessage: (value: any) => void,
  message?: any
}
const MessageList: React.FC<MessageListProps> = ({ setMessage, message }) => {
  const { userInfo, userDetails } = useAppSelector((store) => store.auth);
  // const { message } = useAppSelector((store) => store.message);
  return (
    <MessageListStyles className="w-100 flex column gap-2">
      <div className="chatList w-90 auto flex column gap-2">
      
      </div>
    </MessageListStyles>
  );
};

export default MessageList;
