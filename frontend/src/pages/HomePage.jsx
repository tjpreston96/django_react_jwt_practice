import React, { useEffect, useState, useContext } from "react";
import AuthContext from "../context/AuthContext";

const HomePage = () => {
  let [notes, setNotes] = useState([]);
  let { authTokens, logoutUser } = useContext(AuthContext).contextData;

  useEffect(() => {
    getNotes();
  }, []);

  let getNotes = async () => {
    let response = await fetch("http://127.0.0.1:8000/api/notes/", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: "Bearer " + String(authTokens.access),
      },
    });
    let data = await response.json();

    if (response.status === 200) {
      setNotes(data);
    } else if (response.statusText === "Unauthorized") {
      logoutUser();
    }
  };

  return (
    <div>
      <p>You are logged in!</p>
      <p>Welcome to the home page!</p>

      <ul>
        {notes ? (
          notes.map((note) => {
            return <li key={note.div}>{note.body}</li>;
          })
        ) : (
          <li>No Notes</li>
        )}
      </ul>
    </div>
  );
};

export default HomePage;
