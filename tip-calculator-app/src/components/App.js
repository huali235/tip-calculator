import Bill from "./Bill";
import NumPeople from "./NumPeople";
import Results from "./Results";
import SelectTip from "./SelectTip";
import { useState } from "react";

export default function App() {
  const [bill, setBill] = useState("");
  const [numPeople, setNumPeople] = useState("");
  const [tip, setTip] = useState(0);

  function handleBillChange(e) {
    const value = e.target.value;
    const newBill = value === "" ? "" : parseFloat(value);
    setBill(newBill);
  }

  function handleNumPeopleChange(e) {
    const value = e.target.value;
    const newNumPeople = value === "" ? "" : parseFloat(value);
    setNumPeople(newNumPeople);
  }

  function handleCustomTipChange(e) {
    const value = e.target.value;
    setTip(value * 0.01);
  }

  function handleTipAmountSelect(tipAmount) {
    setTip(tipAmount);
  }

  function handleReset() {
    setBill("");
    setNumPeople("");
    setTip(0);
  }
  return (
    <div className="app">
      <div className="container">
        <div className="details">
          <Bill bill={bill} onBillChange={handleBillChange} />
          <SelectTip
            tip={tip}
            onSetCustomTipChange={handleCustomTipChange}
            onTipAmountSelect={handleTipAmountSelect}
          />
          <NumPeople
            numPeople={numPeople}
            onNumPeopleChange={handleNumPeopleChange}
          />
        </div>
        <div className="results">
          <Results
            bill={bill}
            numPeople={numPeople}
            tip={tip}
            onReset={handleReset}
          />
        </div>
      </div>
    </div>
  );
}
