import { filterSquad } from "@/lib/filterSquad"
import { clubsList } from "../.."
import SquadLayout from "@/components/ui/SquadLayout/SquadLayout"
import { PlayerType } from "@/types"


const page = async({ params }: { params: Promise<{ clubId: string }> }) => {
    const {clubId} = await params
    const club = clubsList.find((e) => e.id === Number(clubId));
    const squad = club?.player;
   
      const data = filterSquad(squad as PlayerType[]);

         
  
      return (
        <div className="nile-league-wrapper mt-9">
          {
            data.map(({position,players},index)=>(
              <SquadLayout positionHeader={position} playersList={players} key={index}/>
            ))
          }
        </div>
      );
    
}

export default page
