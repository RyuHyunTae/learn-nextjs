"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const TestNavigation = () => {
  const path = usePathname();
  return (
    <nav>
      <ul>
        <li>
          <Link href="/">Home</Link> {path === "/" ? "Here" : ""}
        </li>
        <li>
          <Link href="/about-us">About Us</Link>
          {path === "/about-us" ? "Here" : ""}
        </li>
      </ul>
    </nav>
  );
};

export default TestNavigation;
