import "./styles.css";
import { React, useState } from "react";
import InputEmail from "./input-email";
import { data } from "./data";
export default function App() {
  const [emails, setEmails] = useState(data);
  return (
    <div className="App">
      <InputEmail emails={emails} setEmails={setEmails} />
    </div>
  );
}
