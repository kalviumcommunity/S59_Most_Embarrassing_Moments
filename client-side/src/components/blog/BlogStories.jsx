import React, { useEffect, useState } from 'react'

export default function BlogStories() {
    const [data, setData] = useState([])

    useEffect(() => {
        fetch("https://s59-most-embarrassing-moments-2.onrender.com/blog")
        .then((res) => res.json())
        .then((res) => {
            console.log(res)
            setData(res)
        })
        .catch((err) => console.log(err))
    }, [])

  return (
    <div>BlogStories</div>
  )
}
