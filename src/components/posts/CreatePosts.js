// src/components/posts/CreatePosts.js
import { useState } from "react";
import { createPost } from "../../managers/PostsManager";

export const CreatePosts = () => {
    const [formData, setFormData] = useState({
        title: "",
        content: "",
        category_id: 1, // Example category ID
        image_url: "",
        publication_date: new Date().toISOString().split("T")[0]
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: name === 'category_id' ? parseInt(value) : value
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const post = {
            ...formData,
            user_id: 1, // Example user ID
            approved: true // Assuming posts are approved by default
        };
        createPost(post)
            .then(() => console.log("Post created successfully"))
            .catch(error => console.error("Error creating post:", error));
    };

    const formFields = [
        { label: "Title", name: "title", type: "text" },
        { label: "Content", name: "content", type: "textarea" },
        { label: "Category ID", name: "category_id", type: "number" },
        { label: "Image URL", name: "image_url", type: "text" },
        { label: "Publication Date", name: "publication_date", type: "date" }
    ];

    return (
        <form onSubmit={handleSubmit}>
            <h2>Create New Post</h2>
            {formFields.map(({ label, name, type }) => (
                <div key={name}>
                    <label>{label}:</label>
                    {type === "textarea" ? (
                        <textarea name={name} value={formData[name]} onChange={handleChange} required />
                    ) : (
                        <input type={type} name={name} value={formData[name]} onChange={handleChange} required />
                    )}
                </div>
            ))}
            <button type="submit">Create Post</button>
        </form>
    );
};
