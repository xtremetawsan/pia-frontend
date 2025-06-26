import Image from "next/image";
import Link from "next/link";
import styles from "./usercard.module.css";

export default function UserCard({
  id,
  firstName,
  lastName,
  department,
  avatar,
}: IUser) {
  return (
    <>
      <Link href={"/users/" + id}>
        <div className={styles.userCard}>
          <div className="user-image">
            <Image src={avatar} width={200} height={200} alt={firstName} />
          </div>
          <h3 className={styles.userName}>
            {firstName} {lastName}
          </h3>
          <p>{department}</p>
        </div>
      </Link>
    </>
  );
}
export interface IUser {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  company: string;
  department: string;
  startDate: string;
  manager: string;
  avatar: string;
  id: string;
}
