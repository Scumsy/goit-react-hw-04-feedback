import PropTypes from 'prop-types';
import { FeedbackButton } from './FeedbackOptions.styled';

export const FeedbackOptions = ({ options, onLeaveFeedback }) => {
  return options.map(option => (
    <FeedbackButton key={option} value={option} onClick={onLeaveFeedback}>
      {option}
    </FeedbackButton>
  ));
};

FeedbackOptions.propTypes = {
  options: PropTypes.arrayOf(PropTypes.string).isRequired,
  onLeaveFeedback: PropTypes.func.isRequired,
};
