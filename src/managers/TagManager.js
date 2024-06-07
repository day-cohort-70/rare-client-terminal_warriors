// src/managers/TagManager.js
export const listTags = () => {
  return fetch('http://localhost:8000/tags')
    .then(response => response.json());
};

export const retrieveTag = (id) => {
  return fetch(`http://localhost:8000/tags/${id}`)
    .then(response => response.json());
};

export const createTag = (tag_object) => {
  return fetch('http://localhost:8000/tags', {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "Accept": "application/json"
    },
    body: JSON.stringify(tag_object)
  }).then(response => {
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    return response.text().then(text => text ? JSON.parse(text) : {});
  });
};

export const deleteTag = (id) => {
  return fetch(`http://localhost:8000/tags/${id}`, {
    method: "DELETE",
  });
};

export const updateTag = (tag_object) => {
  return fetch(`http://localhost:8000/tags/${tag_object.id}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
      "Accept": "application/json"
    },
    body: JSON.stringify(tag_object)
  }).then(response => {
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    return response.text().then(text => text ? JSON.parse(text) : {});
  });
};
