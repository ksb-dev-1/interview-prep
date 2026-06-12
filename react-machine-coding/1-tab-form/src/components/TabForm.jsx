import { useState } from "react";

import Interests from "./Interests";
import Profile from "./Profile";
import Settings from "./Settings";

export default function TabForm() {
  const [data, setData] = useState({
    name: "",
    email: "",
    age: "",
    interests: [],
    theme: "dark",
  });
  const [activeTab, setActiveTab] = useState(0);
  const [errors, setErrors] = useState({});

  const tabs = [
    {
      name: "Profile",
      component: Profile,
      validate: () => {
        const error = {};

        if (data.name.trim() === "") {
          error.name = "Name is required";
        }

        if (data.email.trim() === "") {
          error.email = "Email is required";
        } else if (
          !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(data.email)
        ) {
          error.email = "Invalid email format";
        }

        if (data.age.trim() === "") {
          error.age = "Age is required";
        } else if (!/^\d+$/.test(data.age)) {
          error.age = "Age must be a number";
        } else if (parseInt(data.age) < 18) {
          error.age = "You must be 18 or older";
        }

        setErrors(error);
        return Object.keys(error).length === 0;
      },
    },
    {
      name: "Interests",
      component: Interests,
      validate: () => {
        const error = {};

        if (data.interests.length === 0) {
          error.interests = "Please select at least one interest";
        }

        setErrors(error);
        return Object.keys(error).length === 0;
      },
    },
    {
      name: "Settings",
      component: Settings,
      validate: () => {
        setErrors({});
        return true;
      },
    },
  ];

  const ActiveTab = tabs[activeTab].component;

  function handlePrevious() {
    if (activeTab > 0) setActiveTab((prev) => prev - 1);
  }

  function handleNext() {
    if (tabs[activeTab].validate() && activeTab < tabs.length - 1)
      setActiveTab((prev) => prev + 1);
  }

  function handleSubmit() {
    console.log("Submitted data:", data);
  }

  return (
    <div className="tab-form">
      <div className="tab-form__tabs">
        {tabs.map((tab, index) => (
          <span
            key={tab.name}
            //onClick={() => setActiveTab(index)}
            className={`tab-form__tab ${
              index === activeTab ? "tab-form__tab--active" : ""
            }`}
          >
            {tab.name}
          </span>
        ))}
      </div>

      <div className="tab-form__content">
        <ActiveTab data={data} setData={setData} errors={errors} />
      </div>

      <div className="tab-form__buttons">
        <button
          onClick={handlePrevious}
          disabled={activeTab === 0}
          className="tab-form__button tab-form__button--prev"
        >
          Previous
        </button>
        {activeTab < tabs.length - 1 && (
          <button
            onClick={handleNext}
            className="tab-form__button tab-form__button--next"
          >
            Next
          </button>
        )}
        {activeTab === tabs.length - 1 && (
          <button
            onClick={handleSubmit}
            className="tab-form__button tab-form__button--submit"
          >
            Submit
          </button>
        )}
      </div>
    </div>
  );
}
