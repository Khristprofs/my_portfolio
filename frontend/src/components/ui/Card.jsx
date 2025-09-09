export function Card({ children, className = "" }) {
  return (
    <div className={`rounded-2xl border bg-white p-1 shadow-sm ${className}`}>
      {children}
    </div>
  );
}

export function CardContent({ children, className = "" }) {
  return <div className={`mt-2 ${className}`}>{children}</div>;
}