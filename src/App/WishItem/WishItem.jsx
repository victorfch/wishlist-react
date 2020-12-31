import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

const WishItem = ({ done, text, id, onDoneChange }) => (
  <li
    className={classNames('wish-list__item', {
      'wish-list__item--done': done,
    })}
  >
    <input type="checkbox" id={id} checked={done} onChange={(e) => onDoneChange(e.target.checked)} />
    <label htmlFor={id}>{text}</label>
  </li>
);
WishItem.propTypes = {
  done: PropTypes.bool,
  id: PropTypes.string,
  text: PropTypes.string,
  onDoneChange: PropTypes.func,
};
WishItem.defaultProps = {
  done: PropTypes.bool,
  id: '',
  text: '',
  onDoneChange: () => {},
};

export default WishItem;
