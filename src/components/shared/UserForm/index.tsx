import { IUser } from "@/app/users/componets/UserCard";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

export interface IUserForm {
  user?: IUser;
}

export default function UserForm({ user }: IUserForm) {
  const [inputs, setInputs] = useState<any>({});

  const router = useRouter();

  const handleChange = (event: any) => {
    const name = event.target.name;
    const value = event.target.value;
    setInputs((values: any) => ({ ...values, [name]: value }));
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    const requestUrl = user?.id
      ? "https://685a501f9f6ef9611155d357.mockapi.io/users/" + user?.id
      : "https://685a501f9f6ef9611155d357.mockapi.io/users";
    const requestMethod = user?.id ? "PUT" : "POST";
    const requestOptions = {
      method: requestMethod,
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(inputs),
    };
    fetch(requestUrl, requestOptions)
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        router.push("/usermanagement");
      });
    console.log(requestOptions);
  };

  useEffect(() => {
    if (user) {
      setInputs(user);
    }
  }, [user]);

  return (
    <div className="userForm">
      <form onSubmit={(event) => handleSubmit(event)}>
        <input
          type="text"
          name="firstName"
          value={inputs.firstName || ""}
          onChange={() => {
            handleChange(event);
          }}
          placeholder="Adı"
          key={"firstName"}
        />
        <input
          type="text"
          name="lastName"
          value={inputs.lastName || ""}
          onChange={() => {
            handleChange(event);
          }}
          placeholder="Soyadı"
        />
        <input
          type="email"
          name="email"
          value={inputs.email || ""}
          onChange={() => {
            handleChange(event);
          }}
          placeholder="Email"
        />
        <input
          type="phone"
          name="phone"
          value={inputs.phone || ""}
          onChange={() => {
            handleChange(event);
          }}
          placeholder="Telefon"
        />
        <input
          type="text"
          name="company"
          value={inputs.company || ""}
          onChange={() => {
            handleChange(event);
          }}
          placeholder="Şirket"
        />
        <input
          type="text"
          name="department"
          value={inputs.department || ""}
          onChange={() => {
            handleChange(event);
          }}
          placeholder="Departman"
        />
        <input
          type="text"
          name="startDate"
          value={inputs.startDate || ""}
          onChange={() => {
            handleChange(event);
          }}
          placeholder="Başlangıç Tarihi"
        />
        <input
          type="text"
          name="manager"
          value={inputs.manager || ""}
          onChange={() => {
            handleChange(event);
          }}
          placeholder="Yöneticisi"
        />
        <input
          type="text"
          name="avatar"
          value={inputs.avatar || ""}
          onChange={() => {
            handleChange(event);
          }}
          placeholder="Profil Fotoğrafı"
        />
        <input
          type="text"
          name="project"
          value={inputs.project || ""}
          onChange={() => {
            handleChange(event);
          }}
          placeholder="Proje"
        />

        <button type="submit">Kaydet</button>
      </form>
    </div>
  );
}
