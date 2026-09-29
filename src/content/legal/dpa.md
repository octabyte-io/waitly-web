**Version:** 1.1 · **Effective:** {{LAST_UPDATED}}

## 1. Parties and formation

### 1.1 Parties

This agreement is between {{OCTABYTE_LEGAL_NAME}} ([octabyte.io](https://octabyte.io),
"Processor") and the Shopify merchant who installs the Waitly app ("Merchant",
"Controller").

### 1.2 How it is agreed

Installing Waitly on a Shopify store accepts the Waitly terms of service, and
those terms incorporate this agreement in full. No separate signature is
required and none is offered: Shopify's installation flow has no step at which
an app can present one.

A merchant who requires a signed counterpart may request one at
support@octabyte.io.

### 1.3 Precedence

Where this agreement conflicts with the Waitly terms of service on the subject
of personal data, this agreement prevails.

## 2. Roles

For personal data relating to the Merchant's customers and storefront visitors,
the Merchant is the **controller** and OctaByte is the **processor**.

OctaByte processes that data only on the Merchant's documented instructions.
The Merchant's use of the app, and the settings they configure in it, are those
instructions. OctaByte will tell the Merchant if an instruction appears to
breach applicable data protection law, and may decline to act on it.

For the Merchant's own account and contact data, OctaByte is a controller in
its own right, and that processing is described in the
[Waitly Privacy Policy](/privacy/).

## 3. Subject matter of the processing

|                        |                                                                                                                                                                                                                           |
| ---------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **Subject matter**     | Operating the Waitly back-in-stock and preorder app for the Merchant's store                                                                                                                                              |
| **Duration**           | The life of the Merchant's installation, plus the deletion window in section 10                                                                                                                                           |
| **Nature**             | Collection, storage, organisation, use, transmission by email, cancellation and refund of preorder order lines through Shopify, and erasure |
| **Purposes**           | App functionality; marketing communication to the data subject under their own consent; transactional email about the data subject's own preorders; carrying out preorder cancellations and refunds, including the automatic refund of a preorder whose shopper did not agree to a delay of more than 30 days; analytics and reporting to the Merchant |
| **Data subjects**      | The Merchant's customers and storefront visitors who ask to be notified about a product or vote for a product idea; the Merchant's customers who place an order containing a preorder; the Merchant's own staff users |
| **Personal data**      | Email address; phone number where a data subject supplies one; Shopify customer identifier; IP address and browser user agent captured as consent evidence; order and line item identifiers with amounts, for attribution; for an order containing a preorder, the order email address, order number and date, items, amounts, promised ship dates, and any cancellation or agreement to wait; where the Merchant enables them, quantity interest and the store's selling country on a Coming Soon signup; on the Pro plan, Shopify customer tags, order count and amount spent, read to set waitlist priority and not stored |
| **Special categories** | None. Waitly neither requests nor stores special category data, and Merchants must not enter any into it                                                                                                                  |

OctaByte requests exactly one protected customer data field from Shopify —
**email** — and does not request name, address or phone.

## 4. OctaByte's obligations

OctaByte will:

1. process personal data only on the Merchant's documented instructions, and
   only for the purposes in section 3, unless required otherwise by law — in
   which case OctaByte will inform the Merchant first, unless the law forbids
   it;
2. ensure that everyone authorised to process the data is bound by
   confidentiality;
3. implement the technical and organisational measures in section 5;
4. observe the sub-processor conditions in section 6;
5. assist the Merchant with data subject requests, as described in section 7;
6. assist the Merchant with security, breach notification and impact
   assessments, taking account of what OctaByte knows and can see;
7. delete the data as described in section 10;
8. make available the information needed to demonstrate compliance with this
   section, and allow the audits described in section 11.

## 5. Security measures

OctaByte maintains, at minimum:

- **A single store for personal data.** Personal data is held in the
  application database only. It is deliberately excluded from the job queue,
  from background job payloads, from application logs and from the error
  reports sent to the monitoring provider in section 6, so that an erasure
  request reaches all of it and leaves no copy behind. An error report is held
  to that rule by the app itself: it strips any email address from the text of
  a report before the report is transmitted, and reports are configured to
  carry no request contents, no cookies or headers, no database values and no
  variables from the running code.
- **Encryption in transit** on every network hop.
- **Access control**: production access limited to named personnel who need it,
  multi-factor authentication required, strong password requirements, and
  access reviewed when roles change.
- **Environment separation**: production personal data is never copied into
  development or test environments.
- **An access log** recording human access to production personal data, and
  application access on the one path where Shopify-sourced protected customer
  data enters the system.
- **A written incident response policy**, with severity levels, named roles, an
  escalation path, evidence collection and required actions.
- **A written data loss prevention strategy.**
- **Retention limits** enforced automatically, per section 9.
- **Erasure paths that are tested**, not assumed.

OctaByte may change these measures, but not in a way that materially reduces
their overall protection.

## 6. Sub-processors

The Merchant gives general authorisation for the sub-processors below.

| Sub-processor                          | Purpose                                                           | Location                    |
| -------------------------------------- | ----------------------------------------------------------------- | --------------------------- |
| Shopify Inc.                           | Platform, session storage, and source of order and inventory data | Canada / global             |
| Plus Five Five, Inc. (Resend)          | Email delivery                                                    | United States (`us-east-1`) |
| Hetzner Online GmbH                    | Application, database and queue hosting                           | Germany (`nbg1`)            |
| Functional Software, Inc. d/b/a Sentry | Application error reporting                                       | United States (Iowa)        |

OctaByte will give the Merchant **30 days' notice** before adding or replacing
a sub-processor. A Merchant who objects on reasonable data protection grounds
within that period may terminate their use of Waitly without penalty, and
OctaByte will delete their data under section 10.

OctaByte imposes on each sub-processor obligations no less protective than
those in this agreement, and remains fully liable to the Merchant for their
performance.

## 7. Data subject requests

Shopify's mandatory compliance webhooks are the primary channel, and OctaByte
implements all three:

- **`customers/data_request`** — OctaByte compiles the personal data it holds
  for that data subject and provides it to the Merchant.
- **`customers/redact`** — OctaByte **anonymises** the subscriber record,
  permanently removing the email address, phone number, Shopify customer
  identifier, unsubscribe token, IP address and user agent. The record is
  retained without any identifier, for the reasons in section 8. Where the
  Merchant requires the row itself deleted, OctaByte will do so on written
  request.
- **`shop/redact`** — OctaByte deletes all of that store's data.

A request that reaches OctaByte directly is forwarded to the Merchant and acted
on under their instruction. OctaByte responds within 30 days.

## 8. Erasure by anonymisation

OctaByte answers a customer erasure request by removing every identifier from
the record rather than by deleting the record, because deletion would cascade
through, and destroy, the Merchant's own demand and revenue history —
retroactively changing figures the Merchant was already shown.

OctaByte relies on this as a complete answer only because what remains cannot
identify a natural person: no address, no phone number, no platform identifier,
no network address, no device string, and no field from which any of these
could be reconstructed.

Two records survive, and both exist to serve the data subject:

- the fact that consent was given or withdrawn, stripped of every identifier —
  the evidence that the subscription was legitimate;
- a standing suppression, which is the record that an address asked not to be
  contacted. Retaining that address is what makes the request enforceable, and
  Shopify's own guidance permits retention where the processor is required to
  keep it.

## 9. Retention

Personal data is retained for the period the Merchant configures, between 30
and 365 days, defaulting to 365. The default is also the maximum; a Merchant
may only shorten it.

The period governs both a waitlist entry that has gone quiet and one that has
ended, so nothing is retained longer than twice the configured period.

**Stated plainly, because it is the limit of the above:** a subscriber's email
address is held for the life of the installation. Retention bounds the demand
history, not the identity. An address is removed by a customer erasure request,
by a store erasure request, or by the uninstall erasure in section 10.

The email address on an order containing a preorder is removed automatically
once nothing on that order is left to ship. The rest of the preorder record,
with no email address, is kept for the life of the installation.

## 10. Deletion on termination

On uninstall, Shopify sends `shop/redact` 48 hours later and OctaByte deletes
the store's personal data on receipt.

Shopify does not guarantee that webhook's delivery. OctaByte therefore deletes
an uninstalled store's data **seven days after the uninstall** whether or not
the webhook arrived. This is well inside the 30 days Shopify's API terms allow,
and the shorter window is deliberate: it leaves room to retry a failed deletion
rather than spending the entire budget on waiting.

A Merchant may request deletion sooner in writing.

## 11. Audit

OctaByte will provide the information reasonably needed to demonstrate
compliance with this agreement, on written request and no more than once a
year, unless a supervisory authority or a security incident requires otherwise.
Where an on-site audit is required by law, the parties will agree its scope,
timing and cost in advance, and the auditor must be bound by confidentiality.

## 12. International transfers

The application and database are in Germany. Email delivery is in the United
States, so an email address is transferred there when a notification is sent.

Where a transfer requires a safeguard, the parties rely on the European
Commission's Standard Contractual Clauses (Module 2, controller to processor),
which are incorporated into this agreement by reference, with the details in
section 3 completing their Annex I and the measures in section 5 completing
their Annex II. Where the UK Addendum or the Swiss adaptations apply, they
apply too.

## 13. Breach notification

OctaByte notifies the Merchant of a personal data breach affecting the
Merchant's data **without undue delay and within 48 hours** of becoming aware
of it, so that the Merchant can meet a 72-hour regulatory deadline. The
notification describes what is known: the nature of the breach, the categories
and approximate number of data subjects and records, the likely consequences,
and the measures taken. OctaByte updates it as more is established rather than
delaying the first notice until everything is known.

## 14. Liability

Liability under this agreement is subject to the limitations in the Waitly
terms of service, except where applicable data protection law does not permit
that.

## 15. Changes

OctaByte may update this agreement to reflect a change in law, in
sub-processors, or in the app. Material changes are notified to Merchants
through the app at least 30 days before they take effect. The version number
and effective date at the top record each change.

**Contact:** support@octabyte.io
