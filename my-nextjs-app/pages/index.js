import Link from "next/link";

export default function Home() {
  return (
    <div className="landing-page">
      <h1>Welcome to the Apple Watch Studio Clone</h1>
      <Link href="/studio">
        <a className="start-button">Start Customizing</a>
      </Link>
    </div>
  );
}
