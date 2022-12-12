interface Props {
  children: JSX.Element[] | JSX.Element
  onClose: () => void
}

export default function Modal({ children, onClose }: Props) {
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