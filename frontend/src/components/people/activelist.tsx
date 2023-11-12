import React, { useEffect, useState } from "react";

const ActiveList: React.FC<{ id: number, image?: string, name?: string }> = ({
    id, image, name
}) => {
    const [registermodal, setRegisterModal] = useState<boolean>(false)
    const [tab, setTab] = React.useState(0);

    return (

        <div
            onClick={() => setTab(id)}
            className={
                tab === id
                    ? "listCard flex item-center justify-space active"
                    : "listCard flex item-center justify-space"
            }
            key={id}
        >
            <div className="cardRight flex item-center gap-1">
                <div className="image_wrapper">
                    <img 
                    src={image}
                    alt="" className="avatar" />
                    <div className="active_tab"></div>
                </div>

                <h5
                    className={"flex text-light flex-1 column text-dark"}
                    style={{ gap: ".2rem" }}
                >
                    <span className="text-light">{name}</span>
                </h5>
            </div>
        </div>
    )
}



export default ActiveList