import { useContext } from 'react'
import { ImageContext } from '../context/ImageContext'

const useImageContext = () => {

    const context = useContext(ImageContext)
    if(!context) {
        throw Error("!imageContext")
    }

  return context
}

export default useImageContext
