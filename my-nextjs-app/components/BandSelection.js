export default function BandSelection({ selectedBand, onBandSelect }) {
  const bands = [
    { name: "Solo Loop", type: "Standard" },
    { name: "Braided Solo Loop", type: "Premium" },
    { name: "Sport Band", type: "Standard" },
  ];

  return (
    <div className="band-selection">
      <h2>Select a Band</h2>
      <div className="carousel">
        {bands.map((band) => (
          <div
            key={band.name}
            className={`band-item ${
              selectedBand?.name === band.name ? "selected" : ""
            }`}
            onClick={() => onBandSelect(band)}
          >
            {band.name}
          </div>
        ))}
      </div>
    </div>
  );
}
