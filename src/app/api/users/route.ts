import axios from "axios";
import { NextApiRequest } from "next";
import { NextResponse } from "next/server";

import { z } from "zod";
const users = [
  {
    id: 1,
    name: "Leanne Graham",
    username: "Bret",
    email: "test@gmail.com",
  },
  {
    id: 2,
    name: "Ervin Howell",
    username: "Antonette",
    email: "test2@gmail.com",
  },
];

const userSchema = z.object({
  name: z.string().min(3).max(50),
});
export async function GET(request: NextApiRequest) {
  try {
    return NextResponse.json(users);
  } catch (error: any) {
    return NextResponse.json(error, { status: 500 });
  }
}

export async function POST(request: Request) {
  try {
    const data = await request.json();

    const validatedData = userSchema.parse(data);

    const newUser: any = {
      id: users.length + 1,
      ...validatedData,
    };

    users.push(newUser);

    return NextResponse.json(newUser, { status: 201 });
  } catch (error) {
    return NextResponse.json(error, { status: 500 });
  }
}

export async function PUT(request: Request) {
  try {
    const data = await request.json();
    const index = users.findIndex((user) => user.id === data.id);

    if (index === -1) {
      return NextResponse.json({ message: "User not found" }, { status: 404 });
    }

    users[index] = data;

    return NextResponse.json(data, { status: 200 });
  } catch (error) {
    return NextResponse.json(error, { status: 500 });
  }
}

export async function DELETE(request: Request) {
  try {
    const { searchParams }: any = new URL(request.url);
    const id = parseInt(searchParams.get("id"));
    const index = users.findIndex((user) => user.id === id);

    if (index === -1) {
      return NextResponse.json({ message: "User not found" }, { status: 404 });
    }
    let user = users.splice(index, 1);
    return NextResponse.json(user, { status: 200 });
  } catch (error) {
    return NextResponse.json(error, { status: 500 });
  }
}
