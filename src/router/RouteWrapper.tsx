import React, { ReactNode } from 'react';
import Header from '../component/header';

interface RouteWrapperProps {
    is_blank: boolean;
    children: ReactNode;
}

const RouteWrapper: React.FC<RouteWrapperProps> = ({ is_blank, children }) => {
    console.log("wrpper", is_blank);

    return (
        <>
            {!is_blank && <Header />}
            {children}
        </>
    );
}

export default RouteWrapper;
