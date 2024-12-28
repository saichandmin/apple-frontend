import { useState } from "react";
import CaseSelection from "../components/CaseSelection";
import SizeSelection from "../components/SizeSelection";
import BandSelection from "../components/BandSelection";
import PriceDisplay from "../components/PriceDisplay";
import CollectionSwitcher from "../components/CollectionSwitcher";
import PreviewDisplay from "../components/PreviewDisplay";

export default function Studio() {
  const [selectedCase, setSelectedCase] = useState(null);
  const [selectedSize, setSelectedSize] = useState(null);
  const [selectedBand, setSelectedBand] = useState(null);
  const [selectedCollection, setSelectedCollection] = useState("Series 10");
  const [price, setPrice] = useState(399); // Default base price

  const updatePrice = () => {
    let basePrice = 399;
    if (selectedCase === "Titanium") basePrice += 100;
    if (selectedSize === "46mm") basePrice += 50;
    if (selectedBand?.type === "Premium") basePrice += 75;
    setPrice(basePrice);
  };

  return (
    <div className="studio-container">
      <CollectionSwitcher
        selectedCollection={selectedCollection}
        onCollectionChange={setSelectedCollection}
      />
      <PreviewDisplay
        selectedCase={selectedCase}
        selectedSize={selectedSize}
        selectedBand={selectedBand}
      />
      <CaseSelection
        selectedCase={selectedCase}
        onCaseSelect={setSelectedCase}
      />
      <SizeSelection
        selectedSize={selectedSize}
        onSizeSelect={setSelectedSize}
      />
      <BandSelection
        selectedBand={selectedBand}
        onBandSelect={setSelectedBand}
      />
      <PriceDisplay price={price} />
    </div>
  );
}
