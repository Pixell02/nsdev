
interface props {
  src: string
}

const LogoBlock = (props: props) => {
  return (
    <div>
      <img src={props.src} alt='image' />
    </div>
  )
}

export default LogoBlock
