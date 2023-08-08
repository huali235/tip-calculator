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
    setBill(e.target.value);
  }

  function handleNumPeopleChange(e) {
    setNumPeople(e.target.value);
  }

  function handleTipChange(e) {
    setTip(e.target.value);
  }
  return (
    <div className="app">
      <div className="container">
        <div className="details">
          <Bill bill={bill} onBillChange={handleBillChange} />
          <SelectTip tip={tip} onSetTipChange={handleTipChange} />
          <NumPeople
            numPeople={numPeople}
            onNumPeopleChange={handleNumPeopleChange}
          />
        </div>
        <div className="results">
          <Results bill={bill} numPeople={numPeople} />
        </div>
      </div>
    </div>
  );
}
