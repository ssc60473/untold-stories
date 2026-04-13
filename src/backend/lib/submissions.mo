import List "mo:core/List";
import Types "../types/submissions";
import Common "../types/common";

module {
  public func subscribeNewsletter(
    subscriptions : List.List<Types.NewsletterSubscription>,
    email : Text,
    now : Common.Timestamp,
  ) : Bool {
    // Deduplicate by email
    let existing = subscriptions.find(func(s) { s.email == email });
    switch (existing) {
      case (?_) { false }; // already subscribed
      case null {
        subscriptions.add({ email; subscribedAt = now });
        true;
      };
    };
  };

  public func submitContact(
    submissions : List.List<Types.ContactSubmission>,
    name : Text,
    email : Text,
    subject : Text,
    message : Text,
    now : Common.Timestamp,
  ) {
    // Prevent duplicate submissions: same email + subject within same millisecond is a duplicate
    // In practice this prevents accidental double-submit; intentional re-submit (different time) is allowed
    let duplicate = submissions.find(func(s) {
      s.email == email and s.subject == subject and s.submittedAt == now
    });
    switch (duplicate) {
      case (?_) {}; // duplicate, skip
      case null {
        submissions.add({ name; email; subject; message; submittedAt = now });
      };
    };
  };
};
