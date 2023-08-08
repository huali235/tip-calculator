export default function Bill({ bill, onBillChange }) {
  return (
    <div className="bill-container">
      <h4>Bill</h4>
      <input
        className="bill-input"
        type="text"
        placeholder="0"
        value={bill}
        onChange={() => onBillChange}
      />
    </div>
  );
}
