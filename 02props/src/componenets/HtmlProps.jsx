export default function HtmlProps(props) {
    return (
        <>
            <div>
                {props.children}

            </div>
            <hr style={{ border: '1px solid black', width: "100%" }} />
        </>
    )
}