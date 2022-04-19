import "./body.css"


const Body = (props) => {
    // console.log(props.user);

    return (
        <tr className="trbody">
            <td>{props.user.name}</td>
            <td>{props.user.address}</td>
            <td>{props.user.age}</td>
            <td>{props.user.salary}</td>
            <td>{props.user.department}</td>
            <td>{props.user.married}</td>
        </tr>
    );
}

export { Body };