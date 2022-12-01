function FuncProps(props){
    return(
        <div>
            <h1>From functional component</h1>
            {props.carname} {props.year}
        </div>
    )
}
export default FuncProps