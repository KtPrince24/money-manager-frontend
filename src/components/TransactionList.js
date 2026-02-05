import { useEffect, useState } from "react";
import { getTransactions } from "../services/api";

export default function TransactionList() {
  const [list, setList] = useState([]);

  useEffect(() => {
    getTransactions("month").then((data) => {
      if (Array.isArray(data)) setList(data);
      else setList([]);
    });
  }, []);

  return (
    <table className="w-full mt-4">
      <thead>
        <tr className="border-b">
          <th className="text-left">Type</th>
          <th className="text-left">Category</th>
          <th className="text-left">Amount</th>
        </tr>
      </thead>
      <tbody>
        {list.map((t) => (
          <tr key={t._id} className="border-b">
            <td>{t.type}</td>
            <td>{t.category}</td>
            <td className={t.type === "income" ? "text-green-600" : "text-red-600"}>
              ₹{t.amount}
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}
