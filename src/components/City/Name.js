import "./Name.css";
const Name = (props) => {
  return (
    <div >
      <div className="hr">
        <hr id="one" />
        <p className="tests">{props.name}</p>
        <hr id="two" />
      </div>
    </div>
  );
};
export default Name;
