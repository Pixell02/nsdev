
import useLanguage from "../../../hooks/useLanguage";
import "./mailbutton.css";

const MailButton = () => {
    const email = 'biuro@ns-devstudio.pl';
    const {currentLanguage} = useLanguage()
  return (
    <div className="button-container">
      <a className="button" href={`mailto:${email}`}>{currentLanguage === "pl" ? "Napisz do mnie" : "Write to me"}</a>
    </div>
  )
}

export default MailButton
