"use client";

import React from "react";
import { lusitana } from "@/app/ui/fonts";

export default function AboutForm() {
  return (
    <>
      <h1
        className={`${lusitana.className} mb-4 text-xl md:text-2xl text-blue-600`}
      >
        About
      </h1>
      <div
        id="aboutdiv"
        style={{
          border: "solid",
          marginRight: "5px",
          paddingRight: "15px",
          paddingBottom: "15px",
        }}
        className={`${lusitana.className} text-lg w-1/2 bg-amber-50`}
      >
        <br />
        <br />
        <div
          className=" "
          style={{ textAlign: "left", paddingLeft: "15px" }}
          data-testid={"about-text-id"}
        >
          <p>
            Some folks work in water testing facilities that utilize the
            Idexx&nbsp;
            <a
              data-testid={"qtlink"}
              style={{ color: "teal" }}
              href="https://www.idexx.com/en/water/water-products-services/quanti-tray-system/"
            >
              QuantiTray&reg; System
            </a>{" "}
            for analyzing water samples. Once the water sample is incubated, a
            technician will need to count the positive indicating sample wells,
            and then cross reference one of three PDF files with the
            corresponding Most Probable Number and the related confidence range
            if available. Here is a link to the pdf related to the &nbsp;
            <a
              data-testid={"pdf-testid"}
              style={{ color: "teal" }}
              href="https://www.idexx.com/files/qt97mpntable.pdf"
            >
              QuantiTray2000&reg;
            </a>
            , which is the largest PDF table.
          </p>
          <br />
          <p>
            Allegedly created to be helpful in the tedious process of looking up
            the MPN related to positive flourescing cells in an incubated
            sample, the{" "}
            <a
              data-testid={"mpngen"}
              style={{ color: "teal" }}
              href="https://www.idexx.com/en/water/resources/mpn-generator/"
            >
              MPN Generator
            </a>
            &nbsp;was created.
          </p>
          <br />
          <p>
            If the story is being recalled correctly, this desktop solution was
            written so one of the software engineers could practice building a
            desktop application using Delphi-C. &nbsp;The MPN Generator can
            inexplicably still be&nbsp;
            <i>
              downloaded and installed on your computer as a Windows&trade;
              desktop application today.
            </i>
          </p>
          <br />
          <p>
            While the previous detail may cause the reader to ask some questions
            related to why the above is the current state of affairs, your
            author simply decided to make a{" "}
            <a
              style={{ color: "teal" }}
              href="https://github.com/jonathan-gartland/mpn-lookup"
            >
              useful javascript library
            </a>{" "}
            (and{" "}
            <a
              style={{ color: "teal" }}
              href="https://github.com/jonathan-gartland/mpn-helpers"
            >
              one in Python as well
            </a>{" "}
            ) to give the user the MPN value based on the simple input provided,
            the integer value of the incubated cells that show positive signs of
            contamination. If these tools were needed for a Jupyter notebook or
            an application they would be easily available via npm or pip. This
            seemed slightly more flexible and practical than the existing
            solution. If this application is useful to the handful people out
            there who use it - have fun, it will always be freely available on
            github.
          </p>
          <br />
          <p>
            This particular NextJS app is simply a demo using the library to
            show how it could be implemented in a web app. I wanted more
            practice using React and NextJS and writing tests for such
            aplications; this seemed like an easy task to do it with. I found
            NextJS to be fairly easy to use, and I&apos;m probably going to
            create native app versions of this to get more practice using the
            NextJS framework.
          </p>
        </div>
      </div>
    </>
  );
}
