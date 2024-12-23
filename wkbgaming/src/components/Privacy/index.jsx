import React from "react";
import styles from "./Privacy.module.css"
const Privacy = () => {
  return (
    <div className={styles.container}>
      <h2>Privacy Policy</h2>
      <div className={styles.text}>
        <h5>1. General Information</h5>
        <p>
          This privacy policy applies to the use of personal data of any
          individual who uses the website wkbgaming.com. By accessing or using
          this website, the user confirms that they have read, understood,
          consented to, and accepted the terms and conditions of this privacy
          policy. If you do not agree with the terms of this privacy policy, you
          should not use the site.
        </p>
        <h5>2. Data We Collect and Its Purpose</h5>
        <p>
          We collect personal data from users such as names and emails for i)
          responding to customer inquiries, ii) providing our services, and iii)
          analyzing consumer profiles.
        </p>
        <h5>3. Sharing of Personal Information</h5>
        <p>
          WKB Gaming is committed to not selling or disclosing the personal
          information of users of wkbgaming.com without their consent, except
          when required by governmental authorities, courts, tribunals, or other
          public entities or offices where we consider it mandatory under
          applicable legislation or regulation.
        </p>
        <h5>4. Information Retention</h5>
        <p>
          The company will retain users' personal data for as long as necessary
          to fulfill the purposes for which it was collected and until its
          suspension is requested, as well as for the time necessary to comply
          with legal obligations.
        </p>
        <h5>5. User Rights Regarding Information</h5>
        <p>
          In accordance with the provisions of Personal Data Protection Law No.
          25,326, we offer users the possibility to:
        </p>
        <ul>
          <li>Request access to their data</li>
          <li>
            Change or ratify incomplete or inaccurate data related to their
            person
          </li>
          <li>Reject, limit, or restrict the use of data.</li>
          <li>Delete their data</li>
        </ul>
        <p>
          For the cases listed above, it will be necessary for users to contact
          WKB Gaming to resolve their request in the best possible manner.
        </p>
        <h5>6. Complaints</h5>
        <p>
          In compliance with Resolution AAIP No. 14/2018, we inform users of
          this website that the Agency for Access to Public Information, as the
          Control Body of Law No. 25,326, has the authority to address
          complaints filed by individuals whose rights have been violated due to
          non-compliance with current regulations on personal data protection.
        </p>
        <h5>7. Modifications to the Data Privacy Policy</h5>
        <p>
          This policy is subject to changes and updates. The user of this
          website should regularly review the policy to ensure familiarity with
          its content. Last updated: 16/6/23.
        </p>
        <h5>9. Contact Information</h5>
        <p>
          If you wish to exercise any of your rights or if you have any
          questions or complaints about this privacy policy, you can contact us
          at the following address: info@wkbgaming.com.
        </p>
      </div>
    </div>
  );
};

export default Privacy