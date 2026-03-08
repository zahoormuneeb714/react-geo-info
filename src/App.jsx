import React, { useState } from 'react';
import "./App.css";
import "./Customization.css";

const App = () => {

    const [count, setCount] = useState(0);
    const [msg, setMsg] = useState(undefined);
    const [upperLimit, setUpperLimit] = useState(15);

    function handleIncrement() {
        if (count < upperLimit) {
            setCount(count + 1);
            setMsg("Counter incremented")
        } else {
            setMsg("you cannot increment counter over 10")
        }
    }
    function handleDecrement() {
        if (count > 0) {
            setCount(count - 1);
            setMsg("Counter Decremented")
        } else {
            setMsg("You cannot decrement counter less than 0")
        }
    }
    function handleReset() {
        setCount(0);
        setMsg("Counter Reset Successfully")
    }

    function handleCustomization(params) {

    }

    return (
        <div className='counter-app'>

            <fieldset>
                <legend>Customizations</legend>
                <div className="formgroup">
                    <label htmlFor="">Set Upper Limiit</label>
                    <input type="text" placeholder='Set Upper Limit' />
                </div>

                <button className='btn btn-save-changes' onClick={handleCustomization}>Save Changes</button>
            </fieldset>

            <h1 className='count'>{count}</h1>

            <div className='functions'>
                <Button type="increment" onClickHandler={handleIncrement} />
                <Button type="decrement" onClickHandler={handleDecrement} />
                <Button type="reset" onClickHandler={handleReset} />
            </div>

            <p className='msg' style={{ display: (!msg ? "none" : "block") }}>{msg}</p>
        </div>
    )
}



const Button = ({ type, onClickHandler }) => {
    return (
        <button className={`btn btn-${type}`} onClick={onClickHandler}>{type}</button>
    )
}

export default App
