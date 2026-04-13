import Common "common";

module {
  public type NewsletterSubscription = {
    email : Text;
    subscribedAt : Common.Timestamp;
  };

  public type ContactSubmission = {
    name : Text;
    email : Text;
    subject : Text;
    message : Text;
    submittedAt : Common.Timestamp;
  };
};
