export default function FunstionProp({ btn, count, onClickHandler }) {

    return (
        <>
            <div style={{ textAlign: "center" }}>
                <p>{count}</p>
                <button onClick={onClickHandler}>{btn}</button>
            </div>
             
        </>
    )
}