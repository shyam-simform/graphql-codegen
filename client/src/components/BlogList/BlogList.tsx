import { useQuery } from "@apollo/client";
import React, { useEffect, useState } from "react";
// import { GET_BLOGS } from "../../graphql/BlogList.queries";
// import { useGetAllBlogsQuery } from "../../graphql/generated/BlogList.generated";
import {Use}
const BlogList = () => {
  const [blogs, setBlogs] = useState<
    {
    //   __typename?: string | undefined;
      id: string;
      content: string;
      author: string;
    }[]
  >([]);
  //   const { loading, error, data, refetch } = useQuery(GET_BLOGS, {
  //     onCompleted: (data) => {
  //     console.log(data);
  //     setBlogs((prev) => {
  //       return [...data.getBlogs];
  //     });
  //     // setBlogs([...blogs, data?.data?.data?.newBlog]);
  //   },
  //   });
  const { loading, data, refetch } = useGetAllBlogsQuery({
    onCompleted: (data) => {
      setBlogs((prev) => {
        if (data.getBlogs) {
        //   return data.getBlogs.map(({ __typename, ...rest }) => {
        //     return rest;
        //   });
        return data.getBlogs.map((item) => {
            return {
                id:item.id,
                content:item.content,
                author:item.author
            }
          });
        }
        return [];
      });
    },
  });
  useEffect(() => {
    refetch();
  }, []);
  return (
    <div className="blog_posts">
      {blogs.map(({ id, content, author }) => {
        return (
          <div className="blog_post">
            <div className="container_copy">
              <h1>Author: {author}</h1>
              <p>{content}</p>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default BlogList;
