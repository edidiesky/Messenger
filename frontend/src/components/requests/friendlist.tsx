import React, { useEffect, useState } from "react";

const FriendList: React.FC<{ id: number, image?: string, name?: string }> = ({
    id, image, name
}) => {
    const [registermodal, setRegisterModal] = useState<boolean>(false)
    const [tab, setTab] = React.useState(0);

    return (
        
            <div
                onClick={() => setTab(id)}
                className={
                    tab === id
                        ? "w-90 auto listCard flex item-center justify-space active"
                        : "w-90 auto listCard flex item-center justify-space"
                }
                key={id}
            >
                <div className="cardRight flex item-center gap-1">
                    <img src="https://z-p3-scontent.fphc2-2.fna.fbcdn.net/v/t39.30808-1/375055881_678003974265557_2291040210983567517_n.jpg?stp=c16.0.100.100a_dst-jpg_p100x100&_nc_cat=110&ccb=1-7&_nc_sid=5f2048&_nc_eui2=AeHhGdSkXGL1pCyDnbWqdRZO33V-aZOuAS7fdX5pk64BLqoc332rk5gUtPTTetZDzk1LyevzaQCb3eesod9Jt1Pf&_nc_ohc=ump9fQZLoygAX_nmLx4&_nc_ht=z-p3-scontent.fphc2-2.fna&oh=00_AfD3SkwwdlmMXpOLBleixY_Eg7unLaxkFs6vYY6DBySw0w&oe=653BDCEF"
                        alt="" className="avatar" />
                    <h5
                        className={"flex text-light flex-1 column text-dark"}
                        style={{ gap: ".2rem" }}
                    >
                    <span className="text-bold">{name}</span>
                    <span className="text-light fs-14 span"> Hello My good friend...</span>
                    </h5>
                </div>
            </div>
    )
}



export default FriendList