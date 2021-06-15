import './ExpenseItem.css';

function ExpenseItem() {
    return (
        <div className="expense-item">
            <div>June 69 2021</div>
            <div className="expense-item__description">
                <h2>Some cool stuff</h2>
                <div className="expense-item__price">$300</div>
            </div>
        </div>
    );
}

export default ExpenseItem;