import React from 'react';
import { FilterType } from '../types/FilterType';
import classNames from 'classnames';

type Props = {
  currentFilter: FilterType;
  onChange: (status: FilterType) => void;
};

export const TodoFilter: React.FC<Props> = ({ currentFilter, onChange }) => {
  return (
    <nav className="filter" data-cy="Filter" aria-label="Todo filters">
      {Object.values(FilterType).map(type => (
        <a
          key={type}
          href="#/"
          className={classNames('filter__link', {
            selected: currentFilter === type,
          })}
          data-cy={`FilterLink${type}`}
          aria-current={currentFilter === type ? 'page' : undefined}
          onClick={e => {
            e.preventDefault();
            onChange(type);
          }}
        >
          {type}
        </a>
      ))}
    </nav>
  );
};