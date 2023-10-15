import React, { ReactNode } from 'react';
import Header from '../component/header';
import { Navigate, Route } from 'react-router';
import Footer from '../component/footer';

interface RouteWrapperProps {
    is_Blank: boolean;
    is_Private: boolean;
    children: ReactNode;
}

const RouteWrapper: React.FC<RouteWrapperProps> = ({ is_Blank, is_Private, children }) => {
    console.log("wrpper", is_Blank);
    const token = localStorage.getItem("token")

    //if suppose route is private then we will check does token is valid or not? if yes then we will render that component either send it to the login page
    if (is_Private) {
        if (!token) {
            <Route path="*" element={<Navigate to="/login" />} />
            return null;
        }
    }
    return (
        <>
            {!is_Blank && <Header />}
            {children}
            {!is_Blank && <Footer />}
        </>
    );
}

export default RouteWrapper;
