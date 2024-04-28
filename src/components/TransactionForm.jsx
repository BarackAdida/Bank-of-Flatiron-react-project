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
    <div>
        <div id='div1'>
        <form onSubmit={handleSubmit}>
            <input type="date" name="date" placeholder="Date" value={formData.date} onChange={handleChange}/>
            <input type="text" name="description" placeholder="Description" value={formData.description} onChange={handleChange} />
            <input type="text" name="description" placeholder="Cartegory"  value={formData.description} onChange={handleChange} />
            <input type="number" name="amount" placeholder="Amount" value={formData.amount} onChange={handleChange}  />
        </form>  
      </div>
      <div id='divbutton'>
        <button type="submit">Add Transaction</button>
      </div>
  </div>
  );
};

export default TransactionForm;