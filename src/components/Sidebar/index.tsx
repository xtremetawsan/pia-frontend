import Link from "next/link";

export default function Sidebar() {
  return (
    <div className="sideBar">
      <Link href={"/"} className="menu-link">
        Ana Sayfa
      </Link>
      <Link href={"/users"} className="menu-link">
        Kullanıcılar
      </Link>
    </div>
  );
}
