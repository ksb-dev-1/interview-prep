export default function Settings({ data, setData }) {
  function handleChange(e) {
    setData((prev) => ({ ...prev, theme: e.target.value }));
  }

  return (
    <div className="tab-form__settings">
      <h3 className="tab-form__title">Theme Settings</h3>
      <div className="tab-form__radio-group">
        <label>
          <input
            type="radio"
            value="light"
            checked={data.theme === "light"}
            onChange={handleChange}
          />
          Light
        </label>
        <label>
          <input
            type="radio"
            value="dark"
            checked={data.theme === "dark"}
            onChange={handleChange}
          />
          Dark
        </label>
      </div>
    </div>
  );
}
