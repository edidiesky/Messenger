import React from 'react';
import { ContentStyles } from './styles/content';
import { useAppSelector } from '../../../hooks/reduxtoolkit';
import MessageList from './MessageList';
type ContentProps = {
    setMessage: (value: any) => void,
    message?: any
}
const Content: React.FC<ContentProps> = ({ setMessage, message }) => {
    const { userDetails } = useAppSelector(store => store.auth)

    return (
        <ContentStyles className="w-100">
            <div className="content_top w-100 flex item-center justify-center">
                <div className="w-100 flex item-center justify-center column gap-1">
                    <img
                        alt=""
                        width={0}
                        sizes="100vw"
                        height={0}
                        loading="lazy"
                        src={userDetails?.image}
                    />
                    <h4 className="fs-18 text-bold text-center">{userDetails?.name}
                        <span className="w-100 text-center fs-14 text-light block text-dark">You are now connected on Messenger</span>

                    </h4>
                </div>
            </div>
            <MessageList setMessage={setMessage} message={message} />
        </ContentStyles>
    )
}


export default Content