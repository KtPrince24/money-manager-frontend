import { useEffect, useState } from "react";
import { getTransactions } from "../services/api";

export default function Dashboard() {
  const [filter, setFilter] = useState("month");
  const [income, setIncome] = useState(0);
  const [expense, setExpense] = useState(0);

  useEffect(() => {
    getTransactions(filter).then((data) => {
      if (!Array.isArray(data)) return;
      
      let inc = 0;
      let exp = 0;

      data.forEach((t) => {
        if (t.type === "income") inc += t.amount;
        else exp += t.amount;
      });

      setIncome(inc);
      setExpense(exp);
    });
  }, [filter]);

  return (
    <div className="space-y-4">
      {/* Time Filter */}
      <select
        value={filter}
        onChange={(e) => setFilter(e.target.value)}
        className="border p-2 rounded"
      >
        <option value="week">Weekly</option>
        <option value="month">Monthly</option>
        <option value="year">Yearly</option>
      </select>

      {/* Dashboard Cards */}
      <div className="grid grid-cols-3 gap-4">
        <div className="bg-green-500 text-white p-4 rounded">
          Income: ₹{income}
        </div>

        <div className="bg-red-500 text-white p-4 rounded">
          Expense: ₹{expense}
        </div>

        <div className="bg-blue-500 text-white p-4 rounded">
          Balance: ₹{income - expense}
        </div>
      </div>
    </div>
  );
}
