import React from 'react';
import MailchimpSubscribe from 'react-mailchimp-subscribe';
import './MailchimpForm.css';

const url = "https://YOUR_MAILCHIMP_URL_HERE";

const MailchimpForm = () => {
  return (
    <div className="mailchimp-form">
      <h2>Subscribe to our Newsletter</h2>
      <MailchimpSubscribe url={url} />
    </div>
  );
};

export default MailchimpForm;
