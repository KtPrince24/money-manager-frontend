import { useState } from "react";
import Dashboard from "./components/Dashboard";
import AddTransactionModal from "./components/AddTransactionModal";
import TransactionList from "./components/TransactionList";

function App() {
  const [open, setOpen] = useState(false);

  return (
    <div className="min-h-screen bg-gray-100 p-6 space-y-6 relative">
      <h1 className="text-3xl font-bold text-center">💰 Money Manager</h1>

      <Dashboard />

      <div className="bg-white p-4 rounded shadow">
        <h2 className="text-xl font-semibold mb-2">Transaction History</h2>
        <TransactionList />
      </div>

      
      <button
        onClick={() => setOpen(true)}
        className="fixed bottom-6 right-6 bg-indigo-600 text-white w-14 h-14 rounded-full text-3xl shadow-lg"
      >
        +
      </button>

      {/* Modal */}
      {open && (
        <AddTransactionModal closeModal={() => setOpen(false)} />
      )}
    </div>
  );
}

export default App;
