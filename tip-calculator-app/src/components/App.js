import Bill from "./Bill";
import SelectTip from "./SelectTip";

export default function App() {
  return (
    <div className="app">
      <div className="container">
        <div className="details">
          <Bill />
          <SelectTip />
        </div>
      </div>
    </div>
  );
}
