import React from 'react';
import NewsletterForm from './components/NewsletterForm';

function App() {
  return (
    <main>
      <h1>Hi, I'm Pauline</h1>
      <img alt="My profile pic" src="https://via.placeholder.com/350" />
      <h2>About Me</h2>
      <p>
      Front-end developer passionate about crafting engaging user experiences. 
      Specializing in HTML, CSS, and JavaScript, I love turning designs into dynamic, 
      user-friendly websites. Always learning and innovating.
      </p>

      <div>
        <a href="https://github.com/Pauline-WN">GitHub</a>
        <a href="https://linkedin.com">LinkedIn</a>
      </div>

      <NewsletterForm />
    </main>
  );
}

export default App;
