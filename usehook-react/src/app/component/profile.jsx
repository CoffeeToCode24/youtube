"use client";
import { use } from "react";

export const Profile = ({ data }) => {
  const profileData = use(data);
  return (
    <div>
      {profileData.map((p, i) => (
        <div key={i}>{p.name}</div>
      ))}
    </div>
  );
};
