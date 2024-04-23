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
import UserProfileSidebar from './UserProfileSidebar';
import MyAnimatePresence from '../../../utils/AnimatePresence';

const Feed: React.FC = () => {
    const { id } = useParams()
    const messageurl: string = `${import.meta.env.VITE_API_BASE_URLS}/message`;
    const [message, setMessage] = React.useState<any>([])
    const [arrivalmessage, setArrivalMessage] = React.useState<any>({});
    const [sidebar, setSidebar] = React.useState<boolean>(false)

    // console.log(id)
    const dispatch = useAppDispatch()
    // 
    const { conversationDetails } = useAppSelector((store: { conversation: any; }) => store.conversation)
    const { userInfo, token } = useAppSelector(store => store.auth)

    useEffect(() => {
        setMessage([])
        dispatch(clearconversation("any"))
    }, [])

    useEffect(() => {
        if (!conversationDetails) {
            dispatch(Createconversation({ conversationData: { userId: id } }))
        }
    }, [conversationDetails])


    useEffect(() => {
        // if(id) {
        //     dispatch(Createconversation({ conversationData: { userId: id } }))
        //     dispatch(GetSingleUserProfile({ id }))
        //     dispatch(GetUsersMessageConversation({ receiverId: id }))
        // }

        dispatch(GetSingleUserProfile({ id }))
        dispatch(GetUsersMessageConversation({ receiverId: id }))
        // dispatch(Createconversation({ conversationData: { userId: id } }))

    }, [id])

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
            setMessage(response.data.messages)
            // setMessage(response.data.messages)

        } catch (err: any) {
            console.log(err)
        }
    }

    useEffect(() => {
        if (conversationDetails) {
            handleSingleMessageDetails()
        } else {
            setMessage([])
        }

    }, [setMessage, conversationDetails])

    // console.log(message)

    // console.log(conversationDetails)


    return (
        <ChatSectionStyles className="w-100 h-100 flex">
            <div className="main_chat w-100 h-100">
                <Topbar
                    setSidebar={setSidebar}
                    sidebar={sidebar}
                />
                <Content setMessage={setMessage} message={message} />
                <Message handleSingleMessageDetails={handleSingleMessageDetails} setArrivalMessage={setArrivalMessage} arrivalmessage={arrivalmessage} setMessage={setMessage} message={message} />
            </div>
            <MyAnimatePresence>
                {sidebar && <UserProfileSidebar sidebar={sidebar} />}
            </MyAnimatePresence>

            {/* <div className="receiver_profile"></div> */}
        </ChatSectionStyles>
    )
}


export default Feed