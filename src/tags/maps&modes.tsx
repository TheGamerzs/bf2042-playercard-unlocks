import TagTemplate from "./TagTemplate";

import {getGameMode, getGameModeWins} from "../util";

export function FlagSmasher({data}: {data: apiData}) {
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
      canCompute: true,
    },
  ];

  return (
    <TagTemplate
      tagData={{
        name: "Flag Smasher",
        image: "https://img.game8.co/3451362/96cf907a011a3afe4cfd558da01a0c31.png/show",
        tasks,
      }}
    />
  );
}

export function GroundBreaker({data}: {data: apiData}) {
  const ObjectivesCaptured =
    getGameMode(data.gamemodes, "Breakthrough")?.objectivesCaptured || 0;
  const ObjectivesCapturedOneRound = 0;

  const tasks: Task[] = [
    {
      description: "25 Objectives Captured in Breakthrough",
      completed: ObjectivesCaptured,
      required: 25,
      canCompute: true,
    },
    {
      description: "4 Objective Captured in one round of Breakthrough",
      completed: ObjectivesCapturedOneRound,
      required: 4,
      canCompute: false,
    },
  ];

  return (
    <TagTemplate
      tagData={{
        name: "Ground Breaker",
        image: "https://img.game8.co/3451386/a5d569e00f6dd30cd1f190b6eea2343c.png/show",
        tasks,
      }}
    />
  );
}

export function VintageWarrior() {
  const classicMapsPlayed = 0;

  const tasks: Task[] = [
    {
      description: "1 Round won for each Battlefield Classic Map",
      completed: classicMapsPlayed,
      required: 7,
      canCompute: true,
    },
  ];

  return (
    <TagTemplate
      tagData={{
        name: "Vintage Warrior",
        image: "https://img.game8.co/3451372/2ec47d0046869126272248bed7ae84a1.png/show",
        tasks,
      }}
    />
  );
}

export function CombatConnoisseur({data}: {data: apiData}) {
  const breakthroughWins =
      getGameModeWins(data.gamemodes, "Breakthrough") +
      getGameModeWins(data.gamemodes, "Breakthrough Large"),
    conquestWins =
      getGameModeWins(data.gamemodes, "Conquest") +
      getGameModeWins(data.gamemodes, "Conquest Large"),
    hazardZoneWins =
      getGameModeWins(data.gamemodes, "Hazard Zone") +
      getGameModeWins(data.gamemodes, "Hazard Zone Large");

  const tasks: Task[] = [
    {
      description: "10 Rounds won of Breakthrough",
      completed: breakthroughWins,
      required: 10,
      canCompute: true,
    },
    {
      description: "10 Rounds won of Hazard Zone",
      completed: hazardZoneWins,
      required: 10,
      canCompute: true,
    },
    {
      description: "10 Rounds won of Conquest",
      completed: conquestWins,
      required: 10,
      canCompute: true,
    },
  ];

  return (
    <TagTemplate
      tagData={{
        name: "Combat Connoisseur",
        image: "https://img.game8.co/3451384/4d81661abb8756f6ebe131ff006c9ab8.png/show",
        tasks,
      }}
    />
  );
}

export function DataMiner() {
  const tasks: Task[] = [
    {
      description: "5 Data Drives picked up in Hazard Zone",
      completed: 0,
      required: 5,
      canCompute: false,
    },
  ];

  return (
    <TagTemplate
      tagData={{
        name: "Data Miner",
        image: "https://img.game8.co/3451367/fb765d7d0b9a022971efc4775545fed9.png/show",
        tasks,
      }}
    />
  );
}

export function FuseRunner({data}: {data: apiData}) {
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
      canCompute: true,
    },
    {
      description: "50 Objectives Disarmed in Rush",
      completed: ObjectivesDisarmed,
      required: 50,
      canCompute: true,
    },
  ];

  return (
    <TagTemplate
      tagData={{
        name: "Fuse Runner",
        image: "https://img.game8.co/3451383/d5f2f0222e4710e232fbfe70fc13b158.png/show",
        tasks,
      }}
    />
  );
}

export function RulerOfTheZone() {
  const tasks: Task[] = [
    {
      description: "1 Extraction Streak 10 Reached as any Specialist in Hazard Zone",
      completed: 0,
      required: 1,
      canCompute: false,
    },
  ];

  return (
    <TagTemplate
      tagData={{
        name: "Ruler of the Zone",
        image: "https://img.game8.co/3451382/21554000eac5381311c2f7eba59a1a76.png/show",
        tasks,
      }}
    />
  );
}

export function EarlyBird({data}: {data: apiData}) {
  const successfullExtractions =
    getGameModeWins(data.gamemodes, "Hazard Zone") +
    getGameModeWins(data.gamemodes, "Hazard Zone Large");

  const tasks: Task[] = [
    {
      description: "10 Successful extractions in Hazard Zone",
      completed: successfullExtractions,
      required: 10,
      canCompute: true,
    },
    {
      description: "50 Data Drives extracted in Hazard Zone",
      completed: 0,
      required: 50,
      canCompute: false,
    },
  ];

  return (
    <TagTemplate
      tagData={{
        name: "Early Bird",
        image: "https://img.game8.co/3451370/07edcee7659fc5c193e82390ecc75ced.png/show",
        tasks,
      }}
    />
  );
}

export function EscapeArtist() {
  const tasks: Task[] = [
    {
      description:
        "1 Successful extract in Hazard Zone without anyone in the squad having died",
      completed: 0,
      required: 1,
      canCompute: false,
    },
  ];

  return (
    <TagTemplate
      tagData={{
        name: "Escape Artist",
        image: "https://img.game8.co/3451376/460f2e2dac43f0fe01154d7859c4e9cb.png/show",
        tasks,
      }}
    />
  );
}

export function UltimateSurvivor({data}: {data: apiData}) {
  const played75Rounds = data.maps.reduce(
    (acc: number, map: apiMap) => acc + map.matches,
    0
  );

  const tasks: Task[] = [
    {
      description: "75 Rounds played",
      completed: played75Rounds,
      required: 75,
      canCompute: true,
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

export function ArchitectOfWar() {
  const tasks: Task[] = [
    {
      description: "40 Objectives defended in one round of Conquest",
      completed: 0,
      required: 40,
      canCompute: false,
    },
    {
      description: "10 Objectives Captured in one round of Conquest",
      completed: 0,
      required: 10,
      canCompute: false,
    },
  ];

  return (
    <TagTemplate
      tagData={{
        name: "Architect of War",
        image: "https://img.game8.co/3451363/e0f05754864fb41c13b86f0d0c3b3a84.png/show",
        tasks,
      }}
    />
  );
}

export function SeasonedVet({data}: {data: apiData}) {
  const playedMaps = data.maps.filter((map: any) => map.matches > 0).length;

  const tasks: Task[] = [
    {
      description: "1 Round won for each Battlefield 2042 Map",
      completed: playedMaps,
      required: data.maps.length,
      canCompute: true,
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

export function renderAll(data: apiData) {
  return (
    <>
      <FlagSmasher data={data} />
      <GroundBreaker data={data} />
      <VintageWarrior />
      <CombatConnoisseur data={data} />
      <DataMiner />
      <FuseRunner data={data} />
      <RulerOfTheZone />
      <EarlyBird data={data} />
      <EscapeArtist />
      <UltimateSurvivor data={data} />
      <ArchitectOfWar />
      <SeasonedVet data={data} />
    </>
  );
}
