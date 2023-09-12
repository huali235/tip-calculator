export default function Results({ bill, numPeople, tip, onReset }) {
  let tipAmountPerson = 0.0;
  let totalAmountPerson = 0.0;

  if (bill && numPeople && tip) {
    tipAmountPerson = (bill * tip) / numPeople;
    totalAmountPerson = (bill * tip + bill) / numPeople;
  }
  return (
    <div className="results-container">
      <div className="tip-result">
        <p>
          Tip Amount<br></br>
          <span className="light-shade">/ person</span>
        </p>
        <p className="amount">${tipAmountPerson.toFixed(2)}</p>
      </div>
      <div></div>
      <div className="total-result">
        <p>
          Total<br></br>
          <span className="light-shade">/ person</span>
        </p>
        <p className="amount">${totalAmountPerson.toFixed(2)}</p>
      </div>

      <button onClick={onReset}>Reset</button>
    </div>
  );
}
