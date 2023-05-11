const Subtotal = (props) => {
const subtotal = props.items.reduce((acc,cur) => {
    return acc + cur.cost * cur.amount
}, 0)

    return <div><h3><strong>Subtotal:</strong> ${subtotal}</h3></div>
}

export default Subtotal