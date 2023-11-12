import React from 'react';
import { MdAddReaction, MdOutlineAddCircle } from "react-icons/md";
import { AiFillPicture } from "react-icons/ai";
import { HiThumbUp } from "react-icons/hi";
import { MessageStyles } from './styles/message';
import RequestIcon from '../../../assets/svg/Voice';
import ImageIcon from '../../../assets/svg/Image';
import GifIcon from '../../../assets/svg/gif';
import StickerIcon from '../../../assets/svg/sticker';
import { useAppDispatch, useAppSelector } from '../../../hooks/reduxtoolkit';
import { Createmessage } from '../../../features/message/messageReducer';

const Message: React.FC = () => {
    const [body, setBody] = React.useState<string>('')
    const dispatch = useAppDispatch()
    const { conversationDetails } = useAppSelector(store => store.conversation)
    const { userInfo } = useAppSelector(store => store.auth)
    const handleCreateMessage = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        dispatch(Createmessage({
            body: body,
            userId: userInfo?._id,
            conversationId: conversationDetails?.id
        }))
        setBody('')
    }
    return (
        <MessageStyles className="w-100 flex column gap-2">
            <form onSubmit={(e: React.FormEvent<HTMLFormElement>) => handleCreateMessage(e)} action="" className="w-100 family1 auto flex item-center">
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
                    name='body'
                    onChange={(e: React.ChangeEvent<HTMLInputElement>) => setBody(e.target.value)}
                    placeholder="Aa"
                    className="input w-100 fs-16 flex-1 text-dark family1"
                />
                <div className="icon flex item-center justify-center">
                    <HiThumbUp className="fs-24 text-light" />
                </div>
            </form>
        </MessageStyles>
    )
}


export default Message