export function Button({ children, className = "", ...props }) {
  return (
    <button
      className={`bg-black text-white py-2 px-4 rounded-xl hover:bg-gray-800 transition-all duration-200 ${className}`}
      {...props}
    >
      {children}
    </button>
  );
}