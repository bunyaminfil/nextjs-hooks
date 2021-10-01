import Link from "next/link";

export default function Home() {
  return (
    <div>
      <Link href="/books">
        <button>Books</button>
      </Link>
      <Link href="/users">
        <button>Users</button>
      </Link>
      <Link href="/vercel">
        <button>Vercel</button>
      </Link>
    </div>
  );
}
