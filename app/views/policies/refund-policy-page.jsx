import React from "react";
import Header from "../layouts/header";
import PolicySection from "../layouts/policy-section";
import { CONTACT_INFO } from "../../const";

const RefundPolicyPage = () => {
  const refundPolicySections = [
    {
      title: "Overview",
      content: `This Refund & Cancellation Policy outlines the terms under which refunds may be issued for subscriptions or services related to the iMaker Restro POS platform.

By subscribing to our services, you agree to the terms described in this policy.`,
    },

    {
      title: "Subscription Payments",
      content: `iMaker Restro operates on a subscription-based pricing model. Restaurants may subscribe to monthly or annual plans depending on the selected package.

All subscription payments are billed in advance for the selected billing period.`,
    },

    {
      title: "Refund Eligibility",
      content: `Refunds may be issued under the following circumstances:

- Duplicate payment or accidental charges
- Technical issues that prevent the platform from functioning and cannot be resolved within a reasonable time
- Billing errors caused by our system

Refund requests are reviewed on a case-by-case basis.`,
    },

    {
      title: "Non-Refundable Cases",
      content: `Refunds will generally not be issued in the following situations:

- Change of mind after purchasing the subscription
- Partial usage of the subscription period
- Failure to cancel before the next billing cycle
- Issues caused by third-party services or integrations`,
    },

    {
      title: "Cancellation Policy",
      content: `Users may cancel their subscription at any time.

Once cancelled:
- The subscription will remain active until the end of the current billing cycle
- No additional charges will be applied after cancellation
- Access to premium features may end after the billing period expires`,
    },

    {
      title: "Processing Refunds",
      content: `If a refund is approved, it will be processed using the original payment method used during the transaction.

Refund processing times may vary depending on the payment provider and typically take between 5–10 business days.`,
    },

    {
      title: "Changes to This Policy",
      content: `We may update this Refund & Cancellation Policy from time to time to reflect changes in our services or legal requirements.

Any updates will be posted on this page with the revised effective date.`,
    },

    {
      title: "Contact Us",
      content: `If you have questions regarding refunds or subscription cancellations, please contact us:

Email: ${CONTACT_INFO.email}
Phone: ${CONTACT_INFO.phone}
Company: iMaker Technology Pvt. Ltd.
Product: iMaker Restro POS`,
    },
  ];

  return (
    <div>
      <Header title={"Refund & Cancellation Policy"} />
      <PolicySection sections={refundPolicySections} />
    </div>
  );
};

export default RefundPolicyPage;