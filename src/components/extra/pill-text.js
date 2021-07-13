import PropTypes from "prop-types";

const TextPill = ({ value, color }) => {
  return (
    <div key={value} className="flex items-center justify-center flex-col">
      <p
        className={`bg-type-${color} border border-solid rounded-xl w-32 h-7 text-white`}
      >
        {value}
      </p>
    </div>
  );
};

export default TextPill;

TextPill.propTypes = {
  value: PropTypes.string.isRequired,
  color: PropTypes.string.isRequired,
};
