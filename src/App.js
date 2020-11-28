import React, { useState, useEffect } from "react";
import "./styles.css";
import Card from "react-credit-cards";
import Transaction from "./Transaction.js";
import UserCard from "./UserCard.js";
import "react-credit-cards/es/styles-compiled.css";

export default function App() {
    const [data, setData] = useState([]);
    const [filter, setFilter] = useState(false);


    useEffect(() => {
        fetch("https://www.mocky.io/v2/5c62e7c33000004a00019b05")
            .then((response) => response.json())
            .then((data) => setData(data));
    }, []);

    let transactions = data.transactions;

    const transactionsSortedDate = transactions ? transactions.sort(function compare(a, b) {
        var dateA = new Date(a.date);
        var dateB = new Date(b.date);
        return dateB - dateA;
    }) : null;

     console.log("transactionsSortedDate");
    console.log(transactionsSortedDate);

    let transactionsClone = [...transactions]


 console.log("transactionsClone")
    console.log(transactionsClone)

    const transactionsSortedAmount = transactionsClone ? transactionsClone.sort(function compare(a, b) {
        var amountA = Number(a.amount.value)
        var amountB = Number(b.amount.value)
        return amountA - amountB;
    }) : null;

    
    console.log("transactionsSortedAmount");
    console.log(transactionsSortedAmount);
    // console.log("transactionsSortedDate");
    // console.log(transactionsSortedDate);

    let smallestExpenses = transactionsClone
        ? transactionsClone.slice(Math.max(transactionsClone.length - 10, 1))
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

            <button onClick={() => setFilter(false)}>SHOW ALL</button>
            <button onClick={() => setFilter(true)}>TOGGLE 10 SMALLEST</button>

            {transactionsSortedDate && !filter
                ? transactionsSortedDate.map((transaction, index) => (
                    <Transaction
                        key={index}
                        category={transaction.category_title}
                        date={transaction.date}
                        amount={`${transaction.amount.currency_iso}  ${transaction.amount.value}`}
                        description={transaction.description}
                    />
                ))
                : null}

            {smallestExpenses && filter
                ? smallestExpenses.map((transaction, index) => (
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
