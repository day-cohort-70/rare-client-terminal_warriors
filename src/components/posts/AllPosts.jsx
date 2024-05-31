import { useEffect, useState } from "react"
import { getAllPostsforAuthor } from "../../managers/PostsMangager"

export const AllPosts = ({currentUser}) => {
    const [posts, setPosts] = useState

    const getAllPosts = () => {
        getAllPostsforAuthor().then((postArray) => {
            setPosts(postArray)
        })
    }
    useEffect(() => {
        getAllPosts()
    }, [currentUser])

    return(
        <main>
            <h2>Posts</h2>
            <div className="fixed-grid has-5-cols">
                <div className="grid">
                    <div className="cell">Title</div>
                    <div className="cell">Author</div>
                    <div className="cell">Date</div>
                    <div className="cell">Category</div>
                    <div className="cell">Tags</div>
                    {posts.map(postObj => {
                        return (<>
                        <div className="cell">{postObj.title}</div>
                        <div className="cell">{postObj.author}</div>
                        <div className="cell">{postObj.date}</div>
                        </>)
                    })}
                </div>

            </div>
        </main>
    )
}