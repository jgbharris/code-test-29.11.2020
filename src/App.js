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

    const  transactions = data.transactions;

    


    // let transactionsSortedCategory = transactions ? transactions.sort(function (a, b) {
    //     // return a.category_title - b.category_title
    //     return a["category_title"] - b["category_title "]
    // }) : null;

    // console.log("transactionsSortedCategory");
    // console.log(transactionsSortedCategory);


    const transactionsSortedDate = transactions ? transactions.sort(function compare(a, b) {
        var dateA = new Date(a.date);
        var dateB = new Date(b.date);
        return dateB - dateA;
    }) : null;

    const transactionsSortedAmount = transactions ? transactions.sort(function compare(a, b) {
        var dateA = Number(a.amount.value)
        var dateB = Number(b.amount.value)
        return dateA - dateB;
    }) : null;

    
    console.log("transactionsSortedAmount");
    console.log(transactionsSortedAmount);
    console.log("transactionsSortedDate");
    console.log(transactionsSortedDate);

    let smallestExpenses = transactionsSortedAmount
        ? transactionsSortedAmount.slice(Math.max(transactions.length - 10, 1))
        : null;

    // console.log("smallestExpenses");
    // console.log(smallestExpenses);


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
