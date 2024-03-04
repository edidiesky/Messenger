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
        {message?.map(
          (messages?: {
            senderId: any;
            createdAt: moment.MomentInput;
            body: any;
          }) => {
            const usermessage = messages?.senderId === userInfo?.id;
            const createdAt = moment(messages?.createdAt).format(
              "MMMM Do YYYY, h:mm a"
            );
            return (
              <div className="">
                <div className="chatCard flex w-100 column">
                  {usermessage ? (
                    <div className="flex w-100 column gap-1">
                      <div className="revieverWrapper w-100 flex item-center gap-1">
                        {/* <img src={messages?.sender?.image} alt="" className="avatar" /> */}
                        <div className=" SenderChat">
                          <h4 className="fs-14 text-white text-light">
                            {messages?.body}
                          </h4>
                        </div>
                      </div>
                      <div className="flex w-100 item-center justify-center gap-1">
                        <h5 className="fs-13 item-center text-bold text-grey">
                          {createdAt}
                        </h5>
                      </div>
                    </div>
                  ) : (
                    <div
                      style={{ justifyContent: "flex-start" }}
                      className="flex w-100 column gap-1"
                    >
                      <div className="flex wrap column">
                        <div className="w-100 flex item-center gap-1">
                          {/* <img
                            src={messages?.sender?.image}
                            alt=""
                            className="avatar"
                          /> */}
                          <div className=" recieverChat">
                            <h4 className="fs-14 text-dark text-light">
                              {messages?.body}
                            </h4>
                          </div>
                        </div>
                      </div>
                      <div className=" flex w-100 flex item-center justify-center gap-1">
                        <h5 className="fs-13 text-bold text-grey">
                          {createdAt}
                        </h5>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            );
          }
        )}
      </div>
    </MessageListStyles>
  );
};

export default MessageList;
