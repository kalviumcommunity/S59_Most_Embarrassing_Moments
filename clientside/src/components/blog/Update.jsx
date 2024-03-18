import React, { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "../../../node_modules/react-toastify/dist/ReactToastify.css";

export default function Update({
  name: i_name,
  title: i_title,
  story: i_story,
  setUpdate,
  updatePost,
  setUpdatePost,
}) {
  const [name, setName] = useState(i_name);
  const [title, setTitle] = useState(i_title);
  const [story, setStory] = useState(i_story);

  //   console.log(i_name);

  const confirmupdatepost = () => {
    let list = {
      name: name,
      title: title,
      body: story,
    };

    if (name && title && story) {
      fetch(
        `${import.meta.env.VITE_URI}/blog/${updatePost}`,
        {
          method: "PATCH",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(list),
        }
      )
        .then((res) => {
          if (res.ok) return res.json();
          else toast.error("There was an unidentified error");
        })
        .then((new_val) => {
          console.log(new_val);
          setUpdatePost(new_val._id);
          setName(new_val.name);
          setTitle(new_val.title);
          setStory(new_val.body);
          toast.success("Your data has been updated");
          setUpdate(false);
        })
        .catch((err) => {
          toast.error("There was an error while updating");
        });
    } else {
      toast.error("You can't leave any empty field(s) !");
    }
  };

  const cancelupdatepost = () => {
    toast.info("Your post wasn't updated");
    setUpdatePost(null);
    setUpdate(false);
  };

  return (
    <>
      <div id="parent-update">
        <div id="update">
          <h3>Enter name</h3>
          <input
            type="text"
            value={name}
            placeholder="Enter a name"
            onChange={(e) => setName(e.target.value)}
          />
          <h3>Enter title</h3>
          <input
            type="text"
            value={title}
            placeholder="Give a title"
            onChange={(e) => setTitle(e.target.value)}
          />
          <h3>Share your story</h3>
          <textarea
            type="text"
            placeholder="Write your story"
            value={story}
            onChange={(e) => setStory(e.target.value)}
          />{" "}
          <br />
          <button onClick={confirmupdatepost}>Confirm</button>
          <button onClick={cancelupdatepost}>Cancel</button>
        </div>
      </div>
      {/* <ToastContainer /> */}
    </>
  );
}
