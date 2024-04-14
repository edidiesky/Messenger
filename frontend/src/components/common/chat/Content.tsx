import React from 'react';
import { ContentStyles } from './styles/content';
import { useAppSelector } from '../../../hooks/reduxtoolkit';
import MessageList from './MessageList';
type ContentProps = {
    setMessage: (value: any) => void,
    message?: any,
    
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
                    <h4 className="fs-16 text-bold flex column item-center justify-center">
                        {userDetails?.name}
                        <span className="w-[70%] auto text-center fs-12 text-light block text-grey">You're friends on Facebook
                            Lives in Port Harcourt
                            Technical Support Engineer at Cyberspace network ltd, Internshala Student Partner at Internshala and Chief executive officer at Uniuyo FEVER</span>
                    </h4>
                </div>
            </div>
            <MessageList setMessage={setMessage} message={message} setArrivalMessage={function (value: any): void {
                throw new Error('Function not implemented.');
            } } />
        </ContentStyles>
    )
}


export default Content