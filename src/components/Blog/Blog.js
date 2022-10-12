import React from 'react';
import { useLoaderData } from 'react-router-dom';

const Blog = () => {
  const blogs = useLoaderData()
  return (
    <>
      <div className="container">
        <h2 className='my-4 text-center shadow-sm py-3 rounded'>Our Blogs</h2>
        {
          blogs.map(blog =>
            <div className='single-blog p-3 p-md-4 shadow mb-4 rounded' key={blog.id}>
              {blog.thumbnail && <img className='img-fluid rounded' src={blog.thumbnail} alt={blog.title} />}
              <h2 className='pt-4 pb-2'>{blog.title}</h2>
              <div dangerouslySetInnerHTML={{ __html: blog.description }}></div>
            </div>
          )
        }
      </div>
    </>
  );
};

export default Blog;