import { PlayerType } from "@/types";

type Position = "Goalkeeper"  | "Defender" |  "Midfielder" | "Forward" 

type SquadGrouped = Record<Position, PlayerType[]>;
type GroupedPosition = {
  position: Position;
  players: PlayerType[];
};

const filterSquad = (squad: PlayerType[]): GroupedPosition[] => {
  const positions: Position[] = ["Goalkeeper", "Defender", "Midfielder", "Forward"];

  const grouped = squad.reduce((acc: Partial<SquadGrouped>, player: PlayerType) => {
    const pos = (player.position || "Unknown") as Position;
    if (!acc[pos]) acc[pos] = [];
    acc[pos]!.push(player);
    return acc;
  }, {});

  return positions.map((pos) => ({
    position: pos,
    players: grouped[pos] || [] 
  }));
};

export { filterSquad };
