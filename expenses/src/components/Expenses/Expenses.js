import React, { useState } from "react";
import "./Expenses.css";
import Expenseitem from "./Expenseitem";
import * as ReactDOM from "react-dom";
// import Expenseitem from "./components/Expenseitem";
import Card from "../UI/Card";
import ExpensesFilter from "./ExpensesFilter";

function Expenses(props) {
  const [filteredYear, setFilteredYear] = useState("2020");
  const filterChangeHandler = (seletedYear) => {
    setFilteredYear(seletedYear);
  };
const filteredExpenses = props .item.filter( expense =>{
  return expense.date.getFullYear().toString()===filteredYear;
})
  
  return (
    <div>
      <Card className='expenses'>
       <ExpensesFilter
          selected={filteredYear}
          onChangeFilter={filterChangeHandler}
        /> 
        {filteredExpenses.map((expense) => (
         <Expenseitem
          key = {expense.id}
           title={expense.title}
           amount={expense.amount}
           date={expense.date}
         />
       ))} 
        
      </Card>
    </div>
  );
}
export default Expenses;
