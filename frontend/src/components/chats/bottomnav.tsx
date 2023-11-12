import React from 'react';
import { SmallSidebarStyles } from './styles/feedbar';
import { sidebatlist } from '../../data/sidebar';
import { NavLink } from 'react-router-dom';
import { useAppSelector } from '../../hooks/reduxtoolkit';

const BottomNav: React.FC = () => {
    const { userInfo } = useAppSelector(store => store.auth)
    return (
        <SmallSidebarStyles>
                <div className="flex item-center justify-center w-90 auto">
                    {
                        sidebatlist.map((x?: any) => {
                            return <NavLink
                                className="sidebar_icons flex item-center justify-center text-grey"
                                activeClassName="active"
                                to={`/chat${x.path}/t/${userInfo?.id}`}
                                key={x.id}
                            >
                                {x.icons}
                            </NavLink>
                        })
                    }
                </div>
        </SmallSidebarStyles>
    )
}


export default BottomNav