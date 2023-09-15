import React  from "react";
import "./contentContainer.css"


const ContentContainer= ({children} : {children: React.ReactNode}) => {
  return (
    <div className="content-container">
      {children}
    </div>
  )
}

export default ContentContainer
