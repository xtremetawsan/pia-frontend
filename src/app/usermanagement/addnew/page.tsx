"use client";
import UserForm from "@/components/shared/UserForm";

export default function Page() {
  return (
    <>
      <h2 className="pageTitle">Yeni Kullanıcı Ekle</h2>
      <div className="userEdit">
        <UserForm />
      </div>
    </>
  );
}
