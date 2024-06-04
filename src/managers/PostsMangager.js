export const getAllPostsforAuthor = () => {
    return fetch(`http://localhost:8000/posts`).then((res)=>
    res.json())
}

export const getAllMyPosts = (id) => {
    return fetch(`http://localhost:8000/posts?authorId=${id}`).then((res)=>
    res.json())
}