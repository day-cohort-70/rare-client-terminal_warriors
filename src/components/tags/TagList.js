// src/components/tags/TagList.js
import { useState, useEffect } from "react"
import { deleteTag, listTags } from "../../managers/TagManager.js"
import { Link, useNavigate } from "react-router-dom"

export const TagList = () => {
    const navigate = useNavigate()
    const [tags, setTags] = useState([])

    useEffect(() => {
        listTags().then(setTags)
    }, [])

    const handleDelete = async (id) => {
        await deleteTag(id)
        await listTags().then(setTags)
    }

    return (
        <section className="section">
            <div className="container">
                <h2 className="title is-1 has-text-black has-text-centered">Tags</h2>
                <div className="columns is-multiline">
                    {tags.map(tag => (
                        <div key={tag.id} className="column is-full-mobile is-half-tablet is-one-third-desktop">
                            <div className="box has-background-primary m-3">
                                <h2 className="title has-text-centered has-text-black is-2">{tag.label}</h2>
                                <div className="buttons is-justify-content-center mt-1">
                                    <button onClick={() => handleDelete(tag.id)} className="button is-danger is-small  has-text-weight-bold is-size-6 p-4">Delete</button>
                                    <Link to={`/tags/edit/${tag.id}`} setTags={setTags}>
                                        <button className="button is-info is-small has-text-weight-bold ml-2 is-size-6 p-4">Edit</button>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
                <button
                    className="button is-primary"
                    onClick={() => navigate('/tags/create')}
                >
                    Create Tag
                </button>
            </div>
        </section>
    )
}
