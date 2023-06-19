import { NavLink } from "react-router-dom";
import "./Homepage.css";
import Blog from "../BlogList/Blog";
const Home = () => {
  return (
    <>
      <NavLink to="/create-blog">
        <button className="create-btn">Create Blog</button>
      </NavLink>
      <Blog />
    </>
  );
};

export default Home;
