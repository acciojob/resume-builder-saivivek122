import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { saveProfile } from "./actions";

const Profile = () => {
  const dispatch = useDispatch();
  const profile = useSelector(state => state.profile);

  const [form, setForm] = useState(profile);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  return (
    <div>
      <h2>Add your profile details</h2>
      <input name="fname" placeholder="First Name" value={form.fname || ""} onChange={handleChange} />
      <input name="lname" placeholder="Last Name" value={form.lname || ""} onChange={handleChange} />
      <input name="phone" placeholder="Phone" value={form.phone || ""} onChange={handleChange} />
      <input name="address" placeholder="Address" value={form.address || ""} onChange={handleChange} />
      <input name="url" placeholder="Image URL" value={form.url || ""} onChange={handleChange} />
      <button id="next" onClick={() => dispatch(saveProfile(form))}>Save & Continue</button>
    </div>
  );
};

export default Profile;
