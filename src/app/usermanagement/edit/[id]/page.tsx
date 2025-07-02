"use client";
import UserForm from "@/components/shared/UserForm";
import { useState, useEffect } from "react";
import { useParams } from "next/navigation";

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
    <>
      <h2 className="pageTitle">Kullanıcıyı Düzenle</h2>
      <div className="userEdit">
        <UserForm user={user} />
      </div>
    </>
  );
}
