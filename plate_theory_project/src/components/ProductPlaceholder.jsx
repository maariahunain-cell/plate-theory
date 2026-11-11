export default function ProductPlaceholder({ label = 'PRODUCT IMAGE' }) {
  return (
    <div className="product-placeholder">
      <span>{label}</span>
    </div>
  )
}
