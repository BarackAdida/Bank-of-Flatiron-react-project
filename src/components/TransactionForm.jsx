import React, { useState } from 'react';

const TransactionForm = ({ onSubmit }) => {
  const [formData, setFormData] = useState({
    date: '',
    description: '',
    category: '',
    amount: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(formData);
    setFormData({
      date: '',
      description: '',
      category: '',
      amount: ''
    });
  };

  return (
    <form onSubmit={handleSubmit}>
      <div id='formDiv'>
      <input
        type="date"
        name="date"
        placeholder="Date"
        value={formData.date}
        onChange={handleChange}
      />
      <input
        type="text"
        name="description"
        placeholder="Description"
        value={formData.description}
        onChange={handleChange}
      />
      <select
        name="category"
        value={formData.category}
        onChange={handleChange}
      >
        <option value="">Entertainment</option>
        <option value="Medical Bills">Medical Bills</option>
        <option value="Recreation">Recreation</option>
        <option value="Food">Food</option>
        <option value="Shopping">Shopping</option>
        <option value="Transportation">Transportation</option>
      </select>
      <input
        type="number"
        name="amount"
        placeholder="Amount"
        value={formData.amount}
        onChange={handleChange}
      />
      </div>
      <div id="addButton"><button type="submit">Add Transaction</button></div>
     
    </form>
  );
};

export default TransactionForm;