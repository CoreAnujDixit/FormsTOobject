import React, { useState } from "react";
import "./App.css";
const App = () => {
  const [FormData, setFormData] = useState({
    firstname: "",
    lastname: "",
    email: "",
    country: "",
    Street: "",
    city: "",
    state: "",
    zip: "",
    comments: false,
    Candidates: false,
    offers: false,
    pushnotification: ""
  });

  function changeHandler(event) {
    const { name, value, type, checked } = event.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value
    }));
  }
  function submitHandler(event) {
    event.preventDefault();
    console.log(FormData);
  }
  return (
    <div className="overflow-x-hidden flex flex-col items-center justify-center mt-2 mx-auto w-full ml-5 ">
      <form action="" className="overflow-x-hidden" onSubmit={submitHandler}>
        <label htmlFor="firstname">First Name</label>
        <br />
        <input
          type="text"
          name="firstname"
          id="firstname"
          className="border border-blue-400 rounded-lg p-2 mt-3 w-[50vw]" // Adjust the width and height here
          placeholder="First Name"
          value={FormData.firstname}
          onChange={changeHandler}
        />
        <br />
        <label htmlFor="lastname">Last Name</label>
        <br />
        <input
          type="text"
          name="lastname"
          id="lastname"
          className="border border-blue-400 rounded-lg p-2 mt-3 w-[50vw]" // Adjust the width and height here
          placeholder="Last Name"
          value={FormData.lastname}
          onChange={changeHandler}
        />
        <br />
        <label htmlFor="email">Email</label>
        <br />
        <input
          type="email"
          name="email"
          id="email"
          className="border border-blue-400 rounded-lg p-2 mt-3 w-[50vw]" // Adjust the width and height here
          placeholder="Email"
          value={FormData.email}
          onChange={changeHandler}
        />
        <br />
        <label htmlFor="country">Country</label>
        <br />
        <select
          name="country"
          id="country"
          className="w-[50vw] border p-2 rounded-lg border-blue-400" // Adjust the height here
          value={FormData.country}
          onChange={changeHandler}
        >
          <option value="INDIA">INDIA</option>
          <option value="PAKISTAN">PAKISTAN</option>
          <option value="SRI LANKA">SRI LANKA</option>
          <option value="AREA 51">AREA 51</option>
        </select>
        <br />
        <label htmlFor="Street">Street Address</label>
        <br />
        <input
          type="text"
          name="Street"
          id="Street"
          className="border border-blue-400 rounded-lg p-2 mt-3 w-[50vw]" // Adjust the width and height here
          placeholder="Badarpur 123"
          value={FormData.Street}
          onChange={changeHandler}
        />
        <br />
        <label htmlFor="city">City</label>
        <br />
        <input
          type="text"
          name="city"
          id="city"
          className="border border-blue-400 rounded-lg p-2 mt-3 w-[50vw]" // Adjust the width and height here
          placeholder="DholakPur"
          value={FormData.city}
          onChange={changeHandler}
        />
        <br />
        <label htmlFor="state">State</label>
        <br />
        <input
          type="text"
          name="state"
          id="state"
          className="border border-blue-400 rounded-lg p-2 mt-3 w-[50vw]" // Adjust the width and height here
          placeholder="New Delhi"
          value={FormData.state}
          onChange={changeHandler}
        />
        <br />
        <label htmlFor="zip">Zip</label>
        <br />
        <input
          type="text"
          name="zip"
          id="zip"
          className="border border-blue-400 rounded-lg p-2 mt-3 w-[50vw]" // Adjust the width and height here
          placeholder="110044"
          value={FormData.zip}
          onChange={changeHandler}
        />
        <br />
        {/* <label htmlFor="comments">Comments</label> */}
        <fieldset>
          <legend>By Emails</legend>

          <div className="flex flex-row w-[90%]">
            <input
              type="checkbox"
              name="comments"
              id="comments"
              value={FormData.comments}
              onChange={changeHandler}
            />
            <div className="ml-2 mt-2">
              <label htmlFor="comments">Comment</label>

              <p>Get notified when someones posts a comment on a posting.</p>
            </div>
          </div>
          <div className="flex w-[90%]">
            <input
              type="checkbox"
              name="Candidates"
              id="Candidates"
              value={FormData.Candidates}
              onChange={changeHandler}
            />
            <div className="ml-2 mt-2">
              <label htmlFor="offers">Candidates</label>
              <p>Get notified when a candidate applies for a job.</p>
            </div>
          </div>

          <div className="flex w-[90%]">
            <input
              type="checkbox"
              name="offers"
              id="offers"
              value={FormData.offers}
              onChange={changeHandler}
            />
            <div className="ml-2 mt-2 ">
              <label htmlFor="offers">Offers</label>
              <p>
                {" "}
                Get notified when a candidate accepts or rejects an offer.{" "}
              </p>
            </div>
          </div>
        </fieldset>
        <br />
        <fieldset>
          <legend>Push Notifications</legend>
          <p className="w-[60%]">
            These are delivered via SMS to your mobile phone.
          </p>
          <div className="flex mt-2">
            <input
              type="radio"
              name="pushnotification"
              id="pusheverything"
              value="everything"
              checked={FormData.pushnotification === "everything"} // Check the selected option
              onChange={changeHandler}
              className="mr-2"
            />
            <label htmlFor="pusheverything">Everything</label>
          </div>
          <div className="flex mt-2">
            <input
              type="radio"
              name="pushnotification"
              id="sameAsEmail"
              value="sameAsEmail"
              checked={FormData.pushnotification === "sameAsEmail"} // Check the selected option
              onChange={changeHandler}
              className="mr-2"
            />
            <label htmlFor="sameAsEmail">Same as Email</label>
          </div>
          <div className="flex mt-2">
            <input
              type="radio"
              name="pushnotification"
              id="noPushNotifications"
              value="noPushNotifications"
              checked={FormData.pushnotification === "noPushNotifications"} // Check the selected option
              onChange={changeHandler}
              className="mr-2"
            />

            <label htmlFor="noPushNotifications">No push notifications</label>
          </div>
        </fieldset>
        <button className="bg-blue-400 font-bold text-white px-4 py-1 mt-3 mb-5 rounded-md hover:bg-white hover:text-black hover:border hover:border-orange-400 ">
          Save
        </button>
      </form>
    </div>
  );
};

export default App;
