import PropTypes from 'prop-types';
import shortid from 'shortid';
import { useState } from 'react';
import { RiFilter2Line } from 'react-icons/ri';
import { FilterContainer, Label, Input } from './Filter.styles';

export const Filter = ({onChange}) => {
  const [value, setValue] = useState("");

  const filterInputId = shortid();

  const handleChangeFilter = e => {
    const { value } = e.target;

    setValue(value);
    onChange(value);
  };

  return (
    <>
      <FilterContainer>
        <Input
          id={filterInputId}
          name="filter"
          onChange={handleChangeFilter}
          type="text"
          value={value}
          placeholder="Name"
        />
        <Label htmlFor={filterInputId}>
          <RiFilter2Line size="30" />
          Find contact by name
        </Label>
      </FilterContainer>
    </>
  );
}

Input.propTypes = {
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};
