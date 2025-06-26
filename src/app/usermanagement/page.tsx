"use client";
import { useEffect, useState } from "react";
import styles from "./page.module.css";
import UserList from "./components/UserList";
import { FaPlus } from "react-icons/fa";
import Link from "next/link";

export default function Page() {
  const [users, setUsers] = useState(null);

  const getUsers = () => {
    fetch("https://685a501f9f6ef9611155d357.mockapi.io/users/")
      .then((response) => response.json())
      .then((data) => {
        setUsers(data);
      });
  };

  useEffect(() => {
    getUsers();
  }, []);

  return (
    <>
      <h2 className="pageTitle">Kullanıcılar</h2>
      <Link className={styles?.addNewLink} href={"/usermanagement/addnew"}>
        <FaPlus /> Yeni Ekle
      </Link>
      <div className={styles.userList}>
        {users ? (
          users.map((user) => {
            return <UserList user={user} key={user?.id} />;
          })
        ) : (
          <div>Kayıtlı kullanıcı bulunamadı...</div>
        )}
      </div>
    </>
  );
}
