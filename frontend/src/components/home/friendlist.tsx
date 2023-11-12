import React, { useEffect, useState } from "react";
import { NavLink } from 'react-router-dom';
import { BsThreeDots } from "react-icons/bs";

const FriendList: React.FC<{ id: number, image?: string, name?: string }> = ({
    id, image, name
}) => {
    const [registermodal, setRegisterModal] = useState<boolean>(false)
    const [tab, setTab] = React.useState(0);

    return (

        <NavLink
            activeClassName="active"
            to={`/chat/t/${id}`}
            onClick={() => setTab(id)}
            className={"w-90 auto listCard flex item-center justify-space"
            }
            key={id}
        >
            <div className="list_nav text-dark fs-18 flex item-center justify-center">
                <BsThreeDots />
            </div>
            <div className="cardRight w-100 flex item-center gap-1">
                <img src={image} alt="" className="avatar" />
                <h5
                    className={"flex text-light flex-1 column text-dark"}
                    style={{ gap: ".2rem" }}
                >
                    <span className="text-bold">{name}</span>
                    <div className="span block w-100 fs-10 text-light text-grey">
                        You are now connected on Messenger ...
                    </div>
                </h5>
            </div>
        </NavLink>
    )
}



export default FriendList