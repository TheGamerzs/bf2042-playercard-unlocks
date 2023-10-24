export function getGameMode(gamemodes: Gamemode[], mode: string) {
  return gamemodes.find((gamemode: Gamemode) => gamemode.gamemodeName === mode);
}

export function getGameModeWins(gamemodes: Gamemode[], mode: string) {
  return getGameMode(gamemodes, mode)?.wins || 0;
}
