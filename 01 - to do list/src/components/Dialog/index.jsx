import { useEffect, useRef } from 'react';
import './dialog.css'


export function Dialog({ isOpen, onClose }) {
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
            <dialog ref={dialogRef}>
                <button autoFocus onClick={onClose}>Close</button>
                <p>Você abriu o dialog.</p>
            </dialog>
        </>
    )
}