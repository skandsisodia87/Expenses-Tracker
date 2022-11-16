import React,{useState,useContext} from 'react'
import { GlobalContext } from '../context/GlobalState'

const AddTransaction = () => {

    const {addTransaction}=useContext(GlobalContext);

    const [text, setText] = useState('')
    const [amount, setAmount] = useState('')

    const onSubmit=(e)=>{
        e.preventDefault();

        const newTransaction={
            id: Math.floor(Math.random()*100000000),
            text,
            amount:+amount
        }
        addTransaction(newTransaction)
        setText("")
        setAmount("")
    }

    return (
        <>
            <h3>Add new Transaction</h3>
            <form onSubmit={onSubmit}>
                <div className="form-control">
                    <label htmlFor="text">Text</label>
                    <input type="text" value={text} onChange={(e)=>{setText(e.target.value)}} placeholder='Enter text.....' />
                </div>
                <div className="form-control">
                    <label htmlFor="text">Amount <br /> (nagative - expense , positive + expense)</label>
                    <input type="number" value={amount} onChange={(e)=>{setAmount(e.target.value)}} placeholder='Enter amount.....' />
                </div>
                <button className="btn">Add Transaction</button>
            </form>
        </>
    )
}

export default AddTransaction
