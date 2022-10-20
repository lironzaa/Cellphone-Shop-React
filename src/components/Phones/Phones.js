import { Fragment } from "react";

import AvailablePhones from "./AvailablePhones";
import PhonesSummary from "./PhonesSummary";

const Phones = () => {
    return (
        <Fragment>
            <PhonesSummary/>
            <AvailablePhones/>
        </Fragment>
    );
}

export default Phones;