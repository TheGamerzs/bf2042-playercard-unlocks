import TagTemplate from "./TagTemplate";

function FlagSmasher({ data }: { data: apiData }) {
  const ObjectivesCaptured =
    data.gamemodes.find((mode: Gamemode) => mode.gamemodeName === "Conquest")
      ?.objectivesCaptured || 0;

  const ObjectivesDestroyed =
    data.gamemodes.find((mode: Gamemode) => mode.gamemodeName === "Conquest")
      ?.objectivesDestroyed || 0;

  const tasks: Task[] = [
    {
      description: "5 Objectives Captured or Destroyed",
      completed: ObjectivesCaptured + ObjectivesDestroyed,
      required: 5,
    },
  ];

  return (
    <TagTemplate
      tagData={{
        name: "Flag Smasher",
        image:
          "https://img.game8.co/3451362/96cf907a011a3afe4cfd558da01a0c31.png/show",
        tasks,
      }}
    />
  );
}

function GroundBreaker({ data }: { data: apiData }) {
  const ObjectivesCaptured =
    data.gamemodes.find(
      (mode: Gamemode) => mode.gamemodeName === "Breakthrough"
    )?.objectivesCaptured || 0;
  const ObjectivesCapturedOneRound = 0;

  const tasks: Task[] = [
    {
      description: "25 Objectives Captured in Breakthrough",
      completed: ObjectivesCaptured,
      required: 25,
    },
    {
      description: "4 Objective Captured in one round of Breakthrough",
      completed: ObjectivesCapturedOneRound,
      required: 4,
    },
  ];

  return (
    <TagTemplate
      tagData={{
        name: "Ground Breaker",
        image:
          "https://img.game8.co/3451386/a5d569e00f6dd30cd1f190b6eea2343c.png/show",
        tasks,
      }}
    />
  );
}

function VintageWarrior({ data }: { data: apiData }) {
  const classicMapsPlayed = 0;

  const tasks: Task[] = [
    {
      description: "1 Round won for each Battlefield Classic Map",
      completed: classicMapsPlayed,
      required: 7,
    },
  ];

  return (
    <TagTemplate
      tagData={{
        name: "Vintage Warrior",
        image:
          "https://img.game8.co/3451372/2ec47d0046869126272248bed7ae84a1.png/show",
        tasks,
      }}
    />
  );
}

function CombatConnoisseur({ data }: { data: apiData }) {
  return <p>Not implemented yet.</p>;
}

function DataMiner({ data }: { data: apiData }) {
  return <p>Not implemented yet.</p>;
}

function FuseRunner({ data }: { data: apiData }) {
  const ObjectivesArmed =
    data.gamemodes.find((mode: Gamemode) => mode.gamemodeName === "Rush")
      ?.objectivesArmed || 0;

  const ObjectivesDisarmed =
    data.gamemodes.find((mode: Gamemode) => mode.gamemodeName === "Rush")
      ?.objectivesDisarmed || 0;

  const tasks: Task[] = [
    {
      description: "50 Objectives Armed in Rush",
      completed: ObjectivesArmed,
      required: 50,
    },
    {
      description: "50 Objectives Disarmed in Rush",
      completed: ObjectivesDisarmed,
      required: 50,
    },
  ];

  return (
    <TagTemplate
      tagData={{
        name: "Fuse Runner",
        image:
          "https://img.game8.co/3451383/d5f2f0222e4710e232fbfe70fc13b158.png/show",
        tasks,
      }}
    />
  );
}

function RulerOfTheZone({ data }: { data: apiData }) {
  return <p>Not implemented yet.</p>;
}

function EarlyBird({ data }: { data: apiData }) {
  return <p>Not implemented yet.</p>;
}

function EscapeArtist({ data }: { data: apiData }) {
  return <p>Not implemented yet.</p>;
}

function UltimateSurvivor({ data }: { data: apiData }) {
  const played75Rounds = data.maps.reduce(
    (acc: number, map: apiMap) => acc + map.matches,
    0
  );

  const tasks: Task[] = [
    {
      description: "75 Rounds played",
      completed: played75Rounds,
      required: 75,
    },
  ];

  return (
    <TagTemplate
      tagData={{
        name: "Ultimate Survivor",
        image:
          "https://img.game8.co/3451380/2dff8eedf387d73ef01a5d70f0cf2b9c.png/original",
        tasks,
      }}
    />
  );
}

function ArchitectOfWar({ data }: { data: apiData }) {
  return <p>Not implemented yet.</p>;
}

function SeasonedVet({ data }: { data: apiData }) {
  const playedMaps = data.maps.filter((map: any) => map.matches > 0).length;

  const tasks: Task[] = [
    {
      description: "1 Round won for each Battlefield 2042 Map",
      completed: playedMaps,
      required: data.maps.length,
    },
  ];

  return (
    <TagTemplate
      tagData={{
        name: "Seasoned Vet",
        image:
          "https://img.game8.co/3451385/f989cf5a2c2becc095ca94e71544ffe2.png/original",
        tasks,
      }}
    />
  );
}

function renderAll(data: apiData) {
  return (
    <>
      <FlagSmasher data={data} />
      <GroundBreaker data={data} />
      <VintageWarrior data={data} />
      <CombatConnoisseur data={data} />
      <DataMiner data={data} />
      <FuseRunner data={data} />
      <RulerOfTheZone data={data} />
      <EarlyBird data={data} />
      <EscapeArtist data={data} />
      <UltimateSurvivor data={data} />
      <ArchitectOfWar data={data} />
      <SeasonedVet data={data} />
    </>
  );
}

export default {
  renderAll,
};
