import List "mo:core/List";
import Time "mo:core/Time";
import SubLib "../lib/submissions";
import SubTypes "../types/submissions";

mixin (
  subscriptions : List.List<SubTypes.NewsletterSubscription>,
  contactSubmissions : List.List<SubTypes.ContactSubmission>,
) {
  public shared func subscribeNewsletter(email : Text) : async Bool {
    SubLib.subscribeNewsletter(subscriptions, email, Time.now());
  };

  public shared func submitContactForm(
    name : Text,
    email : Text,
    subject : Text,
    message : Text,
  ) : async () {
    SubLib.submitContact(contactSubmissions, name, email, subject, message, Time.now());
  };
};
