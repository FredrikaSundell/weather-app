import './Heading.css'

function Heading(props) {
  console.log(props)
  return <h1 className="Heading">{props.text}</h1>
}

export default Heading
