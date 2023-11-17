import React, { useEffect } from 'react';
import io from 'socket.io-client';
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
  
    const [socket, setSocket] = React.useState('')

    // console.log(id)
    const dispatch = useAppDispatch()
    // 
    const { conversationDetails } = useAppSelector(store => store.conversation)
    const { userInfo } = useAppSelector(store => store.auth)
    useEffect(() => {
        dispatch(clearmessage("any"))
        dispatch(clearconversation("any"))
    }, [])


    useEffect(() => {
        dispatch(Createconversation({ conversationData: { userId: id } }))
        dispatch(GetSingleUserProfile({ id }))
        dispatch(GetUsersMessageConversation({ receiverId: id }))
    }, [id])

    useEffect(() => {
        if (conversationDetails !== null) {

            dispatch(GetSinglemessageDetails({ conversationId: conversationDetails?.id }))
        } else {
            dispatch(clearmessage("any"))
        }
    }, [conversationDetails])


    return (
        <ChatSectionStyles className="w-100 h-100">
            <div className="main_chat w-100 h-100">
                <Topbar />
                <Content />
                <Message />
            </div>
            {/* <div className="receiver_profile"></div> */}
        </ChatSectionStyles>
    )
}


export default Feed