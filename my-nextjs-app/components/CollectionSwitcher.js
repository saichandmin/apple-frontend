export default function CollectionSwitcher({
  selectedCollection,
  onCollectionChange,
}) {
  const collections = ["Series 10", "Hermès", "SE"];

  return (
    <div className="collection-switcher">
      <h2>Select a Collection</h2>
      <select
        value={selectedCollection}
        onChange={(e) => onCollectionChange(e.target.value)}
      >
        {collections.map((collection) => (
          <option key={collection} value={collection}>
            {collection}
          </option>
        ))}
      </select>
    </div>
  );
}
