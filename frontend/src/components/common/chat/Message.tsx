import React from "react";
import io from "socket.io-client";
import axios from "axios";
let socketIo = io as any;
import { MdOutlineAddCircle } from "react-icons/md";
import { HiThumbUp } from "react-icons/hi";
import { MessageStyles } from "./styles/message";
import ImageIcon from "../../../assets/svg/Image";
import GifIcon from "../../../assets/svg/gif";
import StickerIcon from "../../../assets/svg/sticker";
import { useAppDispatch, useAppSelector } from "../../../hooks/reduxtoolkit";
type MessageProps = {
  setMessage: (value: any) => void,
  setArrivalMessage: (value: any) => void,
  message?: any,
  arrivalmessage?: any,
  handleSingleMessageDetails: (value?: any) => void
}

const Message: React.FC<MessageProps> = ({ setMessage, arrivalmessage, handleSingleMessageDetails, message, setArrivalMessage }) => {
  socketIo = socketIo.connect(import.meta.env.VITE_API_BASE_URL);
  const messageurl: string = `${import.meta.env.VITE_API_BASE_URLS}/message`;

  const [body, setBody] = React.useState<string>("");
  const [image, setImage] = React.useState<string>("");

  const { conversationDetails } = useAppSelector((store) => store.conversation);
  const { userInfo, userDetails, token } = useAppSelector((store) => store.auth);
  // console.log(socketIo)


  const handleCreateMessage = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      const config = {
        headers: {
          authorization: `Bearer ${token}`,
        },
      };
      const { data } = await axios.post(
        `${import.meta.env.VITE_API_BASE_URLS}/message/${conversationDetails?.id}`,
        {
          body,
          userId: userInfo?._id,
        },
        config
      )

      handleSingleMessageDetails()
      setMessage((prev?: any) => [...prev, { body: data.body, userId: userInfo?._id, }])
      socketIo?.emit("sendMessage", {
        receiverId: userDetails?.id,
        senderId: userInfo?.id,
        text: body,
      });
      setBody("");
      // setArrivalMessage(response.data.messages)

      

    } catch (err: any) {
      console.log(err)
    }

    setBody("");

  };
  React.useEffect(() => {
    socketIo?.emit('addUserId', userInfo?.id)
    socketIo?.on('getAllConnectedUser', (users?: any) => {
      // console.log(users)
    })
    socketIo?.on('getMessage', (message?: any) => {
      setMessage((prev?: any) => [...prev, { body: message.text, userId: userInfo?._id, }])
      // console.log(message)
    })

  }, [socketIo, setMessage]);
  // console.log(message)
  //  console.log(arrivalmessage);
  return (
    <MessageStyles className="w-100 flex column gap-2">
      <form
        onSubmit={(e: React.FormEvent<HTMLFormElement>) =>
          handleCreateMessage(e)
        }
        action=""
        className="w-100 family1 auto flex item-center"
      >
        <div className="flex form_left item-center">
          <div className="icon flex item-center justify-center">
            <MdOutlineAddCircle className="fs-20" />
          </div>
          <div className="icon flex item-center justify-center">
            <ImageIcon />
          </div>
          <div className="icon flex item-center justify-center">
            <StickerIcon />
          </div>
          <div className="icon flex item-center justify-center">
            <GifIcon />
          </div>
        </div>

        <input
          type="text"
          value={body}
          name="body"
          onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
            setBody(e.target.value)
          }
          placeholder="Aa"
          className="input w-100 fs-16 flex-1 text-dark family1"
        />
        <div className="icon flex item-center justify-center">
          <HiThumbUp className="fs-24 text-light" />
        </div>
      </form>
    </MessageStyles>
  );
};

export default Message;
