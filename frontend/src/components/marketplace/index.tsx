import React, { useEffect, useState } from "react";
import { FriendListStyles, HomeStyles } from "./styles";
import Top from "./top";
import FriendList from "./friendlist";
import { chatData } from "../../data/chatData";

const MarketPlace: React.FC = () => {
    const [registermodal, setRegisterModal] = useState<boolean>(false)

    return (
        <HomeStyles className="h-100">
            <Top />
            {/* <FriendListStyles>
            <div className="chatlistWrapper w-100 flex column">
                {
                    chatData.map((x?: any) => {
                        return <FriendList {...x} />
                    })
                }
            </div>
            </FriendListStyles> */}
        </HomeStyles>
    )
}



export default MarketPlace