import { useRef } from 'react';
import Input from './Input.jsx';
import Modal from './Modal.jsx'; // ✅ Ensure Modal is correctly imported

export default function NewProject({ onAdd }) {
  const modal = useRef();
  const title = useRef();
  const description = useRef();
  const dueDate = useRef();

  function handleSave() {
    const enteredTitle = title.current.value;
    const enteredDescription = description.current.value;
    const enteredDueDate = dueDate.current.value;

    if (
      enteredTitle.trim() === '' ||
      enteredDescription.trim() === "" ||
      enteredDueDate.trim() === ""
    ) {
      modal.current.open(); // ✅ Now correctly calls the open method
      return;
    }

    onAdd({
      title: enteredTitle,
      description: enteredDescription,
      dueDate: enteredDueDate,
    });
  }

  return (
    <>
        
      <Modal ref={modal} buttonCaption="Close">
        <h2 className="font-4xl text-font-bold text-stone-700 my-4 '>No Project was Selected">
          Invalid Input</h2>

          <p className='text-stone-600 mb-4'>Please provide valid values!</p>
      </Modal>
      <div className='w-[35rem] mt-16'>
        <menu className='flex items-center justify-end gap-4 my-4'>
          <li><button className='text-stone-900 hover:text-stone-950'>Cancel</button></li>
          <li>
            <button onClick={handleSave}
              className='px-5 py-3 rounded-md bg-stone-800 text-stone-50 hover:bg-stone-950'>
              Save
            </button>
          </li>
        </menu>
        <div>
          <Input type="text" ref={title} label="Title" />
          <Input ref={description} label="Description" textarea />
          <Input type="date" ref={dueDate} label="Due Date" />
        </div>
      </div>
    </>
  );
}
