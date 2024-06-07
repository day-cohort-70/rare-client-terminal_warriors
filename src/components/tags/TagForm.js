// src/components/tags/TagForm.js
import { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { createTag, retrieveTag, updateTag } from '../../managers/TagManager';

export const TagForm = () => {
  const [label, setLabel] = useState('');
  const navigate = useNavigate();
  const { tagId } = useParams();

  useEffect(() => {
    if (tagId) {
      retrieveTag(tagId).then(tag => setLabel(tag.label));
    }
  }, [tagId]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const tag = { label };

    try {
      if (tagId) {
        await updateTag({ id: tagId, ...tag });
      } else {
        await createTag(tag);
      }
      navigate('/tags');
    } catch (error) {
      console.error('Error:', error);
    }
  };

  return (
    <div className="container">
      <h2 className="title is-2 has-text-weight-bold">{tagId ? 'Edit Tag' : 'Create Tag'}</h2>
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
              {tagId ? 'Update Tag' : 'Save Tag'}
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};
