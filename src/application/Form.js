import React from "react";

function Form() {
  return (
    <div>
      <form action="submit/post" method="post">
        <label htmlFor="title">Title:</label>
        <input type="text" id="title" name="title" className="text-black" />

        <label htmlFor="content">Content:</label>
        <textarea id="content" name="content" className="text-black"></textarea>

        <label htmlFor="author">Author:</label>
        <input type="text" id="author" name="author" className="text-black" />

        <label htmlFor="coverImage">Cover Image:</label>
        <input
          type="file"
          id="coverImage"
          name="coverImage"
          className="text-black"
        />

        <label htmlFor="repository">Repository:</label>
        <input
          type="text"
          id="repository"
          name="repository"
          className="text-black"
        />

        <label htmlFor="contributors">Contributors:</label>
        <input
          type="text"
          id="contributors"
          name="contributors"
          className="text-black"
        />

        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default Form;
