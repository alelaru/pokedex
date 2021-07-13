import PropTypes from "prop-types";

const ProgressBar = ({ progressPercentage }) => {
  if (progressPercentage > 100) {
    progressPercentage = 100;
  }

  return (
    <div className="h-4 w-6/12 rounded-full bg-gray-progress">
      <div
        style={{ width: `${progressPercentage}%` }}
        className={`h-full  rounded-full ${
          progressPercentage === 100
            ? "bg-blue-medium"
            : progressPercentage < 70
            ? "bg-red-primary"
            : "bg-green"
        }`}
      ></div>
    </div>
  );
};

export default ProgressBar;


ProgressBar.propTypes = {
  progressPercentage: PropTypes.number.isRequired
};