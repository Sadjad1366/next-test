const ProductDetails = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="bg-amber-400 p-4 h-10">
      {children}
      <h2> DetailFooter</h2>
    </div>
  );
};
export default ProductDetails;
