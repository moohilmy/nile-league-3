import Image from "next/image";
import Link from "next/link";
import { clubsList } from "@/app/nile-league/clubs";

const TeamSection = () => {
  return (
    <section className="py-5  md:block hidden">
      <div className="nile-league-wrapper max-w-[90rem] w-full  mx-auto">
        <ul className="flex justify-between ">
          {clubsList.map(({ id, name, image }, index) => (
            <li key={index}>
              <Link
                href={`/nile-league/clubs/${id}`}
                
                className=" relative lg:size-11 size-9    transition-all hover:scale-125 flex items-center justify-center"
              >
                <Image
                  fill
                  src={`${image}`}
                  alt={`logo name of ${name}`}
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  style={{ objectFit: "contain" ,}}
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
