import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { addSocial } from "./actions";

const SocialMedia = () => {
  const dispatch = useDispatch();
  const social = useSelector(state => state.social);
  const [link, setLink] = useState("");

  const handleAdd = () => {
    if(link.trim() !== "") {
      dispatch(addSocial(link));
      setLink("");
    }
  };

  return (
    <div>
      <h2>Social Media</h2>
      <input name="Social" data-testid="social-input" placeholder="Social Media URL" value={link} onChange={(e) => setLink(e.target.value)} />
      <button id="add_social" onClick={handleAdd}>Add Social</button>

     <ul>
  {social.map((s,i) => <li key={i} data-testid={`social-${i}`}>{s}</li>)}
</ul>
    </div>
  );
};

export default SocialMedia;
