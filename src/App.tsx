import "./App.css";
import Star from "./components/ui/Star";

function App() {
  return (
    <div className="flex flex-col gap-24 justify-center items-center -translate-y-24">
      <h1 className="">Star Rating Component</h1>
      <main>
        <Star />
      </main>
    </div>
  );
}

export default App;
