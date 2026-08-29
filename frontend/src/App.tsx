import { useEffect, useState } from "react";
import LoanCard from "./components/LoanCard";
import type { LoanProduct } from "./types/loan";

function App() {
  const [loans, setLoans] = useState<LoanProduct[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    async function loadLoans() {
      try {
        const response = await fetch("http://localhost:3000/api/loans");

        if (!response.ok) {
          throw new Error("Failed to fetch loans");
        }

        const data: LoanProduct[] = await response.json();
        setLoans(data);
      } catch (err) {
        setError("Could not load loans.");
      } finally {
        setLoading(false);
      }
    }

    loadLoans();
  }, []);

  if (loading) {
    return <p>Loading loans...</p>;
  }

  if (error) {
    return <p>{error}</p>;
  }

  return (
    <main>
      <h1>LoanMe</h1>
      <h2>Personal Loans</h2>

      {loans.map((loan) => (
        <LoanCard key={loan.id} loan={loan} />
      ))}
    </main>
  );
}

export default App;