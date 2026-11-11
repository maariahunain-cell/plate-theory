import { Link } from 'react-router-dom'

export default function AuthModal({ onClose }) {
  return (
    <div className="modal-backdrop" onClick={onClose}>
      <div className="auth-modal" onClick={(event) => event.stopPropagation()}>
        <button className="modal-close" onClick={onClose} aria-label="Close">×</button>
        <div className="modal-eyebrow">WELCOME TO PLATE THEORY</div>
        <h2>Join the flavour club.</h2>
        <p>Log in or create an account to continue with your food ordering experience.</p>
        <div className="modal-actions">
          <Link to="/login" className="primary-button" onClick={onClose}>Log In</Link>
          <Link to="/signup" className="secondary-button" onClick={onClose}>Sign Up</Link>
        </div>
      </div>
    </div>
  )
}
