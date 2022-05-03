import { useState } from "react";
import Card from "../UI/Card";
import "./Expenses.css";
import ExpensesFilter from "./ExpensesFilter";
import ExpensesList from "./ExpensesList";
import ExpensesChart from "../NewEpense/ExpensesChart";
function Expenses(props) {
  const [year, setYear] = useState("2022");
  const onYearChangeHandler = (newYear) => {
    setYear(newYear);
  };

  const filterExpenses = props.items.filter((ele) => {
    return ele.date.toLocaleString("en-Us", { year: "numeric" }) === year;
  });

  

  return (
    <div>
      <Card className="expenses">
        <ExpensesFilter selected={year} onYearChange={onYearChangeHandler} />
          <ExpensesChart expenses={filterExpenses}/>
        <ExpensesList items={filterExpenses}/>
      </Card>
    </div>
  );
}

export default Expenses;
