import { notFound } from "next/navigation";

function getRandomInt (count: number) {
  return Math.floor(Math.random() * count);
};
export default async function productReview({
  params,
}: {
  params: Promise<{ productId: string; reviewId: string }>;
}) {
  const random = getRandomInt(2);
    if(random === 1 ) throw new Error ("error loading review")
  const { productId, reviewId } = await params;
  if (parseInt(reviewId) > 1000) {
    notFound();
  }

  return (
    <div>
      review {reviewId} about product {productId}
    </div>
  );
}
