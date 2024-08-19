"use client"
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/Components/Header";
import { useState } from "react";

export default function RootLayout({ children }) {
  const [marks, changeMarks] = useState("Jacoob")
  return (
    <html lang="en">
      <body className="">
      <Header marks={marks}/>
      {children}
      </body>
    </html>
  );
}
