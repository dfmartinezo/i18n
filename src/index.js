import React from "react";
import ReactDOM from "react-dom";
import {IntlProvider} from 'react-intl';
import localeEsMessages from "./locales/es";
import localeEnMessages from "./locales/en";
import JobsList from "./components/jobslist";
import { useState } from "react";


let locale = "en-US";
if (navigator.language.includes("es")) {
  locale = "es-ES";

}

if (locale ==="en-US")
    ReactDOM.render(
        <IntlProvider locale={locale} messages={localeEnMessages} >
        <JobsList/>
        </IntlProvider>, document.getElementById("root")
    );
else
    ReactDOM.render(
        <IntlProvider locale={locale} messages={localeEsMessages} >
        <JobsList/>
        </IntlProvider>, document.getElementById("root")
    );