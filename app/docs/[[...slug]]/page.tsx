import { notFound } from "next/navigation";

export default async function Docs({
  params,
}: {
  params: Promise<{ slug: string[] }>;
}) {
  const { slug } = await params;
  if(slug?.length > 2) return notFound();
  if (slug?.length === 2) {
    return (
      <h1>
        review Docs for {slug[0]} with {slug[1]}
      </h1>
    );
  } else if (slug?.length === 1) {
    return <h1>review Docs for {slug[0]}</h1>;
  }
}
