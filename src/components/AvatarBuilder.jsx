import React, { useState } from 'react';

const AvatarBuilder = () => {
  const [name, setName] = useState('');
  const [avatarType, setAvatarType] = useState('Marketing');
  const [powers, setPowers] = useState({
    vicuna: false,
    gecko: false,
    // Add more high-powered components here
  });

  const handleAvatarTypeChange = (e) => {
    setAvatarType(e.target.value);
  };

  const handlePowerChange = (e) => {
    setPowers({ ...powers, [e.target.name]: e.target.checked });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Avatar characteristics:', { name, avatarType, powers });
  };

  return (
    <div>
      <h2>Avatar Builder</h2>
      <form onSubmit={handleSubmit}>
        <label>
          Name:
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Enter avatar name"
          />
        </label>
        <label>
          Avatar Type:
          <select value={avatarType} onChange={handleAvatarTypeChange}>
            <option value="Marketing">Marketing Avatar</option>
            <option value="Accounting">Accounting Avatar</option>
            <option value="Legal">Legal Issues Avatar</option>
            <option value="HR">Human Resources Avatar</option>
            <option value="Sales">Sales Avatar</option>
            <option value="Product">Product Development Avatar</option>
            <option value="Management">Management Avatar</option>
          </select>
        </label>
        <fieldset>
          <legend>Powers:</legend>
          <label>
            <input
              type="checkbox"
              name="vicuna"
              checked={powers.vicuna}
              onChange={handlePowerChange}
            />
            Vicuna
          </label>
          <label>
            <input
              type="checkbox"
              name="gecko"
              checked={powers.gecko}
              onChange={handlePowerChange}
            />
            Gecko
          </label>
          {/* Add more high-powered components checkboxes here */}
        </fieldset>
        <button type="submit">Create Avatar</button>
      </form>
    </div>
  );
};

export default AvatarBuilder;
