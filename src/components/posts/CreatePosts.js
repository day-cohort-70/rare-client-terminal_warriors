// src/components/posts/CreatePosts.js
import { useState, useEffect } from "react";
import { createPost } from "../../managers/PostsManager";
import { listCategories } from "../../managers/CategoryManager";

export const CreatePosts = () => {
    const [formData, setFormData] = useState({
        title: "",
        content: "",
        category_id: "",
        image_url: "",
        publication_date: new Date().toISOString().split("T")[0]
    });
    const [categories, setCategories] = useState([]);

    useEffect(() => {
        listCategories().then(setCategories);
    }, []);

    const handleChange = ({ target: { name, value } }) => {
        setFormData(prev => ({
            ...prev,
            [name]: name === 'category_id' ? parseInt(value) : value
        }));
    };

    const handleSubmit = e => {
        e.preventDefault();
        createPost({ ...formData, user_id: 1, approved: true })
            .then(() => console.log("Post created successfully"))
            .catch(error => console.error("Error creating post:", error));
    };

    return (
        <form onSubmit={handleSubmit}>
            <h2>Create New Post</h2>
            {["title", "content", "image_url", "publication_date"].map(name => (
                <div key={name}>
                    <label>{name.replace('_', ' ')}:</label>
                    {name === "content" ? (
                        <textarea name={name} value={formData[name]} onChange={handleChange} required />
                    ) : (
                        <input
                            type={name === "publication_date" ? "date" : "text"}
                            name={name}
                            value={formData[name]}
                            onChange={handleChange}
                            required
                        />
                    )}
                </div>
            ))}
            <div>
                <label>Category:</label>
                <select name="category_id" value={formData.category_id} onChange={handleChange} required>
                    <option value="">Select a category</option>
                    {categories.map(({ id, label }) => (
                        <option key={id} value={id}>{label}</option>
                    ))}
                </select>
            </div>
            <button type="submit">Create Post</button>
        </form>
    );
};
