import React from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';

const WishList = ({ wishes }) => (
  <ul className="wish-list">
    {wishes.map(({ text, done }, i) => (
      <li
        key="text"
        className={classNames('wish-list__item', {
          'wish-list__item--done': done,
        })}
      >
        <input type="checkbox" id={`wish${i}`} checked={done} />
        <label htmlFor={`wish${i}`}>{text}</label>
      </li>
    ))}
  </ul>
);

WishList.propTypes = {
  wishes: PropTypes.arrayOf(PropTypes.shape({
    text: PropTypes.string,
    done: PropTypes.bool,
  })),
};

WishList.defaultProps = {
  wishes: [],
};

export default WishList;
