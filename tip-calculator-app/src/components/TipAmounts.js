export default function TipAmounts() {
  return (
    <div className="tip-btns">
      <button className="btn-tip">5%</button>
      <button className="btn-tip">10%</button>
      <button className="btn-tip">15%</button>
      <button className="btn-tip">25%</button>
      <button className="btn-tip">50%</button>
      <input type="text" placeholder="Custom" className="btn-tip btn-custom" />
    </div>
  );
}
