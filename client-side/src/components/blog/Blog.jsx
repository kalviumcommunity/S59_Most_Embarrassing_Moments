import React from "react";
import blog1 from "../../assets/blog1.jpg"
import blog2 from "../../assets/blog2.jpg"
import BlogStories from "./BlogStories";

function Blog() {
  return (
    <>
      <section id="blog-intro">
        <div><img src={blog1} alt="" /></div>
        <div>
            <h1>Have some embarrassing moments to share ?</h1>
            <h3>then this is the right place for you 🤪</h3>
        </div>
        <div><img src={blog2} alt="" /></div>
      </section>

      <section className="create-box">
        <h2>Add your own story</h2>
        <h4>Let people know your name (Could be anonymous too !)</h4>
        <input type="text" placeholder="Your name" required/>
        <h4>Give a title to your embarrassing story</h4>
        <input type="text" placeholder="Enter title" required/>
        <h4>Write down your story</h4>
        <textarea placeholder="Time to share a good laugh" cols="40" rows="15" required></textarea>
        <h4>Time to add your post to our blog !</h4>
        <button>Add post</button>
      </section>
      <BlogStories/>
    </>
  );
}

export default Blog;
