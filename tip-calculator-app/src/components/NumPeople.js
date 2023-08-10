export default function NumPeople({ numPeople, onNumPeopleChange }) {
  const inputClass =
    numPeople === 0 ? "num-people-input zero" : "num-people-input";
  const message = numPeople === 0 ? "Can't be zero" : "";
  return (
    <div className="num-people-container">
      <div className="flexbox">
        <h4 className="title">Number of People</h4>
        <p className="message">{message}</p>
      </div>
      <input
        className={inputClass}
        type="text"
        placeholder="0"
        onChange={onNumPeopleChange}
      />
    </div>
  );
}
