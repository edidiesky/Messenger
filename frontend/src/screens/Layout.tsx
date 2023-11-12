import React, { useEffect } from 'react';
import { Outlet } from "react-router-dom";
import { LayoutStyles, MainLayoutStyles } from './styles/layout';
import SmallSidebar from '../components/common/smallsidebar';
import Feed from '../components/common/chat';
import LayoutPreLoader from './LayoutPreLoader';

const LayoutIndex: React.FC = () => {
    const [activeloader, setActiveLoader] = React.useState(true)

    useEffect(() => {
        const timeout = setTimeout(() => {
            setActiveLoader(false);
        }, 7000);
        return () => clearTimeout(timeout);
    }, [setActiveLoader]);

    return (

        <>
            <MainLayoutStyles>
                <div className="large_container_layout">

                    {
                        activeloader ? <LayoutPreLoader /> :
                            <LayoutStyles className="w-100">
                                <div className="left">
                                    <div className="left_small_sidebar h-100">
                                        <SmallSidebar />
                                    </div>
                                    <div className="left_big_sidebar h-100">
                                        <Outlet />
                                    </div>
                                </div>
                                <div className="right h-100">
                                    <Feed />
                                </div>
                                {/* <Outlet /> */}
                            </LayoutStyles>
                    }
                </div>
                <div className="small_container_layout">
                    
                </div>
            </MainLayoutStyles>
        
          
        </>
    )
}


export default LayoutIndex