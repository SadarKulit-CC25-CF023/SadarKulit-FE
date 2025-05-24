export default function Label({ inputFor, name }) {
  return (
    <div>
      <label
        className="block text-gray-700 text-sm font-bold mb-3"
        htmlFor={inputFor}
      >
        {name}
      </label>
    </div>
  );
}
