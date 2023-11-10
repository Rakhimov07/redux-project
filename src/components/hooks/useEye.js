import { useState } from "react"

export const useEye = () => {
    const [show, setShow] = useState(false)

    return {show,setShow}
}