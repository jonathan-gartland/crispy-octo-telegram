"use client";

import React, { useState } from "react";
import { getQt2KMpn } from "mpn-lookup/mpn.lookup";
import { lusitana } from "@/app/ui/fonts";
import Link from 'next/link';

export default function QTLForm() {
  const [in2KL, setIn2KL] = useState(0);
  const [in2KS, setIn2KS] = useState(0);

  function mpn2K(in2KL: number, in2KS: number) {
    let mpn2KList: any = [];
    if (in2KL >= 0 && in2KL <= 49 && in2KS >= 0 && in2KS <= 48) {
      mpn2KList = getQt2KMpn(in2KL, in2KS);
    }

    return (
      <div className="grid grid-cols-2 gap-6 w-24 text-red-600 text-xl">
        <div>MPN:</div>
        <div className="text-red-600 font-bold text-xl">{mpn2KList[1]}</div>
      </div>
    );
  }

  function mpn2K95conf(in2KL: number, in2KS: number) {
    let mpn2KList: any = [];
    if (in2KL >= 0 && in2KL <= 49 && in2KS >= 0 && in2KS <= 48) {
      mpn2KList = getQt2KMpn(in2KL, in2KS);
    }

    return (
      <div className="grid grid-cols-2 gap-2 w-24">
        <div>High: </div>
        <div>{mpn2KList[2]}</div>
        <div>Low:</div>
        <div>{mpn2KList[0]}</div>
      </div>
    );
  }

  return (
    <div className={`${lusitana.className} w-64 px-2`}>
      <h1 className="mb-4 text-lg md:text-lg text-blue-600">
        QuantiTray2000&reg; MPN
      </h1>
      <br />
      <div className="grid grid-cols-1 gap-4 mb-6 ">
        <div>
          <div className="text-md">
            Large Positive Wells:&emsp;
            <input
              className="rounded-md w-12 px-1"
              name={"QT2KLinput"}
              id={"qt2klinput"}
              value={in2KL}
              onChange={(e) => setIn2KL(parseInt(e.target.value))}
              type="number"
              min="0"
              max="49"
            />
          </div>
          <div>
            Small Positive Wells:&emsp;
            <input
              className="rounded-md w-12 px-1"
              name={"QT2KSinput"}
              id={"qt2ksinput"}
              value={in2KS}
              onChange={(e) => setIn2KS(parseInt(e.target.value))}
              type="number"
              min="0"
              max="48"
            />
          </div>
        </div>
        <div className="text-md flex justify-left px-10">{mpn2K(in2KL, in2KS)}</div>
        <div className="text-md">
          <label data-testid={"qt-conf-label"}>95% Confidence Range</label>
        </div>
        {<div className="text-md flex justify-left px-10">{mpn2K95conf(in2KL, in2KS)}</div>}
      </div>
      <div className="flex justify-left px-10 w-64 text-blue-600">
        <Link key={"Home"} href={"/"}>Home</Link>
      </div>
    </div>
  );
}
