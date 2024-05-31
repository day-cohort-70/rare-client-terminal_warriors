import { useEffect, useState } from "react";
import { fetchTags } from "../../managers/TagManager.js";
import { useNavigate } from "react-router-dom";

export const TagList = () => {
  const [tags, setTags] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    fetchTags().then(setTags);
  }, []);

  return (
    <div className="container">
      <h2 className="title is-2 has-text-weight-bold">Tags</h2>
      <div className="content">
        <ul>
          {tags.map(tag => (
            <li key={tag.id} className="tag is-medium is-primary m-1">
              {tag.label}
            </li>
          ))}
        </ul>
      </div>
      <button
        className="button is-primary"
        onClick={() => navigate('/tags/create')}
      >
        Create Tag
      </button>
    </div>
  );
};