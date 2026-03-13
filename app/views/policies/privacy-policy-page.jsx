import React from "react";
import PolicySection from "../layouts/policy-section";
import Header from "../layouts/header";
import { CONTACT_INFO } from "../../const";

const PrivacyPolicyPage = () => {
  const privacyPolicySections = [
    {
      title: "Introduction",
      content: `This Privacy Policy explains how iMaker Restro ("we", "our", "us") collects, uses, and protects information when restaurants, staff members, or customers use our restaurant POS software and related services.

By accessing or using the iMaker Restro platform, you agree to the practices described in this Privacy Policy.`,
    },

    {
      title: "Information We Collect",
      subSections: [
        {
          title: "Restaurant Account Information",
          content: `When a restaurant registers for iMaker Restro, we may collect:

- Business name and address
- Owner or administrator name
- Contact details including email and phone number
- GST or tax registration details
- Subscription and billing information`,
        },

        {
          title: "Transaction & Order Data",
          content: `The iMaker Restro POS system processes restaurant transactions. We may store:

- Order details and menu items
- Payment status and billing totals
- Applicable taxes (GST, service charges, etc.)
- Date, time, and location of transactions
- Staff member responsible for the transaction`,
        },

        {
          title: "Customer Information",
          content: `Restaurants using iMaker Restro may collect limited customer data such as:

- Customer name
- Phone number
- Order history
- Loyalty program activity

This data belongs to the restaurant and is processed by our system on their behalf.`,
        },

        {
          title: "Device & Usage Information",
          content: `We may automatically collect technical information including:

- Device type and operating system
- Browser type
- IP address
- POS device identifiers
- Application usage logs`,
        },
      ],
    },

    {
      title: "How We Use Information",
      content: `We use collected information to:

- Provide and maintain the iMaker Restro POS platform
- Process restaurant orders and transactions
- Generate sales reports and analytics
- Improve system performance and reliability
- Provide technical support to restaurant users
- Detect and prevent fraud or unauthorized system access`,
    },

    {
      title: "Data Ownership",
      content: `Restaurants using iMaker Restro retain ownership of their business data and customer records.

iMaker Restro acts as a technology service provider and processes data only to deliver the POS services requested by the restaurant.`,
    },

    {
      title: "Payment Processing",
      content: `Payments processed through iMaker Restro may use secure third-party payment gateways.

iMaker Restro does not store full credit or debit card information. Payment data is handled securely by certified payment processors.`,
    },

    {
      title: "Data Sharing",
      content: `We do not sell personal information.

We may share data with:

- Payment gateway providers
- Cloud infrastructure providers
- Analytics and system monitoring services
- Legal authorities when required by law

All service providers are required to maintain strict confidentiality and data protection standards.`,
    },

    {
      title: "Data Security",
      content: `We implement industry-standard security measures including:

- Encrypted communication (HTTPS)
- Secure cloud infrastructure
- Role-based access control for restaurant accounts
- Continuous monitoring and system updates

However, no digital platform can guarantee absolute security.`,
    },

    {
      title: "Data Retention",
      content: `We retain restaurant and transaction data for as long as the restaurant maintains an active account or as required for legal, tax, or accounting purposes.

After this period, data may be securely deleted or anonymized.`,
    },

    {
      title: "User Rights",
      content: `Restaurant administrators may:

- Access their account information
- Update or correct stored data
- Request account deletion
- Export their business data

Requests can be submitted through the iMaker Restro support team.`,
    },

    {
      title: "Third-Party Integrations",
      content: `iMaker Restro may integrate with third-party services such as:

- Payment gateways
- Online ordering platforms
- Delivery services
- Accounting software

These third-party services operate under their own privacy policies.`,
    },

    {
      title: "Changes to This Privacy Policy",
      content: `We may update this Privacy Policy periodically to reflect product improvements or regulatory requirements.

The updated policy will be published on this page with the revised effective date.`,
    },

    {
      title: "Contact Us",
      content: `If you have questions regarding this Privacy Policy or our data practices, please contact us:

Phone: ${CONTACT_INFO.phones.india} 
Company: iMaker Technology Pvt. Ltd.  
Product: iMaker Restro POS`,
    },
  ];

  return (
    <div>
      <Header
        title={"Privacy Policy"}
        description={"Hey these are privacy polices"}
      />
      <PolicySection sections={privacyPolicySections} />
    </div>
  );
};

export default PrivacyPolicyPage;
