import Image from "next/image";

export default function UserCard({
  id,
  firstName,
  lastName,
  department,
  avatar,
}: IUser) {
  return (
    <div className="user-card">
      <div className="user-image">
        <Image src={avatar} width={150} height={150} alt={firstName} />
      </div>
      <h3>
        {firstName} {lastName}
      </h3>
      <p>{department}</p>
    </div>
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
