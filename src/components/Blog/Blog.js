import React from 'react';

const Blog = () => {
  const blogs = [
    {
      id: 1,
      title: "What is the purpose of React Router?",
      description: "",
    },
    {
      id: 2,
      title: "How does context API works?",
      description: "",
    },
    {
      id: 3,
      title: "What is useRef?",
      description: "",
    }
  ]
  return (
    <>
      <div className="container py-5">
        {
          blogs.map(blog =>
            <div className='single-blog p-3 p-md-4 shadow-lg mb-4 rounded' key={blog.id}>
              <h2>{blog.title}</h2>
              <div>
                {blog.description}
              </div>
            </div>
          )
        }
      </div>
    </>
  );
};

export default Blog;