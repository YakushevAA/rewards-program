import React, { useState, useEffect } from 'react';
import { CustomersList } from './components/CustomersList';
import { fetchTransactions } from './api/mockApi';
import { Loader } from './components/common/Loader';
import './App.css';

function App() {
  const [transactions, setTransactions] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const loadData = async () => {
      try {
        const data = await fetchTransactions();
        setTransactions(data);
        setLoading(false);
      } catch (err) {
        setError(err);
        setLoading(false);
      }
    };

    loadData();
  }, []);

  if (loading) {
    return <Loader />;
  }

  if (error) {
    return <div className="error">Error: {error}</div>;
  }

  return (
    <div className="App">
      <h1>Rewards Program</h1>
      {error ?
        <div className="error">Error: {error}</div> :
        <CustomersList transactions={transactions} />
      }
    </div>
  );
}

export default App;
