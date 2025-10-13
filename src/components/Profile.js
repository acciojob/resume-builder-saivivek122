import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { updateProfile } from "./resumeSlice";

const Profile = () => {
  const profile = useSelector((state) => state.resume.profile);
  const dispatch = useDispatch();

  const handleChange = (e) => {
    const { name, value } = e.target;
    dispatch(updateProfile({ [name]: value }));
  };

  return (
    <div>
      <h2>Profile</h2>
      <input name="fname" value={profile.fname} onChange={handleChange} placeholder="First Name" />
      <input name="lname" value={profile.lname} onChange={handleChange} placeholder="Last Name" />
      <input name="phone" value={profile.phone} onChange={handleChange} placeholder="Phone" />
      <input name="address" value={profile.address} onChange={handleChange} placeholder="Address" />
      <input name="url" value={profile.url} onChange={handleChange} placeholder="Profile Image URL" />
    </div>
  );
