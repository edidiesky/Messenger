import React, { useEffect } from 'react';
import io from 'socket.io-client';
import axios from "axios";
let socketIo = io as any
import { ChatSectionStyles } from './styles';
import Topbar from './topbar';
import Content from './Content';
import Message from './Message';
import { useParams } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from '../../../hooks/reduxtoolkit';
import { GetSingleUserProfile } from '../../../features/auth/authReducer';
import { Createconversation, GetUsersMessageConversation } from '../../../features/conversation/conversationReducer';
import { GetSinglemessageDetails } from '../../../features/message/messageReducer';
import { clearmessage } from '../../../features/message/messageSlice';
import { clearconversation } from '../../../features/conversation/conversationSlice';

const Feed: React.FC = () => {
    const { id } = useParams()
    const messageurl: string = `${import.meta.env.VITE_API_BASE_URLS}/message`;
    const [message, setMessage] = React.useState<any>([])

    // console.log(id)
    const dispatch = useAppDispatch()
    // 
    const { conversationDetails } = useAppSelector(store => store.conversation)
    const { userInfo, token } = useAppSelector(store => store.auth)
    useEffect(() => {
        dispatch(clearmessage("any"))
        dispatch(clearconversation("any"))
    }, [])


    useEffect(() => {
        dispatch(Createconversation({ conversationData: { userId: id } }))
        dispatch(GetSingleUserProfile({ id }))
        dispatch(GetUsersMessageConversation({ receiverId: id }))
    }, [id, setMessage])

    const handleSingleMessageDetails = async () => {
        try {
            const config = {
                headers: {
                    authorization: `Bearer ${token}`,
                },
            };
            const response = await axios.get(
                `${import.meta.env.VITE_API_BASE_URLS}/message/${conversationDetails?.id}`,
                config
            )
            return setMessage(response.data.messages)

        } catch (err: any) {
            console.log(err)
        }
    }

    useEffect(() => {
        if (conversationDetails !== null) {

            // dispatch(GetSinglemessageDetails({ conversationId: conversationDetails?.id }))
            handleSingleMessageDetails()
        } else {
            dispatch(clearmessage("any"))
        }
    }, [conversationDetails, setMessage])

    // console.log(message)


    return (
        <ChatSectionStyles className="w-100 h-100">
            <div className="main_chat w-100 h-100">
                <Topbar />
                <Content setMessage={setMessage} message={message} />
                <Message setMessage={setMessage} message={message} />
            </div>
            {/* <div className="receiver_profile"></div> */}
        </ChatSectionStyles>
    )
}


export default Feed