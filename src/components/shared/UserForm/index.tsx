import { useEffect, useState } from "react";
export default function UserForm() {
  const [inputs, setInputs] = useState<any>({});

  const handleChange = (event: any) => {
    const name = event.target.name;
    const value = event.target.value;
    setInputs((values: any) => ({ ...values, [name]: value }));
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    alert(inputs);
  };

  useEffect(() => {}, []);

  return (
    <div className="userForm">
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="firstName"
          value={inputs.firstName || ""}
          placeholder="Adı"
          key={"firstName"}
        />
        <input
          type="text"
          name="lastName"
          value={inputs.lastName || ""}
          placeholder="Soyadı"
        />
        <input
          type="email"
          name="email"
          value={inputs.email || ""}
          placeholder="Email"
        />
        <input
          type="phone"
          name="phone"
          value={inputs.phone || ""}
          placeholder="Telefon"
        />
      </form>
    </div>
  );
}
