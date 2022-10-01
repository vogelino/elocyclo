import { useCallback, useRef, useState } from "react";

function SearchField() {
  const inputField = useRef();
  const [opened, setIsOpened] = useState(false);
  const [searchQuery, setSearchQuery] = useState(false);

  const setSearchFieldVisibility = useCallback((newState) => {
    if (newState && inputField.current) {
      inputField.current.focus();
      inputField.current.select();
    }
    setIsOpened(newState);
  }, []);

  return (
    <div className={`search-button ${opened ? "opened" : "closed"}`}>
      <small
        className="simple-button gradient"
        onClick={() => setSearchFieldVisibility(!opened)}
      >
        <b>{opened ? "X" : "ô"}</b>
      </small>
      <form>
        <input
          type="text"
          value={searchQuery}
          placeholder="Rechercher"
          onChange={(evt) => setSearchQuery(evt.target.value)}
          ref={inputField}
        />
        <input type="submit" value="&ocirc;" />
      </form>
    </div>
  );
}

export default SearchField;
