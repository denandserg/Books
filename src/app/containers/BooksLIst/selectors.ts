import subSelectorCreator from '../../../utils/subSelectorCreator';
import { CurrencyState } from './reducer';

const createCurrencySelector = subSelectorCreator<CurrencyState>(
  state => state.books
);

const BooksSelector = {
  getBooks: createCurrencySelector(state => state)
};

export default BooksSelector;
