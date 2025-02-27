import { useRef, useImperativeHandle, forwardRef } from "react";
import { createPortal } from "react-dom";

import Button from "./Button.jsx"

const Modal = forwardRef(({ children, buttonCaption }, ref) => {  // ✅ Wrap with forwardRef
    const dialog = useRef(); // ✅ Correctly declared useRef()

    useImperativeHandle(ref, () => ({
        open() {
            if (dialog.current) {
                dialog.current.showModal();
            }
        }
    }));

    return createPortal(
        <dialog ref={dialog} className="backdrop:bg-stone-900/90 p-8 rounded-md shadow-md">
            {children}
            <form method="dialog" className="mt-6 text-right">
                <Button>{buttonCaption}</Button>
            </form>
        </dialog>, 
        document.getElementById('modal-root')  // ✅ Ensure this element exists in index.html
    );
});

export default Modal;
