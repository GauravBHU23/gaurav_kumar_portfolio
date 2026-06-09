export default function AnimatedBackground() {
  return (
    <div
      aria-hidden
      className="pointer-events-none fixed inset-0 -z-10 overflow-hidden motion-reduce:hidden"
    >
      {/* Moving grid overlay */}
      <div className="absolute inset-0 animate-grid-pan bg-grid opacity-[0.35] dark:opacity-[0.25]" />

      {/* Floating gradient blobs */}
      <div className="absolute -left-32 top-10 h-80 w-80 animate-blob-1 rounded-full bg-brand-500/20 blur-3xl dark:bg-brand-600/25" />
      <div className="absolute right-[-8rem] top-1/3 h-96 w-96 animate-blob-2 rounded-full bg-violet-500/15 blur-3xl dark:bg-violet-600/20" />
      <div className="absolute bottom-10 left-1/3 h-72 w-72 animate-blob-3 rounded-full bg-sky-400/15 blur-3xl dark:bg-sky-500/15" />
    </div>
  );
}
