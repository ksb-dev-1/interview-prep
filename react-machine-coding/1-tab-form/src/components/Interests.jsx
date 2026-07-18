const allInterests = ["coding", "music", "reading", "travel", "gaming"];

export default function Interests({ data, setData, errors }) {
  function toggleInterest(interest) {
    const updated = data.interests.includes(interest)
      ? data.interests.filter((i) => i !== interest)
      : [...data.interests, interest];

    setData((prev) => ({
      ...prev,
      interests: updated,
    }));
  }

  return (
    <div className="tab-form__interests">
      <h3 className="tab-form__title">Select your interests</h3>
      <div className="tab-form__checkbox-group">
        {allInterests.map((interest) => (
          <div key={interest} className="tab-form__checkbox">
            <label className="tab-form__checkbox-label">
              <input
                type="checkbox"
                checked={data.interests.includes(interest)}
                onChange={() => toggleInterest(interest)}
                className="tab-form__checkbox-input"
              />
              <span className="tab-form__checkbox-text">
                {interest.charAt(0).toUpperCase() + interest.slice(1)}
              </span>
            </label>
          </div>
        ))}
      </div>
      {errors?.interests && (
        <span className="tab-form__error">{errors.interests}</span>
      )}
    </div>
  );
}
