const AddBook = () => (
  <div className="form__book">
    <div className="container">
      <h2>Add New Book</h2>
      <form className="form__wrapper">
        <input className="input" type="text" placeholder="Book title" />
        <input className="input" type="text" placeholder="Author" />

        {/* <select className="input select">
          <option value="Action">Action</option>
          <option value="Science Fiction">Science Fiction</option>
          <option value="Economy">Economy</option>
        </select> */}
        <button type="submit" className="form__btn" onClick={(e) => { e.preventDefault(); }}>Add Book</button>
      </form>
    </div>
  </div>
);

export default AddBook;