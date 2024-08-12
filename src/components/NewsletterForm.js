import React, { useState } from 'react';
import FormInput from './FormInput';
import InterestCheckbox from './InterestCheckbox';

function NewsletterForm() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [interests, setInterests] = useState({
    interest1: false,
    interest2: false,
    interest3: false,
  });
  const [message, setMessage] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    const selectedInterests = Object.entries(interests)
      .filter(([key, value]) => value)
      .map(([key]) => key.replace('interest', 'Interest '));
    setMessage(`Thank you for signing up, ${name}! Interests: ${selectedInterests.join(', ')}`);
  };

  return (
    <form onSubmit={handleSubmit}>
      <FormInput label="Name:" type="text" value={name} onChange={(e) => setName(e.target.value)} />
      <FormInput label="Email:" type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
      <InterestCheckbox
        label="User Experience (UX) Design"
        checked={interests.interest1}
        onChange={() => setInterests((prev) => ({ ...prev, interest1: !prev.interest1 }))}
      />
      <InterestCheckbox
        label="Responsive Design"
        checked={interests.interest2}
        onChange={() => setInterests((prev) => ({ ...prev, interest2: !prev.interest2 }))}
      />
      <InterestCheckbox
        label="JavaScript Frameworks"
        checked={interests.interest3}
        onChange={() => setInterests((prev) => ({ ...prev, interest3: !prev.interest3 }))}
      />
      <button type="submit">Submit</button>
      {message && <p>{message}</p>}
    </form>
  );
}

export default NewsletterForm;
