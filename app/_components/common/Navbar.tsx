import Link from "next/link";
import React from "react";
const Navbar = () => {
  return (
    <div className="text-red-400 py-6 space-x-4">
      <Link href="/">Home</Link>
      <Link href="/api/auth/signin">Signin</Link>
      <Link href="/api/auth/signout">Signout</Link>
      <Link href="/signup">Signup</Link>
      <Link href="/client">client</Link>

    </div>
  );
};

export default Navbar;
