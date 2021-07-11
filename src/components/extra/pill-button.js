import PropTypes from "prop-types";

const PillButton = ({ text, customClickEvent }) => {
  return (
    <button
      type="button"
      className="font-medium capitalize text-xl"
      onClick={customClickEvent}
    >
      {text}
    </button>
  );
};

export default PillButton;

PillButton.propTypes = {
  moves: PropTypes.array,
  stats: PropTypes.array,
  pokemonId: PropTypes.number,
};
