import { useRef, useState } from 'react';

const ModalWithRef = () => { 
    const [isOpen, setIsOpen] = useState(false);
    const modalRef = useRef(null);

    const handleOverlayClick = (e) => {
        // Check if the click is outside the modal
        if (modalRef.current && !modalRef.current.contains(e.target)) {
            setIsOpen(false);
        }
    }

    return (<>
        <h1>Modal with Ref</h1>
        <button onClick={() => setIsOpen((prev)=>!prev)}>{isOpen ? "Close Modal" : "Open Modal"}</button>

        {isOpen && (<div className="overlay" onClick={handleOverlayClick}>

            {/* Modal */}
            <div className="modal" ref={modalRef}>
                <button onClick={()=> setIsOpen(false)}>X</button> 
                <h2>Modal Content</h2>  
            </div>
        </div>)}
    </>)
}

export default ModalWithRef;