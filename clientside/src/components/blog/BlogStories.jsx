import React, { useEffect, useState } from "react";
import user from "../../assets/user.png";
import bin from "../../assets/bin.png";
import edit from "../../assets/edit.png";
import { ToastContainer, toast } from "react-toastify";
import "../../../node_modules/react-toastify/dist/ReactToastify.css";
import Confirm from "./Confirm";
import Update from "./Update";

export default function BlogStories({
  data,
  setData,
  name,
  title,
  story,
  select,
}) {
  const [confirm, setConfirm] = useState(false);
  const [deletePost, setDeletePost] = useState(null);
  const [update, setUpdate] = useState(false);
  const [updatePost, setUpdatePost] = useState(null);

  useEffect(() => {
    fetch(`${import.meta.env.VITE_URI}/blog`)
      .then((res) => res.json())
      .then((res) => setData(res))
      .catch(() => toast.error("Could not get the data !"));
  }, [setData, setUpdate, data, setUpdatePost]);

  // console.log(data);

  const handleupdatepost = (id) => {
    setUpdate(true);
    setUpdatePost(id);
  };

  const handledeletePost = (id) => {
    setConfirm(true);
    setDeletePost(id);
  };

  const canceldeletePost = () => {
    toast.info("Your post wasn't deleted");
    setConfirm(false);
    setDeletePost(null);
  };

  const confirmdeletePost = () => {
    fetch(
      `${import.meta.env.VITE_URI}/blog/${deletePost}`,
      {
        method: "DELETE",
      }
    )
      .then((res) => {
        if (res.ok) {
          toast.info("Your post was deleted");
          setData(data.filter((e) => e._id !== deletePost));
          setConfirm(false);
        } else {
          toast.error("There was an error while deleting");
        }
      })
      .catch((err) => {
        toast.error("Could not delete your post");
      });
  };

  let filteredlist = data.filter((e) => {
    if (select == "All") {
      return true;
    } else {
      return e.name == select;
    }
  });

  return (
    <>
      {update && (
        <Update
          name={name}
          title={title}
          story={story}
          setUpdate={setUpdate}
          updatePost={updatePost}
          setUpdatePost={setUpdatePost}
        />
      )}

      <div id="parent-stories">
        {filteredlist
          .slice()
          .reverse()
          .map((e) => (
            <div key={e._id} className="post">
              <span>
                <img src={user} alt="" />
                <h3>{e.name}</h3>
              </span>
              <h4>{e.title}</h4>
              <h4>{e.body}</h4>
              <div className="buttons">
                <div onClick={() => handleupdatepost(e._id)}>
                  <img src={edit} alt="" />
                </div>
                <div onClick={() => handledeletePost(e._id)}>
                  <img src={bin} alt="" />
                </div>
              </div>
            </div>
          ))}
      </div>
      
      {confirm && (
        <Confirm
          message="Are you sure you want to delete this post?"
          onConfirm={confirmdeletePost}
          onCancel={canceldeletePost}
        />
      )}
    </>
  );
}



