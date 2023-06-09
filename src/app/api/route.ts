import { Message } from "@/types/types";
import { PrismaClient } from "@prisma/client";
import { NextRequest, NextResponse } from "next/server";

const prisma = new PrismaClient();
export async function POST(req: NextRequest) {
  const jsonData = await req.json();
  const newMessage = await prisma.message.create({ data: jsonData });
  return NextResponse.json(newMessage);
}

export async function GET() {
  const data = await prisma.message.findMany();
  return NextResponse.json(data);
}
