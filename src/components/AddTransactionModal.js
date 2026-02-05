import { useState } from "react";
import { addTransaction } from "../services/api";

export default function AddTransactionModal({ closeModal }) {
  const [type, setType] = useState("income");

  const [form, setForm] = useState({
    amount: "",
    category: "",
    division: "personal",
    description: "",
    account: "Cash",
  });

  const submit = async () => {
    console.log("Submitting type:", type);

    if (!form.amount || !form.category) {
      alert("Please fill all fields");
      return;
    }

    await addTransaction({
      ...form,
      type,
      amount: Number(form.amount),
    });

    if (typeof closeModal === "function") {
      closeModal();
    }

    window.location.reload();
  };

  return (
    <div className="space-y-2">
      {/* TYPE SELECT */}
      <select
        className="border p-2 w-full"
        value={type}
        onChange={(e) => setType(e.target.value)}
      >
        <option value="income">Income</option>
        <option value="expense">Expense</option>
      </select>

      {/* AMOUNT */}
      <input
        type="number"
        placeholder="Amount"
        className="border p-2 w-full"
        onChange={(e) => setForm({ ...form, amount: e.target.value })}
      />

      {/* CATEGORY */}
      <input
        placeholder="Category"
        className="border p-2 w-full"
        onChange={(e) => setForm({ ...form, category: e.target.value })}
      />

      {/* ADD BUTTON */}
      <button
        onClick={submit}
        className="px-4 py-2 bg-indigo-600 text-white rounded w-full"
      >
        Add
      </button>
    </div>
  );
}
