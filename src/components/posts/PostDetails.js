import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import { getPostDetails } from "../../managers/PostsManager"

export const PostDetails = () => {
    const {postId} = useParams()
    const [postInfo, setPostInfo] = useState({})

    useEffect(() => {
        getPostDetails(postId).then(data => {
            setPostInfo(data)
        })
    }, [postId])

    return <div>
        <h2>{postInfo.title}</h2>
        <div>{postInfo.category_name}</div>
        <img src={postInfo.image_url}/>
        <div>{postInfo.tags}</div>
        <div>By {postInfo.author}</div>
        <div>{postInfo.content}</div>
    </div>
}

/* 
for future reference, postInfo looks something like this:

{
    "id": 3,
    "user_id": 4,
    "title": "Cooking Recipe",
    "publication_date": "2023-05-15",
    "author": "Michael Johnson",
    "category_name": "Travel",
    "image_url": "https://example.com/image3.jpg",
    "content": "Here is a recipe for a delicious pasta dish.",
    "tags": [
        "Travel",
        "Fashion"
    ]
}
*/