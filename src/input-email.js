import { React, useState } from "react";
export default function InputEmail({ emails, setEmails }) {
  const [userEmail, setUserEmail] = useState({ id: Math.random(), mail: "" });
  const [msg, setMsg] = useState(false);
  console.log(emails);
  return (
    <div>
      <input
        onChange={(e) => {
          setMsg("");
          setUserEmail((email) => ({ ...email, mail: e.target.value }));
        }}
        value={userEmail.mail}
        type="email"
        placeholder="Enter email"
      ></input>{" "}
      <button
        onClick={() => {
          const mailExists = emails.some((f) => f.mail === userEmail.mail);
          if (mailExists) {
            setMsg("Already Subscribed");
          } else {
            setEmails((prev) => [...prev, userEmail]);
            setMsg("You have been added");
          }
        }}
      >
        Subscribe
      </button>
      <div>{msg}</div>
    </div>
  );
}
