import React, { useEffect, useState } from "react";
import { FriendListStyles, HomeStyles } from "./styles";
import Top from "./top";
import ActiveList from "./activelist";
import { chatData } from "../../data/chatData";

const People: React.FC = () => {
    const [registermodal, setRegisterModal] = useState<boolean>(false)

    return (
        <HomeStyles className="h-100">
            <Top />
            <FriendListStyles>
                <div className="chatlistWrapper w-100 flex column">
                    {
                        chatData.slice(0,4).map((x?: any) => {
                            return <ActiveList {...x} />
                        })
                    }
                </div>
            </FriendListStyles>
        </HomeStyles>
    )
}



export default People