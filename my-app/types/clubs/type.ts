import { PlayerType } from "../player/type";

interface ClubsType {
    id: number;
    name: string;
    image: string;
    sloganName: string;
    player: PlayerType[]
}

export {type ClubsType}