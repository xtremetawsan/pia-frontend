"use client";
import Link from "next/link";
import { FaEdit, FaTrash } from "react-icons/fa";
import { IUser } from "../../../users/componets/UserCard";
import Image from "next/image";
import styles from "./list.module.css";

export default function UserList({ user }: IUser) {
  const handleUserDelete = (id) => {
    fetch("https://685a501f9f6ef9611155d357.mockapi.io/users/" + id, {
      method: "DELETE",
    })
      .then((res) => res.json()) // or res.json()
      .then((res) => {});
  };

  return (
    <div className={styles?.userList}>
      <div className={styles.smallImage}>
        <Image src={user?.avatar} width={50} height={50} alt="" />
      </div>
      <div className="userName">
        {user?.firstName} {user?.lastName}
      </div>
      <div className="department">{user?.department}</div>
      <div className="process">
        <span>
          <Link href={"/usermanagement/edit/2"}>
            <FaEdit />
          </Link>

          <FaTrash
            onClick={() => {
              handleUserDelete(user?.id);
            }}
          />
        </span>
      </div>
    </div>
  );
}
