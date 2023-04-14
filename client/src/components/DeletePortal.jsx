export default function DeletePortal( { open, closeModal, onDelete } ) {
    if (!open) return null
    
    // Add mouse hover onto to svg to act like it has an effect when we are using div event instead.

    return (
        <div onClick={closeModal} className="mouse fixed top-0 right-0 bottom-0 left-0 bg-black bg-opacity-60 flex justify-center items-center">
            <svg className="cursor-pointer fixed top-20 right-20 w-12 h-12 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            </svg>

            <div className="min-h-[200px] w-[300px] bg-white p-8 font-medium flex flex-col gap-8 rounded-md">
                <p>Are you sure you wish to complete this action? It <span className="font-semibold">cannot</span> be undone.</p>
                <button onClick={onDelete} className="bg-red-500 py-2 rounded-xl hover:bg-red-600 transition-colors text-white">
                    Confirm
                </button>
            </div>
        </div>
    )
}
