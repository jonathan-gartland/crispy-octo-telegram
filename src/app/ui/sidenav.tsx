import NavLinks from "@/app/ui/nav-links";

export default function SideNav() {
  return (
    <div className="w-full flex-start md:w-64">ga
      <div className="flex grow flex-row justify-between space-x-2 md:flex-col md:space-x-0 md:space-y-2">
        <NavLinks />
      </div>
    </div>
  );
}
