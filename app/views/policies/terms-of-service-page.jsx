import React from "react";
import Header from "../layouts/header";
import PolicySection from "../layouts/policy-section";
import { CONTACT_INFO } from "../../const";

const TermsOfServicePage = () => {
  const termsSections = [
    {
      title: "Introduction",
      content: `These Terms of Service ("Terms") govern your access to and use of the iMaker Restro POS software and related services provided by iMaker Technology Pvt. Ltd.

By accessing or using the iMaker Restro platform, you agree to comply with these Terms. If you do not agree with these Terms, you should not use the service.`,
    },

    {
      title: "Use of the Service",
      content: `iMaker Restro provides restaurant management and POS software designed to help restaurants manage orders, billing, payments, inventory, and business analytics.

You agree to use the service only for lawful business purposes and in compliance with all applicable laws and regulations.`,
    },

    {
      title: "Account Registration",
      content: `To access certain features of iMaker Restro, you may be required to create an account.

You agree to:
- Provide accurate and complete information
- Maintain the security of your account credentials
- Be responsible for all activity that occurs under your account`,
    },

    {
      title: "Subscription & Payments",
      content: `Some features of iMaker Restro may require a paid subscription.

By subscribing to a paid plan you agree to:
- Pay all applicable subscription fees
- Provide valid billing information
- Authorize us to charge applicable fees for the services provided

Subscription fees may be updated from time to time with prior notice.`,
    },

    {
      title: "Acceptable Use",
      content: `You agree not to:

- Use the software for illegal activities
- Attempt to reverse engineer or disrupt the platform
- Access data belonging to other users without authorization
- Use the platform to transmit harmful or malicious content`,
    },

    {
      title: "Data Ownership",
      content: `Restaurants using iMaker Restro retain ownership of their business data including order information, customer records, and transaction history.

iMaker Restro processes this data solely to provide and improve the services.`,
    },

    {
      title: "Service Availability",
      content: `We strive to maintain reliable service availability. However, we do not guarantee uninterrupted or error-free operation of the platform.

Maintenance, updates, or unexpected issues may temporarily affect service availability.`,
    },

    {
      title: "Limitation of Liability",
      content: `To the maximum extent permitted by law, iMaker Technology Pvt. Ltd. shall not be liable for any indirect, incidental, or consequential damages arising from the use of the iMaker Restro platform.`,
    },

    {
      title: "Termination",
      content: `We reserve the right to suspend or terminate accounts that violate these Terms or misuse the platform.

Users may also discontinue using the service at any time.`,
    },

    {
      title: "Changes to Terms",
      content: `We may update these Terms of Service from time to time. Updated terms will be posted on this page.

Continued use of the service after updates constitutes acceptance of the revised Terms.`,
    },

    {
      title: "Contact Us",
      content: `If you have any questions regarding these Terms of Service, please contact us:

Phone: ${CONTACT_INFO.phones.india}
Company: iMaker Technology Pvt. Ltd.
Product: iMaker Restro POS`,
    },
  ];

  return (
    <div>
      <Header title={"Terms of Service"} />
      <PolicySection sections={termsSections} />
    </div>
  );
};

export default TermsOfServicePage;