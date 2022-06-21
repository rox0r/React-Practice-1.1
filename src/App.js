import Expenses from "./components/Expenses";

function App() {
  const expenses = [
    {
      id: "e1",
      title: "Car Insurance",
      amount: 125.0,
      date: new Date(2022, 6, 21),
    },
    {
      id: "e2",
      title: "Car Service",
      amount: 100.0,
      date: new Date(2022, 5, 15),
    },
  ];

  return (
    <div>
      <h2>Let's get started!</h2>
      <Expenses expenses={expenses} />
    </div>
  );
}

export default App;
