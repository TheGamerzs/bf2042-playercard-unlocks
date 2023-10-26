type Task = {
  description: string;
  completed: number;
  required: number;
  canCompute: boolean;
};

type TagData = {
  name: string;
  image: string;
  tasks: Task[];
};

type Weapon = {
  type: string;
  weaponName: string;
  image: string;
  id: string;
  kills: number;
  damage: number;
  bodyKills: number;
  headshotKills: number;
  hipfireKills: number;
  multiKills: number;
  accuracy: string;
  killsPerMinute: number;
  damagePerMinute: number;
  headshots: string;
  hitVKills: number;
  shotsHit: number;
  shotsFired: number;
  spawns: number;
  timeEquipped: number;
};

type Vehicle = {
  type: string;
  vehicleName: string;
  image: string;
  id: string;
  kills: number;
  killsPerMinute: number;
  damage: number;
  spawns: number;
  roadKills: number;
  passengerAssists: number;
  multiKills: number;
  distanceTraveled: number;
  driverAssists: number;
  vehiclesDestroyedWith: number;
  assists: number;
  callIns: number;
  damageTo: number;
  destroyed: number;
  timeIn: number;
};

type WeaponClass = {
  groupName: string;
  id: string;
  kills: number;
  damage: number;
  bodyKills: number;
  headshotKills: number;
  hipfireKills: number;
  multiKills: number;
  accuracy: string;
  killsPerMinute: number;
  damagePerMinute: number;
  headshots: string;
  hitVKills: number;
  shotsHit: number;
  shotsFired: number;
  spawns: number;
  timeEquipped: number;
};

type VehicleClass = {
  groupName: string;
  id: string;
  kills: number;
  killsPerMinute: number;
  damage: number;
  spawns: number;
  roadKills: number;
  passengerAssists: number;
  multiKills: number;
  distanceTraveled: number;
  driverAssists: number;
  vehiclesDestroyedWith: number;
  assists: number;
  callIns: number;
  damageTo: number;
  destroyed: number;
  timeIn: number;
};

type Class = {
  className: string;
  characterName: string;
  statName: string;
  image: string;
  avatarImages: {
    us: string;
    rus: string;
  };
  id: string;
  kills: number;
  deaths: number;
  kpm: number;
  killDeath: number;
  spawns: number;
  revives: number;
  assists: number;
  hazardZoneStreaks: number;
  secondsPlayed: number;
};

type Gamemode = {
  gamemodeName: string;
  image: string;
  id: string;
  kills: number;
  assists: number;
  revives: number;
  bestSquad: number;
  wins: number;
  losses: number;
  mvp: number;
  matches: number;
  sectorDefend: number;
  objectivesArmed: number;
  objectivesDisarmed: number;
  objectivesDefended: number;
  objectivesCaptured: number;
  objectivesDestroyed: number;
  objetiveTime: number;
  kpm: number;
  winPercent: string;
  secondsPlayed: number;
};

type apiMap = {
  mapName: string;
  image: string;
  id: string;
  wins: number;
  losses: number;
  matches: number;
  winPercent: string;
  secondsPlayed: number;
};

type Gadget = {
  type: string;
  gadgetName: string;
  image: string;
  id: string;
  kills: number;
  spawns: number;
  damage: number;
  uses: number;
  multiKills: number;
  vehiclesDestroyedWith: number;
  kpm: number;
  dpm: number;
  secondsPlayed: number;
};

type Season = {
  kills: number;
  deaths: number;
  wins: number;
  loses: number;
  roundsPlayed: number;
  heals: number;
  revives: number;
  resupplies: number;
  assists: number;
  headshots: number;
  enemiesSpotted: number;
  vehiclesDestroyed: number;
  ribbons: number;
  objective: {
    armed: number;
    captured: number;
    defused: number;
    destroyed: number;
    neutralized: number;
  };
  missionsCompleted: number;
  intelExtracted: number;
  timesExtracted: number;
  vehiclesHPRepaired: number;
};

