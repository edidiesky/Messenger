import React, { useEffect, useState } from "react";
import { BsSearch } from "react-icons/bs";
import { RiVideoAddFill } from "react-icons/ri";
import { TopStyles } from "./styles";
import VideoIcon from "../../assets/svg/video";

const Top: React.FC = () => {
    const [registermodal, setRegisterModal] = useState<boolean>(false)

    return (
        <TopStyles>
            <div className="w-90 auto flex column gap-1">
                <div className="flex item-center justify-space w-90 auto">
                    <h4 className="fs-24 py-1 text-dark text-extra-bold">
                        Marketplace chats
                   </h4>

                </div>
            </div>
        </TopStyles>
    )
}



export default Top