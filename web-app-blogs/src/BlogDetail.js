import React, { useState, useEffect } from "react";
import {arrBlogs} from './Constant';
import "./App.css";

function BlogDetail(props) {

  const [blogDetail, setBlogDetail] = useState({});

  useEffect(() => {
    const blogID = parseInt(props.match.params.blogid);
    const index = arrBlogs.findIndex((blog) => blog.blogID === blogID);
    if (index !== -1){
      setBlogDetail(arrBlogs[index])
    }
  }, []);

  
  return (
    <div className="container mt-5">
      <div className="row">
        <div className="card">
          {
            Object.keys(blogDetail).length > 0 && <>
            <p>{`#${blogDetail.blogID}`}</p>
            <p>{blogDetail.blogName}</p>
            <p>{blogDetail.blogDetail}</p>
            <p>{blogDetail.blogURL}</p>
            </>
          }
          {
            Object.keys(blogDetail).length === 0 && 
            <p>We're sorry, Cound't find Blog</p>
          }
        </div>
      </div>
    </div>
  );
}

export default BlogDetail;
