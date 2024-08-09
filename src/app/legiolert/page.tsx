"use client";

import React, { useState } from "react";
import { getQtLegio } from "mpn-lookup/mpn.lookup";
import { lusitana } from "@/app/ui/fonts";

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
      <div className="text-red-600 font-bold text-xl">
        MPN:&emsp;&emsp;{mpnLList}
      </div>
    );
  }

  return (
    <div className={`${lusitana.className} w-1/2`}>
      <h1 className="mb-4 text-xl md:text-2xl text-blue-600">
        QuantiTray&reg; Legiolert MPN
      </h1>
      <br />
      <div className="grid grid-cols-2 gap-4 mb-6">
        <div>
          <div className="text-xl">
            Enter Large Well Count:&emsp;
            <input
              className="rounded-md w-12 px-1"
              value={inLarge}
              onChange={(e) => setInLarge(parseInt(e.target.value))}
              type="number"
              min="0"
              max="6"
              style={{ marginLeft: "10px" }}
              width={"34px"}
            />
          </div>
          <div className="text-xl">
            Enter Small Well Count:&emsp;
            <input
              className="rounded-md w-12 px-1"
              value={inSmall}
              onChange={(e) => setInSmall(parseInt(e.target.value))}
              type="number"
              min="0"
              max="90"
              style={{ marginLeft: "10px" }}
            />
          </div>
        </div>
      </div>
      {<div>{mpnL(inSmall, inLarge)}</div>}
    </div>
  );
}
