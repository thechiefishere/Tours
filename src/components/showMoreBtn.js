const ShowMoreBtn = ({ text, show, setShow }) => {
  return (
    <button className="showBtn" onClick={() => setShow(!show)}>
      <h3>{text}</h3>
    </button>
  );
};

export default ShowMoreBtn;
