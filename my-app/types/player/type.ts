interface PlayerState {
  [key: string]: number | string;
}


export interface PlayerType {
    id: number;
    name: string;
    age: number;
    position: string;
    contryCode: string;
    preferredFoot: 'Right' | 'Left';
    club: {
      teamId: number;
      teamName: string;
      teamLogo: string;
    };
    image: string;
    kitNumber: number;
    stats: PlayerState[];
  }
  