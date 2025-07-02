import Link from "next/link";

export default async function Sidebar() {
  return (
    <div className="sideBar">
      <Link href={"/"} className="menu-link">
        Ana Sayfa
      </Link>
      <Link href={"/users"} className="menu-link">
        Kullanıcılar
      </Link>
      <Link href={"/usermanagement"} className="menu-link">
        Kullanıcıları Yönet
      </Link>
    </div>
  );
}
