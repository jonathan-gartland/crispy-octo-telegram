"use client";

import React, { useState } from "react";
import { getQtLegio } from "mpn-lookup/mpn.lookup";
import { lusitana } from "@/app/ui/fonts";
import Link from 'next/link';

export default function QT2KForm() {
  const [inLarge, setInLarge] = useState(0);
  const [inSmall, setInSmall] = useState(0);

  function mpnL(inSmall: number, inLarge: number) {
    let mpnLList: any = [];

    if (inLarge >= 0 && inSmall >= 0 && inLarge <= 6 && inSmall <= 90) {
      mpnLList = getQtLegio(inSmall, inLarge);
    }
    if (mpnLList.length === 0) {
      return <h3>Enter valid value please!</h3>;
    }

    return (
      <div className="text-red-600 font-bold text-lg">
        MPN:&emsp;&emsp;{mpnLList}
      </div>
    );
  }

  return (
    <div className={`${lusitana.className} w-64 px-2`}>
      <br />
      <h1 className="mb-4 text-lg md:text-lg text-blue-600">
        QuantiTray&reg;<br />Legiolert MPN
      </h1>
      <div className="grid grid-cols-1 gap-4 mb-6">
        <div>
          <div className="text-md">
            Large Positive Wells:&emsp;
            <input
              className="rounded-md w-12 px-1"
              value={inLarge}
              onChange={(e) => setInLarge(parseInt(e.target.value))}
              type="number"
              min="0"
              max="6"
              style={{ marginLeft: "26px" }}
              width={"34px"}
            />
          </div>
          <br />
          <div className="text-md">
            Enter Small Well Count:&emsp;
            <input
              className="rounded-md w-12 px-1"
              value={inSmall}
              onChange={(e) => setInSmall(parseInt(e.target.value))}
              type="number"
              min="0"
              max="90"
            />
          </div>
        </div>
        <div className="text-md flex justify-left px-10">{mpnL(inSmall, inLarge)}</div>
      </div>
      <div className="flex justify-left px-10 w-64 text-blue-600">
        <Link key={"Home"} href={"/"}>Home</Link>
      </div>
    </div>
  );
}
