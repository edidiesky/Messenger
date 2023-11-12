import React, { useEffect, useState } from "react";
import { TopStyles } from "./styles";
import PenIcon from "../../assets/svg/pen";

const Top: React.FC = () => {
    const [registermodal, setRegisterModal] = useState<boolean>(false)

    return (
        <TopStyles>
            <div className="w-90 auto flex column">
                <div className="flex py-1 item-center justify-space w-90 auto">
                    <h4 className="fs-24 text-dark text-extra-bold">
                        Requests
                   </h4>
                    <div className="icon flex item-center justify-center">
                        <PenIcon />
                    </div>
                </div>
                <div className="flex w-90 auto column gap-1">
                    <h5 style={{lineHeight:"1.3"}} className="fs-12 text-light text-grey">
                        Open a request to get info about who's messaging you. They won't know you've seen it until you reply.
                    </h5>
                </div>
            </div>
        </TopStyles>
    )
}



export default Top