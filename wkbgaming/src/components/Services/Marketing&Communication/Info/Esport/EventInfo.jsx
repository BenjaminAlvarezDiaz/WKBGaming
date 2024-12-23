import React from "react";
import styles from "../Info.module.css";

const EventInfo = () => {
  return (
    <div className={styles.container}>
      <div className={styles.title}>
        <h4>Event Management</h4>
      </div>
      <p>
        eSports is completely reinventing the sports world. And that’s exactly
        what we’ve been doing to the event industry. Our Live Events team brings
        the best of two worlds: the deep experience of elite event management,
        and the dynamic energy of the eSports industry. <br /><br /> These two worlds each
        have their own language, and we speak both. We’ll make sure everyone
        stays on the same page and that there are no miscommunications, so your
        pros and fans get the treatment they deserve.
      </p>
      <div className={styles.subtitle}>
        <h4>Our Workflow</h4>
      </div>
      <ul>
        <li>Define the objectives of the event</li>
        <li>Select the perfect date and location</li>
        <li>Plan the funding and budget for the Esport event</li>
        <li>Sales and registration management</li>
        <li>Manage payments on the spot</li>
        <li>Marketing Plan before, during and after your event</li>
      </ul>
    </div>
  );
};

export default EventInfo;
