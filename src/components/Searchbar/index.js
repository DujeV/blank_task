import React from "react";

const Searchbar = ({ term, setTerm }) => {
  console.log(term);
  return (
    <div>
      <form>
        <div className="field">
          <label>Search Marvel's characters</label>
          <input
            type="text"
            value={term}
            placeholder="Starting with A or B"
            onChange={(e) => setTerm(e.target.value)}
          />
        </div>
      </form>
    </div>
  );
};

export default Searchbar;
