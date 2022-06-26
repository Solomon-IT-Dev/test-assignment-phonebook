import { useSelector, useDispatch } from 'react-redux';
import { getFilterValue, changeFilter } from 'redux/filter/slice';
import { FilterInput } from './Filter.styled';

export default function Filter() {
  const filterValue = useSelector(getFilterValue);
  const dispatch = useDispatch();

  const onFilterChange = evt => {
    dispatch(changeFilter(evt.currentTarget.value));
  };

  return (
    <FilterInput
      type="text"
      placeholder="Search..."
      value={filterValue}
      onChange={onFilterChange}
    />
  );
}
