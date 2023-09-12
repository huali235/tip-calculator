export default function TipAmounts({
  tip,
  onSetCustomTipChange,
  onTipAmountSelect,
}) {
  return (
    <div className="tip-btns">
      <button
        className={`btn-tip ${tip === 0.05 ? "selected" : ""}`}
        value="0.05"
        onClick={() => onTipAmountSelect(0.05)}
      >
        5%
      </button>
      <button
        className={`btn-tip ${tip === 0.1 ? "selected" : ""}`}
        value="0.1"
        onClick={() => onTipAmountSelect(0.1)}
      >
        10%
      </button>
      <button
        className={`btn-tip ${tip === 0.15 ? "selected" : ""}`}
        value="0.15"
        onClick={() => onTipAmountSelect(0.15)}
      >
        15%
      </button>
      <button
        className={`btn-tip ${tip === 0.25 ? "selected" : ""}`}
        value="0.25"
        onClick={() => onTipAmountSelect(0.25)}
      >
        25%
      </button>
      <button
        className={`btn-tip ${tip === 0.5 ? "selected" : ""}`}
        value="0.5"
        onClick={() => onTipAmountSelect(0.5)}
      >
        50%
      </button>
      <input
        type="text"
        placeholder="Custom"
        className="btn-tip btn-custom"
        onChange={onSetCustomTipChange}
      />
    </div>
  );
}
