
import { Link } from 'react-router-dom'
import "./itemLink.css"

interface props {
  link: string;
  name: string;
}

export default function ItemLink(props: props) {
  return (
    <Link to={props.link}>
    <div className='d-flex item-name animated-text'>
      {props.name}
    </div>
    </Link>
  )
}
