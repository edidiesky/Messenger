import React from 'react';
import { SmallSidebarStyles } from './styles/feedbar';
import { sidebatlist } from '../../data/sidebar';
import { NavLink } from 'react-router-dom';
import { useAppSelector } from '../../hooks/reduxtoolkit';

const SmallSidebar: React.FC = () => {
    const { userInfo } = useAppSelector(store => store.auth)
    return (
        <SmallSidebarStyles className="w-100 h-100">
            <div style={{ padding: "10px 0" }} className="h-100 w-100 flex column item-center justify-space">
                <div className="flex column item-center justify-center w-100">
                    {
                        sidebatlist.map((x?: any) => {
                            return <NavLink
                                className="sidebar_icons flex item-center justify-center text-grey"
                                // activeClassName="active"
                                to={`/chat${x.path}/t/${userInfo?.id}`}
                                key={x.id}
                            >
                                {x.icons}
                            </NavLink>
                        })
                    }
                </div>
                <div className="flex column flex item-center justify-center w-100">
                    <img alt=""
                        width={0}
                        sizes="100vw"
                        height={0}
                        loading="lazy"
                        src={userInfo?.image}
                        
                        className=" avatar"

                    />
                </div>
            </div>
        </SmallSidebarStyles>
    )
}


export default SmallSidebar