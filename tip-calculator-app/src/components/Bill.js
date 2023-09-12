export default function Bill({ bill, onBillChange }) {
  const inputClass = bill === 0 ? "bill-input zero" : "bill-input";
  const message = bill === 0 ? "Can't be zero" : "";
  return (
    <div className="bill-container">
      <div className="flexbox">
        <h4 className="title">Bill</h4>
        <p className="message">{message}</p>
      </div>
      <input
        className={inputClass}
        type="number"
        placeholder="0"
        min="0"
        step="0.01"
        value={bill}
        onChange={onBillChange}
      />
    </div>
  );
}
