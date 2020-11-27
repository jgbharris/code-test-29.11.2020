import React, { useState, useEffect } from "react";
import "./styles.css";
import Card from "react-credit-cards";
import Transaction from "./Transaction.js";
import UserCard from "./UserCard.js";
import "react-credit-cards/es/styles-compiled.css";

export default function App() {
    const [data, setData] = useState([]);
    // const [filter, setFilter] = useState(false);


    useEffect(() => {
        fetch("https://www.mocky.io/v2/5c62e7c33000004a00019b05")
            .then((response) => response.json())
            .then((data) => setData(data));
    }, []);

    let transactions = data.transactions;
    console.log("transactions");
    console.log(transactions);
    console.log(typeof transactions);

    let transactionsSorted = transactions
        ? transactions.sort(function (a, b) {
            return b.amount.value - a.amount.value;
        })
        : null;

    console.log("transactionsSorted");
    console.log(transactionsSorted);

    let smallestExpenses = transactionsSorted
        ? transactionsSorted.slice(Math.max(transactionsSorted.length - 5, 1))
        : null;

    console.log("smallestExpenses");
    console.log(smallestExpenses);

    return (
        <div className="App">
            <UserCard />
            <Card
                name="John Smith"
                number="**** **** **** 7048"
                expiry="10/20"
                cvc="737"
                preview={true}
                issuer="visa"
            />

            {transactionsSorted && transactionsSorted
                ? transactionsSorted.map((transaction, index) => (
                    <Transaction
                        key={index}
                        category={transaction.category_title}
                        date={transaction.date}
                        amount={`${transaction.amount.currency_iso}  ${transaction.amount.value}`}
                        description={transaction.description}
                    />
                ))
            : null}
        </div>
    );
}
