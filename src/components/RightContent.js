import React, { memo } from 'react';

const RightContent = memo(props => {
  const { data } = props;
  const listObject = Object.keys(data);
  console.log(listObject)
  return (
    <section className="right-content">
      <ul className="ul-content">
        {
          listObject.map((item, index) =>
            <li className={`li-content li-${index}-content`} key={index}>
              <h5>{item}</h5>
              <p>{data[item]}</p>
            </li>      
          )
        }
          
      </ul>
    </section>
  )
});

export default RightContent;