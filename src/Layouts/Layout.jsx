import React from 'react';
import Footer from './Footer/Footer';
import Header from './Header/Header';
import { useRouter } from 'next/router';

const Layout = ({children}) => {
    const router = useRouter()
    return (
        <div>
          {router?.route !== '/404'? <Header />: ''}
           {children}
           {router?.route !== '/404'? <Footer />: ''}
        </div>
    );
};

export default Layout;