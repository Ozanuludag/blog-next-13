import Link from "next/link";
import React from "react";

type Props = {};

function Navbar({}: Props) {
  return (
    <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="flex justify-between h-16">
        <div className="flex justify-between items-center w-full">
          <Link href={"/"}>
            <h1 className="text-2xl font-medium">
                Ozan <span className="text-tell-500">Blog</span>
            </h1>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
