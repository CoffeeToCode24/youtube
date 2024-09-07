import { Suspense, use } from "react";
import { Profile } from "./component/profile";

export default function Home() {
  const profiles = fetch("http://localhost:3000/profile").then((r) => r.json());
  return (
    <Suspense fallback={<div>Loading</div>}>
      <Profile data={profiles} />
    </Suspense>
  );
}
