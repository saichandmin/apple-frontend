export default function PriceDisplay({ price }) {
  return (
    <div className="price-display">
      <h2>Total Price</h2>
      <p>${price}</p>
    </div>
  );
}
