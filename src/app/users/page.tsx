"use client";
import { useEffect, useState } from "react";
import UserCard from "./componets/UserCard";
import styles from "./page.module.css";

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
      <div className={styles.cardsContainer}>
        {users ? (
          users.map((user: any) => {
            return (
              <UserCard
                id={user?.id}
                firstName={user?.firstName}
                lastName={user?.lastName}
                key={user?.id}
                avatar={user?.avatar}
                department={user?.department}
              />
            );
          })
        ) : (
          <div>Kayıtlı kullanıcı bulunamadı...</div>
        )}
      </div>
    </>
  );
}
