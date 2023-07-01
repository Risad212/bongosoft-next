import Blog_Comment from '@/Components/BlogComment/Blog_Comment';
import Blog_Sidebar from '@/Components/BlogSidebar/Blog_Sidebar';
import Blog_Page_Details_Head from '@/Components/Blog_Page_Details_Content/Blog_Page_Details_Head';
import React from 'react';


const chrome_top_ten_extensions_details = () => {
    return (
        <>
          <section style={{padding: '80px 0'}}>
            <div className="container">
               <div className="row">
                  <div className="col-lg-9">
                   <Blog_Page_Details_Head />
                     <h1>hello</h1>
                   <Blog_Comment />
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

export default chrome_top_ten_extensions_details;


