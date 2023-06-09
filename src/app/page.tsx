"use client";

import Composer from "@/components/composer";
import Messages from "@/components/messages";
import { Message } from "@/types/types";
import { useState, useEffect } from "react";

export default function Home() {
  const testMessages: Message[] = [
    { username: "Alice", text: "Is this thing on?", timestamp: new Date() },
    { username: "Bob", text: "Who's to say?", timestamp: new Date() },
    {
      username: "Chris",
      text: "Why are we all asking questions?",
      timestamp: new Date(),
    },
  ];

  const [messages, setMessages] = useState(testMessages);

  useEffect(() => {
    async function fetchMessages() {
      let res = await fetch("/api");
      const data = await res.json();
      if (data && data.length) {
        setMessages(data);
      }
    }
    fetchMessages();
  }, []);
  const addNewMessage = (newMessage: Message) => {
    setMessages((existingMessages) => [...existingMessages, newMessage]);
  };
  return (
    <main className="flex min-h-screen flex-col justify-between p-24">
      <div className="flex basis-11/12">
        <Messages content={messages} />
      </div>
      <div className="flex basis-1/12">
        <Composer sendFunction={addNewMessage} />
      </div>
    </main>
  );
}
