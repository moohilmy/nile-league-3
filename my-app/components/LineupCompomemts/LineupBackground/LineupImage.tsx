
import Image from "next/image";

export default function LineupImage() {

  return (
    <Image
      preload={true}
      src={"/line-up.png"}
      alt=""
      height={1800}
      width={1000}
      style={{
        zIndex: -1,
        height: "100%",
        width: "100%",
      }}
    />
  );
}
