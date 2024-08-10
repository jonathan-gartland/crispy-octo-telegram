import { lusitana } from "./ui/fonts";
import Link from "next/link";
import NavLinks from '@/app/ui/nav-links';

export default async function Page() {
  return (
    <main className="grid grid-cols-1">
      <div className={`${lusitana.className} w-64 text-lg flex-start px-2`}>
        <div>
          <br />
          <div className="w-full flex-start md:w-64">
            <h1 className={`text-lg md:text-lg text-blue-600 flex justify-center`}>MPN Lookup</h1>
            <br/>
            <p className="text-md">
              A simple app written so a user can look up the relevant Most Probable Number for the Idexx water
              screening systems without needing to find or download a pdf.
            </p>
            <br/>
            <div className="flex grow flex-row justify-between space-x-2 md:flex-col md:space-x-0 md:space-y-2">
              <NavLinks/>
            </div>
          </div>
        </div>
        <br />
        <div className="flex justify-center w-64 text-blue-600">
          <Link key={"About"} href={"/about"}>About</Link>
        </div>
        <br />
      </div>
    </main>
  );
}
