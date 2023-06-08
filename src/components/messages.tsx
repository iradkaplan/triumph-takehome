"use client";

import { Message } from "@/types/types";
import { useEffect, useRef } from "react";

export default function Messages(props: { content: Message[] }) {
  const divRef = useRef<null | HTMLDivElement>(null);

  useEffect(() => {
    divRef.current?.scrollIntoView({ behavior: "smooth" } /*add dependency!*/);
  });
  return (
    <div className="flex flex-col flex-nowrap">
      {props.content.map((message, index) => {
        return (
          <div key={index}>
            <span className="text-xs" suppressHydrationWarning>
              {message.timestamp.toLocaleString()}
            </span>
            <br />
            <span className="font-bold text-base">
              {message.username + ": "}
            </span>
            <span className="text-base">{message.text}</span>
          </div>
        );
      })}

      <div ref={divRef} />
    </div>
  );
}
