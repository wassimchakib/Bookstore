import { useDispatch, useSelector } from 'react-redux';
import { checkStatus } from '../redux/categories/categories';

const Categories = () => {
  const status = useSelector((state) => state.categories);
  const dispatch = useDispatch();
  const categoriesStatus = () => {
    dispatch(checkStatus());
  };
  return (
    <div className="container" style={{ textAlign: 'center' }}>
      <button className="categories__btn" type="button" onClick={categoriesStatus}>Check status</button>
      {status && (<p className="categories__status">{status}</p>)}
    </div>
  );
};

export default Categories;
