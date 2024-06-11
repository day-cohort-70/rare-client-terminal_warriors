// src/managers/PostsManager.js

// Function to fetch all approved posts
export const getAllPostsforAuthor = () => {
    return fetch("http://localhost:8000/posts")
        .then(res => res.json());
};

// Function to fetch posts by user ID
export const getAllMyPosts = (id) => {
    return fetch(`http://localhost:8000/posts?user_id=${id}`)
        .then(res => res.json());
};

// Function to create a new post
export const createPost = (post) => {
    return fetch("http://localhost:8000/posts", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(post)
    })
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            return response.json();
        });
};
export const getPostDetails = (id) => {
    return fetch(`http://localhost:8000/posts/${id}`).then((res)=>
        res.json())
}