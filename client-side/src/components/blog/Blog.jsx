import React, { useState } from "react";
import blog1 from "../../assets/blog1.jpg";
import blog2 from "../../assets/blog2.jpg";
import BlogStories from "./BlogStories";

function Blog() {
  const [name, setName] = useState("");
  const [title, setTitle] = useState("");
  const [story, setStory] = useState("");
  const [data, setData] = useState([]);

  const handleSubmit = () => {
    console.log("Loading......");
    if (name && title && story) {
      const list = {
        name: name,
        title: title,
        body: story,
      };
      fetch("https://s59-most-embarrassing-moments-2.onrender.com/blog", {
        method: "post",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(list),
      })
        .then((res) => res.json())
        .then((res) => {
          console.log("Done");
          console.log(res);
          setData([...data, res]);
        })
        .catch((err) => console.log(err));
    } else {
      alert("Please fill in all fields before submitting.");
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

      <section className="create-box">
        <h2>Add your own story</h2>
        <h4>Let people know your name (You could put anonymous too !)</h4>
        <input
          type="text"
          placeholder="Your name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />
        <h4>Give a title to your embarrassing story</h4>
        <input
          type="text"
          placeholder="Enter title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          required
        />
        <h4>Write down your story</h4>
        <textarea
          placeholder="Tell us your story"
          cols="40"
          rows="15"
          value={story}
          onChange={(e) => setStory(e.target.value)}
          required
        ></textarea>
        <h5>time to add your post to our blog !</h5>
        <button type="submit" onClick={handleSubmit}>
          Add post
        </button>
      </section>
      <BlogStories data={data} setData={setData} />
    </>
  );
}

export default Blog;
