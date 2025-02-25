import React from "react";
import {FormattedDate, FormattedNumber, FormattedMessage} from 'react-intl';


const Job = (props) => {
  let salary = props.offer.salary
  let mensage = "{salary} million";
  if (navigator.language.includes("es"))
    if(props.offer.salary === 1)
      mensage = "{salary} millón";
    else 
      mensage = "{salary} millones";


  return (
    <tr>
      <th scope="row">{props.offer.id}</th>
      <td>{props.offer.name}</td>
      <td>{props.offer.company}</td>
      <td><FormattedMessage id="SalaryFormat" defaultMessage={mensage} values={{salary: salary,}}/></td>
      <td>{props.offer.city}</td>
      <td>
        <FormattedDate
          value={new Date(props.offer.date)}
          year='numeric'
          month='long'
          day='numeric'
          weekday='long'
        />
      </td>    
      <td><FormattedNumber value={props.offer.views}/></td>
    </tr>
  );
};

export default Job;
