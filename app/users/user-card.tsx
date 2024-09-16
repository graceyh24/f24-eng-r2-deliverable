"use client";

import type { Database } from "@/lib/schema";

export type User = Database["public"]["Tables"]["profiles"]["Row"];

//pass in both user data and the current user ID, which we will use to highlight current user
interface UserCardProps {
  user: User;
  userId: string;
}

export default function UserCard({ user, userId }: UserCardProps) {
  return (
    //*Highlights the user card of the current user that is in session
    <div
      className={
        userId == user.id
          ? "m-4 w-72 min-w-72 flex-none rounded border-2 border-current p-3 shadow"
          : "m-4 w-72 min-w-72 flex-none rounded border-2 p-3 shadow"
      }
    >
      <h3 className="mt-3 text-2xl font-semibold">{user.display_name}</h3>
      <h4 className="text-lg font-light">{user.email}</h4>
      <p>{user.biography}</p>
    </div>
  );
}
