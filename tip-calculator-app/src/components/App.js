import Bill from "./Bill";
import NumPeople from "./NumPeople";
import Results from "./Results";
import SelectTip from "./SelectTip";

export default function App() {
  return (
    <div className="app">
      <div className="container">
        <div className="details">
          <Bill />
          <SelectTip />
          <NumPeople />
        </div>
        <div className="results">
          <Results />
        </div>
      </div>
    </div>
  );
}
