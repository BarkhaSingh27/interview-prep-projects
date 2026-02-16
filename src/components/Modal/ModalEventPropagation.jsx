import { useState } from 'react';

const ModalEventPropagation = () => { 
    const [isOpen, setIsOpen] = useState(false);

    return (<>
    <h1>Modal with Event Propagation</h1>
        <button onClick={() => setIsOpen((prev)=>!prev)}>{isOpen ? "Close Modal" : "Open Modal"}</button>

        {isOpen && (<div className="overlay" onClick={() => setIsOpen(false)}>

            {/* Modal */}
            <div className="modal" onClick={(e)=> e.stopPropagation()}>
                <button onClick={()=> setIsOpen(false)}>X</button> 
                <h2>Modal Content</h2>  
            </div>
        </div>)}
    </>)
}

export default ModalEventPropagation;