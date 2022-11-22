import React from "react";
import ReactDOM from "react-dom";
import {IntlProvider} from 'react-intl';
import localeEsMessages from "./locales/es";
import localeEnMessages from "./locales/en";
import JobsList from "./components/jobslist";

ReactDOM.render(
    // <IntlProvider locale="en-US" messages= {localeEnMessages}>

    <IntlProvider locale="es-ES" messages= {localeEsMessages}>


    <JobsList locale="en-US"/>
    </IntlProvider>, document.getElementById("root")
);