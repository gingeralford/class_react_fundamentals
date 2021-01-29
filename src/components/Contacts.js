
const Contacts = (props) => {
    return (
        <div>
            <h3>Name: {props.name}</h3>
            <p>Age: {props.age}, School: {props.school}, Graduated: {props.graduationYear}</p>
        </div>
    )
}

export default Contacts;