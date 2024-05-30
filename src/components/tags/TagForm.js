import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { createTag } from '../../managers/TagManager';

export const TagForm = () => {
  const [label, setLabel] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    const newTag = { label };
    console.log("Creating tag:", newTag);

    try {
      const response = await createTag(newTag);
      console.log("Response from createTag:", response);
      if (response && response.id) {
        navigate('/tags');
      } else {
        console.error('Failed to create tag');
      }
    } catch (error) {
      console.error('Error:', error);
    }
  };

  return (
    <div className="container">
      <h2 className="title is-2 has-text-weight-bold">Create Tag</h2>
      <form onSubmit={handleSubmit}>
        <div className="field">
          <label className="label">Tag Name</label>
          <div className="control">
            <input
              className="input"
              type="text"
              value={label}
              onChange={(e) => setLabel(e.target.value)}
              required
            />
          </div>
        </div>
        <div className="field">
          <div className="control">
            <button className="button is-primary" type="submit">
              Save Tag
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

