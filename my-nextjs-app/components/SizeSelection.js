export default function SizeSelection({ selectedSize, onSizeSelect }) {
  const sizes = ["42mm", "46mm"];

  return (
    <div className="size-selection">
      <h2>Select a Size</h2>
      <div className="toggle">
        {sizes.map((size) => (
          <button
            key={size}
            className={selectedSize === size ? "active" : ""}
            onClick={() => onSizeSelect(size)}
          >
            {size}
          </button>
        ))}
      </div>
    </div>
  );
}
