import NavLinks from "@/app/ui/nav-links";
import Link from 'next/link';

export default function SideNav() {
  return (
    <div className="w-full flex-start md:w-64">
      <h1 className={`text-xl md:text-2xl text-blue-600`}>MPN Lookup</h1>
      <br/>
      <p className="text-md">
        A simple app written so a user can look up the relevant
        Most Probable Number for the Idexx water screening systems
        without needing to find or download a pdf.
      </p>
      <br />
      <div className="flex grow flex-row justify-between space-x-2 md:flex-col md:space-x-0 md:space-y-2">
        <NavLinks/>
      </div>
    </div>
  );
}
