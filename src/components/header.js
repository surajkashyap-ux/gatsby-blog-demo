import React from "react";
import { Link } from 'gatsby'

export default function Header() {
  return (
    <h2 className="text-2xl md:text-4xl font-bold tracking-tight md:tracking-tighter leading-tight mb-20 mt-8">
      <Link to="/" className="hover:underline">
      <img href="https://www.datocms-assets.com/61317/1642327437-snblck-1.png"></img> Blog
      </Link>
      .
    </h2>
  )
}
