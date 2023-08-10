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
        type="text"
        placeholder="0"
        value={bill}
        onChange={onBillChange}
      />
    </div>
  );
}
