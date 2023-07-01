import React from 'react';
import layout from './layout.module.css';
import Blog_Sidebar from '@/Components/BlogSidebar/Blog_Sidebar';


const Blog_Page_Details_Layout = () => {
   return (
      <>
         <section style={{padding: '80px 0'}}>
            <div className="container">
               <div className="row">
                  <div className="col-lg-9">
                     <h2>Blog content</h2>
                  </div>
                  <div className="col-lg-3 col-md-4 col-sm-12">
                     <Blog_Sidebar />
                  </div>
               </div>
            </div>
         </section>
      </>
   )
};

export default Blog_Page_Details_Layout;