import React from 'react';
import { LayoutPreLoaderStyles } from './styles/LayoutPreLoader';
import ContentLoader from 'react-content-loader'

const LayoutPreLoader: React.FC = () => {
    return (

        <>
            <LayoutPreLoaderStyles className="w-100">
                <div className="left">
                    <div className="left_small_sidebar w-100 py-1 flex column  h-100">
                       <div className="w-85 auto flex column gap-1">
                            <ContentLoader viewBox="0 0 100 650" width={'100%'}>
                                <rect x="0" y="0" rx="15" ry="15" width="100%" height="40" />
                                <rect x="0" y="50" rx="15" ry="15" width="100%" height="40" />
                                <rect x="0" y="100" rx="15" ry="15" width="100%" height="40" />
                                <rect x="0" y="150" rx="15" ry="15" width="100%" height="40" />
                            </ContentLoader>
                            
                       </div>
                    </div>
                    <div className="left_big_sidebar w-100 h-100">
                        <div className="w-90 py-1 auto">
                           <div className="w-90 auto">
                                <ContentLoader viewBox="0 0 100 650" width={'100%'}>
                                    {/* <rect x="0" y="0" rx="15" ry="15" width="100%" height="40" /> */}
                                    <rect x="0" y="0" rx="2" ry="2" width="25%" height="10" />

                                    <circle cx="76.5%" cy="5" r="5.2" />
                                    <circle cx="90.5%" cy="5" r="5.2" />

                                    <rect x="0" y="15" rx="5" ry="5" width="100%" height="10" />

                                    <circle cx="8%" cy="40" r="8" />

                                    <rect x="20" y="35" rx="2" ry="2" width="45%" height="5" />
                                    <rect x="20" y="42" rx="2.5" ry="2.5" width="70%" height="4" />

                                    <circle cx="8%" cy="60" r="8" />

                                    <rect x="20" y="55" rx="2" ry="2" width="45%" height="5" />
                                    <rect x="20" y="62" rx="2.5" ry="2.5" width="70%" height="4" />

                                    <circle cx="8%" cy="80" r="8" />

                                    <rect x="20" y="75" rx="2" ry="2" width="45%" height="5" />
                                    <rect x="20" y="82" rx="2.5" ry="2.5" width="70%" height="4" />

                                    <circle cx="8%" cy="100" r="8" />

                                    <rect x="20" y="95" rx="2" ry="2" width="45%" height="5" />
                                    <rect x="20" y="102" rx="2.5" ry="2.5" width="70%" height="4" />

                                    <circle cx="8%" cy="120" r="8" />

                                    <rect x="20" y="115" rx="2" ry="2" width="45%" height="5" />
                                    <rect x="20" y="122" rx="2.5" ry="2.5" width="70%" height="4" />

                                    <circle cx="8%" cy="140" r="8" />

                                    <rect x="20" y="135" rx="2" ry="2" width="45%" height="5" />
                                    <rect x="20" y="142" rx="2.5" ry="2.5" width="70%" height="4" />




                               </ContentLoader>
                           </div>
                        </div>
                    </div>
                </div>
                <div className="right h-100">
                </div>
                {/* <Outlet /> */}
            </LayoutPreLoaderStyles>
        </>
    )
}


export default LayoutPreLoader