const TextPill = ({ id, value, color }) => {
  return (
    <div key={id} className="flex items-center justify-center flex-col">
      <p
        className={`bg-type-${color} border border-solid rounded-xl w-32 h-7 text-white`}
      >
        {value}
      </p>
    </div>
  );
};

export default TextPill;
