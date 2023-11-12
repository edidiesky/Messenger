import React from 'react';
import { FeedbarStyles } from './styles/feedbar';
import { chatData } from '../../data/chatData';

const FeedBar: React.FC = () => {
    const [tab, setTab] = React.useState(0);

    return (
        <FeedbarStyles className="w-100">
            <div className="w-100 flex column chatlistWrapper">
                {chatData.map((x?:any) => {
                    return (
                        <div
                            onClick={() => setTab(x.id)}
                            className={
                                tab === x.id
                                    ? "w-90 auto listCard flex item-center justify-space active"
                                    : "w-90 auto listCard flex item-center justify-space"
                            }
                            key={x.id}
                        >
                            <div className="cardRight w-100 flex item-center gap-2">
                                <img src={x.image} alt="" className="avatar" />
                                <h5
                                    className={"fs-14 flex flex-1 column text-bold text-dark"}
                                    style={{ gap: ".4rem" }}
                                >
                                    {x.name}
                                    <div className="span block family1 text-light text-grey">
                                        You are now connected on Messeng...
                                    </div>
                                </h5>
                            </div>
                        </div>
                    );
                })}
            </div>
        </FeedbarStyles>
    )
}


export default FeedBar