"use client";
import { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import Image from "next/image";
export default function Page() {
  const [user, setUser] = useState(null);
  const params = useParams();

  const getUserDetail = () => {
    fetch("https://685a501f9f6ef9611155d357.mockapi.io/users/" + params?.id)
      .then((response) => response.json())
      .then((data) => {
        setUser(data);
      });
  };

  useEffect(() => {
    getUserDetail();
  }, []);

  return (
    <div>
      <h2>
        {user?.firstName} {user?.lastName}
      </h2>
      <div className="userDetail">
        {user && (
          <div className="userDetail">
            <Image
              src={user?.avatar}
              width={200}
              height={200}
              alt={user?.firstName}
            />
          </div>
        )}
      </div>
    </div>
  );
}
