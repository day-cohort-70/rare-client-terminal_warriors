import { useEffect, useState } from "react"
import { getAllMyPosts } from "../../managers/PostsMangager"

export const MyPosts = ({token}) => {
    const [posts, setPosts] = useState([])

    const getAllPosts = () => {
        getAllMyPosts(token).then((postArray) => {
            setPosts(postArray)
        })
    }
    useEffect(() => {
        getAllPosts()
    }, [])

    return(
        <main>
            <h2>My Posts</h2>
            <div className="fixed-grid has-5-cols">
                <div className="grid">
                    <div className="cell">Title</div>
                    <div className="cell">Author</div>
                    <div className="cell">Date</div>
                    <div className="cell">Category</div>
                    <div className="cell">Tags</div>
                    {posts.map(postObj => {
                        return (<>
                        <div className="cell"><Link to={`/post/${postObj.id}`}>{postObj.title}</Link></div>
                        <div className="cell">{postObj.author}</div>
                        <div className="cell">{postObj.publication_date}</div>
                        <div className="cell">{postObj.category_name}</div>
                        <div className="cell">{postObj.tags}</div>
                        </>)
                    })}
                </div>

            </div>
        </main>
    )
}