export default function ImagePlaceholder({ label = 'Image coming soon', className = '' }) {
  return (
    <div
      className={`relative flex items-center justify-center overflow-hidden bg-primary-800 ${className}`}
    >
      <div className="bg-dot-grid pointer-events-none absolute inset-0 opacity-40" />
      <div className="pointer-events-none absolute -right-8 -bottom-10 h-32 w-32 rounded-full bg-accent/15 blur-2xl" />
      <p className="relative px-4 text-center text-xs font-medium tracking-[0.16em] text-white/45 uppercase break-words">
        {label}
      </p>
    </div>
  )
}
