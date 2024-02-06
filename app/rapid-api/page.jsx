"use client";
import React, { useState } from "react";
import getQuotes from "@/libs/getQuotes";

export default async function page() {
  const [nextQuote, SetNextQoute] = useState();

  const qoutes = await getQuotes();
  //   console.log(qoutes);
  return (
    <div className="bg-slate-950 min-h-screen w-full text-slate-50 flex items-center justify-center">
      <div className="max-w-6xl bg-white text-zinc-950 py-10 px-8">
        Qoutes
        <>
          {qoutes?.map((qoute, i) => (
            <span key={i}>
              <h1 className="font-bold text-3xl">{qoute.text}</h1>
              <span className="">{qoute.author}</span>
            </span>
          ))}
        </>
      </div>
      <button></button>
    </div>
  );
}
