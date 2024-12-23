import React, { useState } from "react";
import fs from 'fs';

const NewsForm = () => {
  const [newsData, setNewsData] = useState({
    title: "",
    paragraph: "",
    author: "",
    cover: "",
  });
    
  const [successMessage, setSuccessMessage] = useState('');

  const handleChange = (event) => {
    const { name, value } = event.target;
    setNewsData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const news = JSON.parse(fs.readFileSync('news.json', 'utf-8')) || [];
    news.push(newsData);
    fs.writeFileSync('news.json', JSON.stringify(news, null, 2));
      console.log('Noticia guardada con éxito.');
      setSuccessMessage('Noticia guardada con éxito.');
    // También puedes realizar otras acciones después de guardar los datos, como mostrar un mensaje de éxito o redirigir al usuario a otra página.
  };
  return (
    <form onSubmit={handleSubmit}>
      <label>
        Título:
        <input
          type="text"
          name="title"
          value={newsData.title}
          onChange={handleChange}
        />
      </label>
      <label>
        Párrafo:
        <textarea
          name="paragraph"
          value={newsData.paragraph}
          onChange={handleChange}
        />
      </label>
      <label>
        Autor:
        <input
          type="text"
          name="author"
          value={newsData.author}
          onChange={handleChange}
        />
      </label>
      <label>
        Portada:
        <input
          type="text"
          name="cover"
          value={newsData.cover}
          onChange={handleChange}
        />
      </label>
          <button type="submit">Enviar</button>
          {successMessage && <p>{successMessage}</p>}
    </form>
  );
};

export default NewsForm;
