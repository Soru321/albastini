import SideNav from "./side-nav";
import { TopNav } from "./top-nav";

export function Nav() {
  return (
    <>
      <div className="hidden lg:block">
        <TopNav />
      </div>
      <div className="lg:hidden">
        <SideNav />
      </div>
    </>
  );
}
