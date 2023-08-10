export default function TipAmounts({ tip, onSetTipChange }) {
  return (
    <div className="tip-btns">
      <button
        className={`btn-tip ${tip === 0.05 ? "selected" : ""}`}
        value="0.05"
        onClick={onSetTipChange}
      >
        5%
      </button>
      <button
        className={`btn-tip ${tip === 0.1 ? "selected" : ""}`}
        value="0.1"
        onClick={onSetTipChange}
      >
        10%
      </button>
      <button
        className={`btn-tip ${tip === 0.15 ? "selected" : ""}`}
        value="0.15"
        onClick={onSetTipChange}
      >
        15%
      </button>
      <button
        className={`btn-tip ${tip === 0.25 ? "selected" : ""}`}
        value="0.25"
        onClick={onSetTipChange}
      >
        25%
      </button>
      <button
        className={`btn-tip ${tip === 0.5 ? "selected" : ""}`}
        value="0.5"
        onClick={onSetTipChange}
      >
        50%
      </button>
      <input type="text" placeholder="Custom" className="btn-tip btn-custom" />
    </div>
  );
}
