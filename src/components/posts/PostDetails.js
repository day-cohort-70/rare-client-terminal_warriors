import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import { getPostDetails } from "../../managers/PostsMangager"

export const PostDetails = () => {
    const {postId} = useParams()
    const [postInfo, setPostInfo] = useState({})

    useEffect(() => {
        getPostDetails(postId).then(data => {
            setPostInfo(data)
        })
    }, [postId])

    return <div>{postInfo.content}</div>
}