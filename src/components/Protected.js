import React, { useState } from "react";
import Navbar from "./Navbar";

function Protected() {
  const [formData, updateFormData] = useState([]);
  const [permData, updatePermData] = useState([]);
  const handleChange = (e) => {
    updateFormData({
      ...formData,
      [e.target.name]: e.target.value.trim(),
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    updatePermData(findPermutations(formData.phrase));
  };

  let findPermutations = (string) => {
    if (!string || typeof string !== "string") {
      return "Please enter a string";
    }
    if (!!string.length && string.length < 2) {
      return string;
    }
    let permutationsArray = [];
    for (let i = 0; i < string.length; i++) {
      let char = string[i];
      if (string.indexOf(char) != i) continue;
      let remainder = string.slice(0, i) + string.slice(i + 1, string.length);
      for (let permutation of findPermutations(remainder)) {
        permutationsArray.push(char + permutation);
      }
    }
    console.log(permutationsArray);
    return permutationsArray;
  };
  console.log(formData);
  return (
    <div>
      <Navbar />
      <label>
        Phrase
        <input name="phrase" onChange={handleChange} />
      </label>
      <br />
      <button onClick={handleSubmit}>Submit</button>

      {permData == null || permData.length == 0
        ? ""
        : permData.map((p) => <p key={p}>{p}</p>)}
    </div>
  );
}
export default Protected;
