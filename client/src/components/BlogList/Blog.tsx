import { useEffect, useState } from "react";
import { useBlogStreamSubscription, useGetAllBlogsQuery } from "../../graphql";
import "./Blog.css";
type BlogContentType = {
  id: string;
  content: string;
  author: string;
};
const Blog = () => {
  const [blogs, setBlogs] = useState<BlogContentType[]>([]);
  //   const { loading, error, data, refetch } = useQuery(GET_BLOGS, {
  //     onCompleted: (data) => {
  //     console.log(data);
  //     setBlogs((prev) => {
  //       return [...data.getBlogs];
  //     });
  //     // setBlogs([...blogs, data?.data?.data?.newBlog]);
  //   },
  //   });
  const { refetch } = useGetAllBlogsQuery({
    onCompleted: (data) => {
      setBlogs((prev) => {
        if (data.getBlogs) {
          //   return data.getBlogs.map(({ __typename, ...rest }) => {
          //     return rest;
          //   });
          return data.getBlogs.map((item) => {
            return {
              id: item.id,
              content: item.content,
              author: item.author,
            };
          });
        }
        return [];
      });
    },
  });

  const { data: data_ws } = useBlogStreamSubscription({
    onData: (data) => {
      console.log("inside onData");
      console.log(data);
      if (data?.data.data?.newBlog?.author) {
        setBlogs([...blogs, data?.data?.data?.newBlog]);
      }
    },
  });
  useEffect(() => {
    refetch();
  }, [refetch]);
  return (
    <div className="blog_posts">
      {blogs.map(({ id, content, author }) => {
        return (
          <div key={id} className="blog_post">
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

export default Blog;
