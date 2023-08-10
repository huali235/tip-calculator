export default function Results({ bill, numPeople, onReset }) {
  return (
    <div className="results-container">
      <div className="tip-result">
        <p>
          Tip Amount<br></br>
          <span className="light-shade">/ person</span>
        </p>
        <p className="amount">${bill}</p>
      </div>
      <div></div>
      <div className="total-result">
        <p>
          Total<br></br>
          <span className="light-shade">/ person</span>
        </p>
        <p className="amount">${numPeople}</p>
      </div>

      <button onClick={onReset}>Reset</button>
    </div>
  );
}
