import React ,{useState} from "react";
import "./App.css";
import "./components/Expenses/Expenseitem";
//import Expenseitem from "../components/Expenseitem";
 import Expenses from "./components/Expenses/Expenses";
 import NewExpense from "./components/NewExpense/NewExpense";
 const Dummy_item = [
  {
    id: "e1",
    title: "Toilet Paper",
    amount: 94.12,
    date: new Date(2020, 7, 14),
  },
  { id: "e2", title: "New TV", amount: 799.49, date: new Date(2021, 2, 12) },
  {
    id: "e3",
    title: "Car Insurance",
    amount: 294.67,
    date: new Date(2021, 2, 28),
  },
  {
    id: "e4",
    title: "New Desk (Wooden)",
    amount: 450,
    date: new Date(2021, 5, 12),
  },
];
function App() {
  
 
  const [expenses ,  setExpenses] = useState(Dummy_item)
  const addExpenseHandler = expense =>{
    console.log("app")
    console.log(expense)
    setExpenses((prevExpenses) => {
      const updated =[expense ,...prevExpenses]
      return updated;
    });
      
 
  }
  return (
    <div >
      <NewExpense onAddExpense ={addExpenseHandler}/>
      <Expenses item ={expenses}></Expenses>
      
      
    
      
    </div>
  );
}

export default App;
