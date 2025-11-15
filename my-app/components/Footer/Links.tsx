import Link from "next/link";
import React from "react";

const Links = ({
  url,
  linkname,
}: {
  url: string;
  linkname: string;
}) => {
  return (
    <li>
      <Link href={url} className="block hover:opacity-80 transition-all">
        {linkname}
      </Link>
    </li>
  );
};

export default Links;
