import { lusitana } from "./ui/fonts";
import { Suspense } from "react";
import Link from "next/link";
import SideNav from '@/app/ui/sidenav';

export default async function Page() {
  return (
    <main className="grid grid-cols-2 container">
      <SideNav/>
      <div>
        <div className={`${lusitana.className} w-7/8 text-lg flex-start`}>
          <h1 className={`text-xl md:text-2xl text-blue-600`}>MPN Lookup</h1>
          <br/>
          <p className="text-lg">
            A simple, automated lookup application created so one need not to
            have to rely on the relevant associated PDF&apos;s for finding the
            Most Probable Number for the sample used when using the following
            test systems:
          </p>
          <div className="grid grid-cols-1 text-xl text-blue-600">
            <div className="px-20">
              <Link href="/quantitray">QuantiTray&reg;</Link>
            </div>
            <div className="px-20">
              <Link href="/quantitray2000">QuantiTray2000&reg;</Link>
            </div>
            <div className="px-20">
              <Link href="/legiolert">Legiolert&reg;</Link>
            </div>
          </div>
        </div>
        <div></div>
      </div>
    </main>
  );
}
