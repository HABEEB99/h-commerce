"use client";

import Image from "next/image";
import Link from "next/link";

const Logo = () => {
  return (
    <Link href="/">
      <div className="flex items-center space-x-1">
        <Image src="/logo.png" alt="Brand Logo" width={30} height={30} />
        <span className="text-sm font-bold text-transparent bg-clip-text bg-gradient-to-bl from-orange-700 to-lime-300">
          H-Commerce
        </span>
      </div>
    </Link>
  );
};

export default Logo;
