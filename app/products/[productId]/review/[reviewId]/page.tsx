export default async function productReview ({params}: {params: Promise<{productId:string; reviewId:string;}>}) {
      const{productId, reviewId } = await params;

      return (
            <div>
                  review {reviewId} about product {productId}
            </div>
      )
}
