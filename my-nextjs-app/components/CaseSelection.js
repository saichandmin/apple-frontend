export default function CaseSelection({ selectedCase, onCaseSelect }) {
  const cases = ["Aluminum", "Titanium", "Stainless Steel"];

  return (
    <div className="case-selection">
      <h2>Select a Case</h2>
      <div className="grid">
        {cases.map((item) => (
          <div
            key={item}
            className={`case-item ${selectedCase === item ? "selected" : ""}`}
            onClick={() => onCaseSelect(item)}
          >
            {item}
          </div>
        ))}
      </div>
    </div>
  );
}
