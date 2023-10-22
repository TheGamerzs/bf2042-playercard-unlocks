import { FormEvent, useEffect, useState } from "react";
import "./App.css";

import mapsModes from "./tags/maps&modes";

function App() {
  const [username, setUsername] = useState("");
  const [platform, setPlatform] = useState("pc");

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const [playerData, setPlayerData] = useState(null) as any;

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    const baseURL =
      "https://api.gametools.network/bf2042/stats/?raw=false&format_values=true";
    const url = `${baseURL}&name=${username}&platform=${platform}&skip_battlelog=true`;

    setLoading(true);

    fetch(url)
      .then((res) => res.json())
      .then((data) => setPlayerData(data))
      .catch((err) => setError(err))
      .finally(() => setLoading(false));
  };

  function PlayerCards_Badges() {
    return (
      <>
        <p>Not implemented yet.</p>
      </>
    );
  }

  function PlayerCards_Tags() {
    return <>{mapsModes.renderAll(playerData)}</>;
  }

  function PlayerCards_Images() {
    return (
      <>
        <p>Not implemented yet.</p>
      </>
    );
  }

  return (
    <>
      <h1>BF2042 Player Card Tracker</h1>
      <form onSubmit={handleSubmit}>
        <label>Username:</label>
        <input
          type="text"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <label>Platform:</label>
        <select value={platform} onChange={(e) => setPlatform(e.target.value)}>
          <option value="pc">pc</option>
          <option value="xboxone">xboxone</option>
          <option value="ps4">ps4</option>
          <option value="xboxseries">xboxseries</option>
          <option value="ps5">ps5</option>
          <option value="xbox">xbox</option>
          <option value="psn">psn</option>
        </select>
        <button type="submit">Get Stats</button>
      </form>
      {error ? <p>{JSON.stringify(error)}</p> : null}
      {loading ? (
        <p>Loading...</p>
      ) : playerData ? (
        <>
          <PlayerCards_Badges />
          <PlayerCards_Tags />
          <PlayerCards_Images />
        </>
      ) : null}
    </>
  );
}

export default App;
