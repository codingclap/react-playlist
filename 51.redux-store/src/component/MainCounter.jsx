import { useDispatch, useSelector } from "react-redux";
import { increment, decrement } from "../features/counterSlice";

export default function MainCounter() {
    const count = useSelector((state) => state.counter.value)
    console.log(count)
    const dispatch = useDispatch();
    return (
        <>
            {
                <div className="counter-container">
                    <h1>Counter</h1>
                    <div id="count-display" className="counter-display">{count}</div>
                    <div className="button-group">
                        <button className="counter-button increment" onClick={() => dispatch(increment())}>Increment</button>
                        <button className="counter-button decrement" onClick={() => dispatch(decrement())}>Decrement</button>
                    </div>
                </div>
            }
        </>
    )
}