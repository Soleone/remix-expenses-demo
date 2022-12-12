export default function Modal({ children, onClose }: { children: JSX.Element[] | JSX.Element, onClose: () => void }) {
  return (
    <div className="modal-backdrop" onClick={onClose}>
      <dialog
        className="modal"
        open
        onClick={(event) => event.stopPropagation()}
      >
        {children}
      </dialog>
    </div>
  )
}