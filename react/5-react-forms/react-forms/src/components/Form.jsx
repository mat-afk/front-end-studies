import "./Form.css";

const Form = () => {
  return (
    <div>
      <form>
        <div>
          <label htmlFor="name">Name:</label>
          <input type="text" name="name" placeholder="Enter your name" />
        </div>
        <input type="submit" value="Submit" />
      </form>
    </div>
  );
};

export default Form;
