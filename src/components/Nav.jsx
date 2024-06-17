import React from "react";

const Nav = ({ onSearch }) => {
  const [location, setLocation] = React.useState("");
  const [guests, setGuests] = React.useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    onSearch(location, guests);
  };

  return (
    <nav>
      <img src="https://windbnb-page.netlify.app/static/media/logo.beef9462.svg" alt="logo" class="w-full"/>      
          <form onSubmit={handleSubmit}>
        <input 
          type="text" 
          placeholder="Location" 
          value={location} 
          onChange={(e) => setLocation(e.target.value)} 
        />
        <input 
          type="number" 
          placeholder="Guests" 
          value={guests} 
          onChange={(e) => setGuests(e.target.value)} 
        />
        <button type="submit">Search</button>
      </form>
    </nav>
  );
};

export default Nav;
