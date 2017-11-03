
import moment from 'moment';
import { setStartDate, setEndDate, sortByAmount, sortByDate, setTextFilter } from '../../actions/filters';

test('shold genereate set start date obj' , () => {
  const action = setStartDate( moment(0) );
  expect(action).toEqual({
    type: 'SET_START_DATE',
    startDate: moment(0)
  })
});

test('shold genereate set end date obj' , () => {
  const action = setEndDate( moment(0) );
  expect(action).toEqual({
    type: 'SET_END_DATE',
    endDate: moment(0)
  })
});

test('shold genereate set sort byd date obj' , () => {
  //const action = sortByDate( );
  expect( sortByDate() ).toEqual({
    type: 'SORT_BY_DATE'
  })
});

test('shold genereate set sortby amount obj' , () => {
  //const action = sortByAmount() ;
  expect( sortByAmount() ).toEqual({
    type: 'SORT_BY_AMOUNT'
  })
});

test('shold genereate setTextFilter obj' , () => {
  const text = 'dupa'
  const action = setTextFilter(text);
  expect(action).toEqual({
    type: 'SET_TEXT_FILTER',
    text
  })
});

test('shold genereate setTextFilter DEFAULKT obj' , () => {
  const action = setTextFilter();
  expect(action).toEqual({
    type: 'SET_TEXT_FILTER',
    text: ''
  })
});