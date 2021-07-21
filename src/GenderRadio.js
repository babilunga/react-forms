const GenderRadio = (props) => {
  const { isMale, isFemale, onChangeInput } = props;
  return (
    <fieldset>
      <div>Gender</div>
      <div className="form-check">
        <input
          className="form-check-input"
          type="radio"
          id="flexRadioDefault1"
          name="gender"
          value="male"
          checked={isMale}
          onChange={onChangeInput}
        />
        <label className="form-check-label" htmlFor="flexRadioDefault1">
          male
        </label>
      </div>
      <div className="form-check">
        <input
          className="form-check-input"
          type="radio"
          id="flexRadioDefault2"
          name="gender"
          value="female"
          checked={isFemale}
          onChange={onChangeInput}
        />
        <label className="form-check-label" htmlFor="flexRadioDefault2">
          female
        </label>
      </div>
    </fieldset>
  );
};

export default GenderRadio;
