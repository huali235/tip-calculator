import TipAmounts from "./TipAmounts";

export default function SelectTip({
  tip,
  onSetCustomTipChange,
  onTipAmountSelect,
}) {
  return (
    <div className="select-tip-container">
      <h4 className="title">Select Tip %</h4>
      <TipAmounts
        tip={tip}
        onSetCustomTipChange={onSetCustomTipChange}
        onTipAmountSelect={onTipAmountSelect}
      />
    </div>
  );
}
