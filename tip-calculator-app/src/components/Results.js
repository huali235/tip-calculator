export default function Results() {
  return (
    <div className="results-container">
      <div className="tip-result">
        <p>
          Tip Amount<br></br>
          <span className="light-shade">/ person</span>
        </p>
        <p className="amount">$0.00</p>
      </div>
      <div></div>
      <div className="total-result">
        <p>
          Total<br></br>
          <span className="light-shade">/ person</span>
        </p>
        <p className="amount">$0.00</p>
      </div>

      <button>Reset</button>
    </div>
  );
}
