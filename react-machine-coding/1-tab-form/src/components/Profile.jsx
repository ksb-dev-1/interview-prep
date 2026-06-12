export default function Profile({ data, setData, errors }) {
  const { name, email, age } = data;

  function handleChange(e, field) {
    const value = e.target.value;

    if (field === "age") {
      if (!/^\d*$/.test(value)) return;
    }

    setData((prev) => ({
      ...prev,
      [field]: value,
    }));
  }

  return (
    <div className="tab-form__profile">
      <div className="tab-form__input-group">
        <label htmlFor="name">Name</label>
        <input
          type="text"
          id="name"
          value={name}
          onChange={(e) => handleChange(e, "name")}
        />
        {errors?.name && <span className="tab-form__error">{errors.name}</span>}
      </div>
      <div className="tab-form__input-group">
        <label htmlFor="email">Email</label>
        <input
          type="email"
          id="email"
          value={email}
          onChange={(e) => handleChange(e, "email")}
        />
        {errors?.email && (
          <span className="tab-form__error">{errors.email}</span>
        )}
      </div>
      <div className="tab-form__input-group">
        <label htmlFor="age">Age</label>
        <input
          type="number"
          id="age"
          min={18}
          value={age}
          onChange={(e) => handleChange(e, "age")}
        />
        {errors?.age && <span className="tab-form__error">{errors.age}</span>}
      </div>
    </div>
  );
}
