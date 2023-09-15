import logo from "../assets/logo.png";
import "./loadingScreen.css";
const LoadingScreen = () => {
  return (
    <div className='loading-screen-container'>
      <div className='logo-container'>
        <img src={logo} />
      </div>
      <div className='loading-circle-container'>
        <div className="loading-circle"></div>
        <div className="loading-circle"></div>
        <div className="loading-circle"></div>
      </div>
    </div>
  )
}

export default LoadingScreen
