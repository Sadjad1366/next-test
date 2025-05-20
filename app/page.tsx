import Link from "next/link";

export default function Home() {
  return (
  <>
   <h1>This is Home Page</h1>
   <Link className="underline text-blue-400" href='/products'>products</Link>
   <Link className="underline text-blue-400" href='/dashboard' replace>dashboard</Link>
  </>
  );
}
