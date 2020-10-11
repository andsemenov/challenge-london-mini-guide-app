import React, { useState, useEffect } from "react";

function Guide(props) {
  const [guide, SetGuide] = useState([]);
  useEffect(() => {
    fetch(`/${props.city}/${props.category}`)
      .then((response) => response.json())
      .then((data) => {
        SetGuide(data);
      });
  }, [props.category, props.city]);

  console.log(guide);
  console.log(guide[0]);
  console.log(props.category, props.city);

  if (guide.length) {
    return (
      <table className="table">
        <thead>
          <tr>
            <th scope="col">#</th>

            {Object.keys(guide[0]).map((key) => (
              <th scope="col" key={key}>
                {key}
              </th>
            ))}
          </tr>
        </thead>

        <tbody>
          {guide.map((datum, index) => {
            return (
              <tr
                className="guide"
                key={(Math.random() / 10000000000).toString()}
              >
                <td>{index}</td>
                {Object.keys(datum).map(function (key, index) {
                  return (
                    <td
                      key={(Math.random() * 10000000000).toString()}
                      className={key}
                    >
                      {datum[key]}
                    </td>
                  );
                })}
              </tr>
            );
          })}
        </tbody>
      </table>
    );
  } else {
    return <p>hi</p>;
  }
}

export default Guide;
