import './style.scss';

import React, { useState } from 'react';

const Dropdown = ({ title = 'Selecione', options, callback }) => {
  const [opened, setOpened] = useState(false);
  const [selectedValue, setSelectedValue] = useState(null);

  const handleButtonClick = () => {
    setOpened((s) => !s);
  };

  const handleListItemClick = (value) => {
    setSelectedValue(value);
    callback(value);
    setOpened(false);
  };

  return (
    <>
      <section id='dropdown'>
        <button onClick={handleButtonClick}>{selectedValue || title}</button>
        {opened && (
          <ul>
            {options.map((item, index) => {
              return (
                <li
                  key={index}
                  onClick={() => {
                    handleListItemClick(item);
                  }}
                >
                  {item}
                </li>
              );
            })}
          </ul>
        )}
      </section>
    </>
  );
};

export default Dropdown;
