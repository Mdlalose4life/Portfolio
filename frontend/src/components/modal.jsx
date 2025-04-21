import { useNavigate } from "react-router-dom";

// eslint-disable-next-line react/prop-types
function Modal({ children }) {
    const navigate = useNavigate()

    function onCloseHanadler(){
        navigate("/skills")
    }

    return (
        <>
            <div className="backdrop" onClick={onCloseHanadler} />
            <dialog open className="modal">{children}</dialog>
        </>
        )
}
export default Modal