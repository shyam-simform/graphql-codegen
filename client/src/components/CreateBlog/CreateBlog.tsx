import { ChangeEvent, useState } from "react";
import { useAddNewBlogMutation } from "../../graphql";
import { useNavigate } from "react-router-dom";
import "./CreateBlog.css";
const CreateBlog = () => {
  const [create_blog, { data, loading, error }] = useAddNewBlogMutation();
  const [content, setContent] = useState<string>("");
  const [author, setAuthor] = useState<string>("");
  const navigate = useNavigate();
  async function handleSubmit(e: ChangeEvent<HTMLInputElement>) {
    e.preventDefault();
    create_blog({ variables: { content, author } });
    setContent("");
    setAuthor("");
    navigate("/");
  }
  return (
    <div className="login-box" onSubmit={handleSubmit}>
      <h2>Create Blog</h2>
      <form>
        <div className="user-box">
          <input
            type="text"
            value={author}
            required={true}
            onChange={(e) => setAuthor(e.target.value)}
          />
          <label>Author Name</label>
        </div>
        <div className="user-box">
          <textarea
            value={content}
            required={true}
            onChange={(e) => setContent(e.target.value)}
          />
          <label>Content</label>
        </div>

        <button type="submit">Add Blog</button>
      </form>
    </div>
  );
};

export default CreateBlog;
