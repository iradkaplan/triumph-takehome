"use client";

import Composer from "@/components/composer";
import Messages from "@/components/messages";
import { Message } from "@/types/types";
import Image from "next/image";
import { useState } from "react";

export default function ChatPage() {
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
