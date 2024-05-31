// src/managers/TagManager.js
export const createTag = (tag) => {
    return fetch('http://localhost:8000/tags', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(tag)
    }).then(response => {
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      return response.text().then(text => text ? JSON.parse(text) : {});
    });
  };
export const fetchTags = () => {
    return fetch('http://localhost:8000/tags')
    .then(response => response.json())
}