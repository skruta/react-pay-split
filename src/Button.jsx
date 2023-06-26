export default function Button({ children, handleButtonClick }) {
  return (
    <button onClick={handleButtonClick} className="button">
      {children}
    </button>
  );
}
