import React, { useState } from "react";
import blog1 from "../../assets/blog1.jpg";
import blog2 from "../../assets/blog2.jpg";
import BlogStories from "./BlogStories";
import { ToastContainer, toast } from "react-toastify";
import "../../../node_modules/react-toastify/dist/ReactToastify.css";

function Blog() {
  var [name, setName] = useState("");
  var [title, setTitle] = useState("");
  var [story, setStory] = useState("");
  var [data, setData] = useState([]);

  const [select, setSelect] = useState("All");

  const handleSubmit = () => {
    if (name && title && story) {
      const list = {
        name: name,
        title: title,
        body: story,
      };
      // http://localhost:3000/blog
      // https://s59-most-embarrassing-moments-2.onrender.com/blog
      fetch("https://s59-most-embarrassing-moments-2.onrender.com/blog", {
        method: "post",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(list),
      })
        .then((res) => res.json())
        .then((res) => {
          // console.log(res);
          setData([...data, res]);
          toast.success("Your post is now live !");
          setName("");
          setTitle("");
          setStory("");
        })
        .catch((err) => {
          console.log(err);
          toast.error("There was an error while posting");
        });
    } else {
      toast.error("Please fill in all fields !");
    }
  };

  return (
    <>
      <section id="blog-intro">
        <div>
          <img src={blog1} alt="" />
        </div>
        <div>
          <h1>Have some embarrassing moments to share ?</h1>
          <h3>then this is the right place for you 🤪</h3>
        </div>
        <div>
          <img src={blog2} alt="" />
        </div>
      </section>

      <section className="create-box" id="scroll-top">
        <h2>Add your own story</h2>
        <h4>Let people know your name (You could put anonymous too !)</h4>
        <input
          type="text"
          placeholder="Your name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
          className="to-empty"
        />
        <h4>Give a title to your embarrassing story</h4>
        <input
          type="text"
          placeholder="Enter title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          required
          className="to-empty"
        />
        <h4>Write down your story</h4>
        <textarea
          placeholder="Tell us your story"
          value={story}
          onChange={(e) => setStory(e.target.value)}
          required
          className="to-empty"
        ></textarea>
        <h5>time to add your post to our blog !</h5>
        <button type="submit" onClick={handleSubmit}>
          Add post
        </button>
      </section>

      <h4 id="choose">Choose a name to filter data !</h4>
      <div id="select">
        <select name="" id="" onChange={(e) => setSelect(e.target.value)}>
          <option value="All">All</option>
          {[...new Set(data.map((e) => e.name))].map((name) => (
            <option value={name} key={name}>
              {name}
            </option>
          ))}
        </select>
      </div>

      <BlogStories data={data} setData={setData} select={select} />
      {/* {console.log(send_name)} */}
      <ToastContainer />
    </>
  );
}

export default Blog;