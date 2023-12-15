// eslint-disable-next-line no-unused-vars
import React from 'react';
import Header from '../../components/Header/Header';
import { Outlet } from 'react-router-dom';

const Main = () => {
    return (
        <div>
            <Header/>

            <Outlet/>
        </div>
    );
};

export default Main;