type apiData = {
  userId: number;
  avatar: string;
  userName: string;
  id: number;
  weapons: Weapon[];
  vehicles: Vehicle[];
  weaponGroups: WeaponClass[];
  vehicleGroups: VehicleClass[];
  classes: Class[];
  gamemodes: Gamemode[];
  maps: apiMap[];
  gadgets: Gadget[];
  bestClass: string;
  humanPrecentage: string;
  kills: number;
  deaths: number;
  wins: number;
  loses: number;
  killsPerMinute: number;
  damagePerMinute: number;
  killsPerMatch: number;
  damagePerMatch: number;
  headShots: number;
  winPercent: string;
  headshots: string;
  killDeath: number;
  infantryKillDeath: number;
  damage: number;
  timePlayed: string;
  accuracy: string;
  revives: number;
  heals: number;
  resupplies: number;
  repairs: number;
  squadmateRevive: number;
  squadmateRespawn: number;
  thrownThrowables: number;
  inRound: {
    revives: number;
    resupplies: number;
    squadmateRevive: number;
    spotAssists: number;
    thrownThrowables: number;
    playerTakeDowns: number;
    gadgetsDestoyed: number;
  };
  gadgetsDestoyed: number;
  callIns: number;
  playerTakeDowns: number;
  matchesPlayed: number;
  secondsPlayed: number;
  dividedSecondsPlayed: {
    flying: number;
    driving: number;
  };
  bestSquad: number;
  teammatesSupported: number;
  saviorKills: number;
  shotsFired: number;
  shotsHit: number;
  killAssists: number;
  vehiclesDestroyed: number;
  enemiesSpotted: number;
  mvp: number;
  dividedKills: {
    ads: number;
    grenades: number;
    hipfire: number;
    longDistance: number;
    melee: number;
    multiKills: number;
    parachute: number;
    passenger: number;
    vehicle: number;
    roadkills: number;
    ai: number;
    human: number;
    turret: number;
    ranger: number;
    weapons: {
      BAR: number;
      SMG: number;
      LMG: number;
      DMR: number;
      Sidearm: number;
      Crossbows: number;
      Shotguns: number;
      string: number;
    };
    inRound: {
      total: number;
      turret: number;
      killsAndAssists: number;
      drone: number;
      grenade: number;
      headshots: number;
      hipfire: number;
      longDistance: number;
      melee: number;
      multiKills: number;
      parachute: number;
      passenger: number;
      weapons: {
        Sidearm: number;
        BAR: number;
        SMG: number;
        AR: number;
        DMR: number;
      };
    };
  };
  devidedDamage: {
    explosion: number;
    passenger: number;
    vehicleDriver: number;
    toVehicle: number;
    inRound: {
      passenger: number;
      explosion: number;
      toVehicle: number;
      asVehicle: number;
    };
  };
  devidedAssists: {
    driver: number;
    passenger: number;
    spot: number;
    pilot: number;
    ai: number;
    inRound: {
      total: number;
      passenger: number;
      pilot: number;
    };
  };
  distanceTraveled: {
    foot: number;
    grapple: number;
    passenger: number;
    vehicle: number;
  };
  sector: {
    captured: number;
    defended: number;
  };
  objective: {
    time: {
      total: number;
      attacked: number;
      defended: number;
    };
    armed: number;
    captured: number;
    neutralized: number;
    defused: number;
    destroyed: number;
    inRound: {
      time: number;
      armed: number;
      captured: number;
      neutralized: number;
      defused: number;
      destroyed: number;
    };
  };
  XP: [
    {
      total: number;
      performance: number;
      ribbons: {
        total: number;
        squad: number;
        combat: number;
        intel: number;
        objective: number;
        support: number;
      };
    }
  ];
  seasons: {
    [key: string]: Season[];
  };
};
