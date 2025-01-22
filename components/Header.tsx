"use client";

import Image from "next/image";
import logo from "@/public/assets/mealLogo.avif";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { SignedIn, SignedOut, SignInButton, UserButton } from "@clerk/nextjs";

const Header = () => {
  const path = usePathname();
  const links = [
    {
      title: "Browse foods",
      href: "/foods",
    },
  ];
  return (
    <div className="bg-gradient-to-br from-gray-600 to-gray-200 py-4">
      <div className="flex items-center justify-between px-8">
        <div className="flex items-center space-x-4 text-white">
          <Image
            src={logo}
            width={30}
            height={30}
            alt="logo"
            priority
            style={{ borderRadius: "100%" }}
          />
          <Link href="/">m&bfoods</Link>
        </div>
        <div className="flex ">
          {links.map((link) => (
            <Link
              key={link.title}
              href={link.href}
              className={
                path.startsWith(link.href) ? "text-black" : "text-white"
              }
            >
              {link.title}
            </Link>
          ))}
        </div>
        <div>
          <SignedIn>
            <UserButton />
          </SignedIn>
          <SignedOut>
            <SignInButton />
          </SignedOut>
        </div>
      </div>
    </div>
  );
};

export default Header;
