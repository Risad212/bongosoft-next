import React from 'react';

const ErrorPage = () => {
    return (
        <>
          <div style={{display: 'flex', justifyContent: 'center', height: '80vh', flexDirection: 'column', alignItems: 'center'}}>
             <h2 style={{fontSize: '150px', fontWeight: '900'}}>404</h2>
             <p style={{fontSize: '30px',fontWeight: '500'}}>Page Not Found</p>
         </div> 
        </>
    );
};

export default ErrorPage;