import { FormEvent, useState } from 'react';
import './App.css';

import * as mapsModes from './tags/maps&modes';

function App() {
  const [username, setUsername] = useState('');
  const [platform, setPlatform] = useState('pc');

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const [playerData, setPlayerData] = useState<apiData | null>(null);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (!username) return;
    const baseURL = 'https://api.gametools.network/bf2042/stats/?raw=false&format_values=true';
    const url = `${baseURL}&name=${username}&platform=${platform}&skip_battlelog=true`;

    setLoading(true);

    fetch(url)
      .then((res) => res.json())
      .then((data) => setPlayerData(data))
      .catch((err) => setError(err))
      .finally(() => setLoading(false));
  };

  function PlayerCardsBadges() {
    return (
      <>
        <p>Badges - Not implemented yet.</p>
      </>
    );
  }

  function PlayerCardsTags() {
    if (!playerData) return null;
    
    return (
      <>
        <h2 className="text-2xl">Tags</h2>
        <h3 className="text-xl underline">Maps & Modes</h3>
        {mapsModes.renderAll(playerData)}
      </>
    );
  }

  function PlayerCardsImages() {
    return (
      <>
        <p>Images - Not implemented yet.</p>
      </>
    );
  }

  return (
    <div className="bg-black p-4 text-white">
      <h1 className="text-center text-4xl font-bold" style={{ fontFamily: 'Inter' }}>
        BF2042 Player Card Tracker
      </h1>
      <form onSubmit={handleSubmit} className="flex flex-col">
        <label className="mt-4 ">Username:</label>
        <input
          type="text"
          className="rounded border border-gray-400  text-black"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <label className="mt-4 ">Platform:</label>
        <select
          value={platform}
          onChange={(e) => setPlatform(e.target.value)}
          className="rounded border border-gray-400 text-black"
        >
          <option value="pc">pc</option>
          <option value="xboxone">xboxone</option>
          <option value="ps4">ps4</option>
          <option value="xboxseries">xboxseries</option>
          <option value="ps5">ps5</option>
          <option value="xbox">xbox</option>
          <option value="psn">psn</option>
        </select>
        <button
          type="submit"
          className="mx-auto mt-11 w-1/2 rounded border border-gray-400 bg-teal-300 p-2 text-black hover:bg-teal-500"
        >
          Get Stats
        </button>
      </form>
      {error ? <p>{JSON.stringify(error)}</p> : null}
      {loading ? (
        <p>Loading...</p>
      ) : playerData ? (
        <>
          <div className="my-8 ml-2 flex flex-row items-center">
            <div className="h-4 w-4 rounded bg-purple-900"></div>Cannot Compute
          </div>
          <PlayerCardsBadges />
          <PlayerCardsTags />
          <PlayerCardsImages />
        </>
      ) : null}
    </div>
  );
}

export default App;
