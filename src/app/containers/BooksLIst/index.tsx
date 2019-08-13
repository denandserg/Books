import React, { useState } from 'react';

// import { useObject } from 'react-firebase-hooks/database';
// import { useDownloadURL } from 'react-firebase-hooks/storage';
// import { getBooks, getCovers } from '../../../api';
// import Loader from '../../components/Loader';
import enhance from './enhance';

interface Props {}

const BooksList = enhance<Props, Props>(_BooksList);

export default BooksList;

function _BooksList(props: Props) {
  const [isLoading] = useState(true);

  // const [value = {val: () => {}}, loading, error] = useObject(getBooks());
  // console.log('1111111', value.val(), loading, error)
  // const [url, loadingI, errorI] = useDownloadURL(getCovers('A1jxuAgQ+JL.jpg'));

  // console.log('2222222', url, loadingI, errorI)

  // // const [books, setBooks] = useState([]);
  //
  // console.log(isLoading, setIsLoading)
  // //
  // // const books = useSelector(BooksSelector.getBooks);
  // //
  //
  // const booksC = useEffect(() => {
  //   // const result = getBooks();
  //   console.log('1111111111')
  //   getBooks().on('value', (snapshot: any) => {
  //     console.log('snapshot', snapshot.val())
  //   });
  //
  // }, []);
  // console.log('000000000', booksC);
  return isLoading ? <span>Hello World!</span> : <div>BooksList</div>;
}
