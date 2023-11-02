import ReactDOM from 'react-dom';
const Modal = ({ children }: any) => {
  return ReactDOM.createPortal(
    <div className='modal-design'>
      <div className='cancel-btn-cnt'>
        <button className='cancel-btn' onClick={() => {}}>
          Cancel
        </button>
        {children}
      </div>
    </div>,
    document.getElementById('portal')
  );
};

export default Modal;
