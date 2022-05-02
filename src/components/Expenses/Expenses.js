import Card from "../UI/Card";
import ExpenseItem from "./ExpenseItem";
import "./Expenses.css";

function Expenses(props) {
  return (
    <Card className="expenses">
      {props.items.map((ele) => {
        return (
          <ExpenseItem
            key={ele.id}
            title={ele.title}
            amount={ele.amount}
            date={ele.date}
          />
        );
      })}
    </Card>
  );
}

export default Expenses;
