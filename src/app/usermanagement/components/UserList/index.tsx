"use client";
import Link from "next/link";
import { FaEdit, FaTrash } from "react-icons/fa";
import { IUser } from "../../../users/componets/UserCard";
import Image from "next/image";
import styles from "./list.module.css";

export interface IUserListProps {
  onDelete: () => void;
  user?: IUser;
}
export default function UserList({ user, onDelete }: IUserListProps) {
  const handleUserDelete = (id) => {
    fetch("https://685a501f9f6ef9611155d357.mockapi.io/users/" + id, {
      method: "DELETE",
    })
      .then((res) => res.json()) // or res.json()
      .then((res) => {
        onDelete();
      });
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
          <span
            className={styles.deleteIcon}
            onClick={() => {
              handleUserDelete(user?.id);
            }}
          >
            <FaTrash className="icon" />
          </span>
        </span>
      </div>
    </div>
  );
}
