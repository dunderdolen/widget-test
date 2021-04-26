import React, { useState } from "react";

const Permutation = ({ phraseHandler }) => {
  const [data, setData] = useState([]);
  function onSubmit() {
    let findPermutations = (data) => {
      if (!data || typeof string !== "string") {
        return "Please enter a string";
      } else if (data.length < 2) {
        return data;
      }

      let permutationsArray = [];

      for (let i = 0; i < data.length; i++) {
        let char = data[i];

        if (data.indexOf(char) !== i) continue;

        let remainingChars = data.slice(0, i) + data.slice(i + 1, data.length);

        for (let permutation of findPermutations(remainingChars)) {
          permutationsArray.push(char + permutation);
        }
      }
      return permutationsArray;
    };
  }

  return (
    <div>
      <div>
        <form onSubmit={onSubmit}>
          <label>
            String to permutate:
            <input
              type="text"
              onChange={(e) => {
                setData(e.target.value);
              }}
            />
          </label>
          <input type="submit" value="Submit" />
        </form>
        <label>{data}</label>
      </div>
    </div>
  );
};

export default Permutation;
