import Image from "next/image";
import Link from "next/link";
import { clubsList } from "@/app/nile-league/clubs";

const TeamSection = () => {
  return (
    <section className="py-5  md:block hidden">
      <div className="nile-league-wrapper max-w-[90rem] w-full  mx-auto">
        <ul className="flex justify-between ">
          {clubsList.map(({id, name , image}, index) => (
            <li key={index} >
              <Link
                href={`/nile-league/clubs/${id}`}
                className=" relative lg:w-11 w-9 aspect-square   transition-all hover:scale-125 flex items-center justify-center"
              >
                <Image
                  fill
                  src={`${image}`}
                  alt={`logo name of ${name}`}
                  
                  style={{ aspectRatio: "1/1", objectFit: 'contain' }}
                />
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default TeamSection;
