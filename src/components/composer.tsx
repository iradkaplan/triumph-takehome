"use client";

import { Message } from "@/types/types";
import { useState } from "react";

export default function Composer(props: {
  sendFunction: (a: Message) => void;
}) {
  const [username, setUsername] = useState("");
  const [message, setMessage] = useState("");

  const handleClick = async () => {
    const newMessage = {
      username,
      text: message,
      timestamp: new Date(),
    };
    props.sendFunction(newMessage);
    setMessage("");
    await fetch("/api", { method: "POST", body: JSON.stringify(newMessage) });
  };
  return (
    <div className="fixed inset-x-5 bottom-5 bg-clip-padding bg-indigo">
      <div className="flex flex-col md:flex-row gap-5">
        <div className="flex md:basis-1/4 gap-5">
          <label className="flex flex-1">
            Your Name:{" "}
            <input
              name="username"
              className="flex flex-1"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />{" "}
          </label>
        </div>
        <div className="md:basis-1/2">
          <label className="flex flex-1">
            Message:{" "}
            <input
              name="message"
              className="flex flex-1"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
            />{" "}
          </label>
        </div>
        <button onClick={handleClick}>Send</button>
      </div>
    </div>
  );
}
