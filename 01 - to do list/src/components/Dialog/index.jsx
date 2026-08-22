import { useEffect, useRef } from 'react';
import './dialog.css'
import { IconClose } from '../icons';
import { ToDoForm } from '../ToDoForm';


export function Dialog({ isOpen, onClose, addToDo }) {
    const dialogRef = useRef(null)
    useEffect(() => {
        if (isOpen) {
            showDialog()
        } else {
            closeDialog()
        }
    }, [isOpen])

    const showDialog = () => {
        dialogRef.current.showModal();
    };
    const closeDialog = () => {
        dialogRef.current.close();
    };

    return (
        <>
            <dialog ref={dialogRef} className='dialog'>
                <div className='btn-close-wrapper'>
                    <button autoFocus onClick={onClose} className='btn-close'>
                        <IconClose /> 
                    </button>
                </div>
                <ToDoForm onSubmit={addToDo} />
            </dialog>
        </>
    )
}