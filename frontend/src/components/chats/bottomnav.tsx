import React from 'react';
import { SmallSidebarStyles } from './styles/feedbar';
import { smallSidebatlist } from '../../data/sidebar';
import { NavLink } from 'react-router-dom';
import { useAppSelector } from '../../hooks/reduxtoolkit';

const BottomNav: React.FC = () => {
    const { userInfo } = useAppSelector(store => store.auth)
    return (
        <SmallSidebarStyles>
                <div className="flex item-center h-100 justify-center w-90 auto">
                    {
                        smallSidebatlist.map((x?: any) => {
                            return <NavLink
                            // style={{gap:"7px"}}
                                className="sidebar_icons flex item-center justify-center column text-grey"
                                activeClassName="active"
                                to={`/chat${x.path}/t/${userInfo?.id}`}
                                key={x.id}
                            >
                                {x.icons}
                                <span className="fs-14 text-grey">{x.text}</span>
                            </NavLink>
                        })
                    }
                </div>
        </SmallSidebarStyles>
    )
}


export default BottomNav