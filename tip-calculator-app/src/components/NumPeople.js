export default function NumPeople({ numPeople, onNumPeopleChange }) {
  return (
    <div className="num-people-container">
      <h4>Number of People</h4>
      <input
        className="num-people-input"
        type="text"
        placeholder="0"
        value={numPeople}
        onChange={() => onNumPeopleChange()}
      />
    </div>
  );
}
