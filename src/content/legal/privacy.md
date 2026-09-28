**Last updated:** {{LAST_UPDATED}}

## 1. Who we are

Waitly is a Shopify app operated by {{OCTABYTE_LEGAL_NAME}} ("Octabyte", "we",
"us"), of {{OCTABYTE_ADDRESS}}.

Contact us about anything in this policy at **support@octabyte.io**.

## 2. What this policy covers, and the two roles we hold

Waitly lets a Shopify merchant collect back-in-stock and preorder demand from
shoppers, and notify those shoppers when a product returns.

We hold two different legal roles, and they are worth separating because they
carry different rights:

- **For a merchant's own account data** — the shop domain, the settings a
  merchant configures, the support address they give us — we are the
  **controller**.
- **For the personal data of a merchant's customers and storefront visitors**
  we are a **processor**, acting on that merchant's instructions. The merchant
  is the controller. Our agreement with them is the
  [Waitly Data Protection Agreement](/dpa/).

If you are a shopper and you want your data removed, the fastest route is the
merchant whose store you subscribed on; they can act immediately through
Shopify. You may also write to us at support@octabyte.io and we will act on the
merchant's instruction.

## 3. What we collect

### 3.1 Through Shopify's APIs

- **Shop and installation data**: the store's `myshopify.com` domain, its
  Shopify shop id, install and uninstall timestamps, and the subscription plan
  the merchant is on.
- **Product, variant and inventory data**: variant identifiers and available
  quantities. This is not personal data, and it is what tells us a product has
  come back in stock.
- **Order data**, used only to tell a merchant whether a notification led to a
  purchase: order and line item identifiers, the amount and currency of the
  matched line, and **the email address on the order**.

The order email address is the **only protected customer data field** Waitly
requests from Shopify. We do not request name, address or phone. We match on
the email address rather than on the Shopify customer record, because the
customer record would require broader access, and because a guest checkout has
no customer record at all.

### 3.2 Directly from the merchant

The settings a merchant enters in the app: a support email address shown to
their shoppers, a sender display name, a retention period, an attribution
window, and notification limits.

### 3.3 Directly from a merchant's customers

When a shopper asks to be notified about a product, through a widget on the
merchant's storefront, we collect:

- their **email address**;
- optionally a **phone number** — the field exists in our system but Waitly
  does not use it, because Waitly has no SMS channel;
- the **IP address and browser user agent** at the moment they subscribed,
  together with the page or source they subscribed from.

The IP address and user agent are collected for one purpose only: they are the
evidence that consent was given, by whom and from where. They are not used to
profile anyone, they are not used for advertising, and they are deleted when a
customer erasure request reaches us, even though the rest of the consent record
survives it (see section 8).

Waitly sets **no cookies** and uses no tracking pixels on a merchant's
storefront. We do not track how a shopper navigates a store.

### 3.4 What we generate

Records of the waitlist entries themselves, the notifications we queue and
send, unsubscribe tokens, and the standing record that someone has asked not to
be contacted.

### 3.5 What we never collect

We do not collect or store payment card details, passwords, checkout contents,
or the name, postal address or phone number held on a Shopify customer record.

## 4. Why we use it

We process personal data for these purposes and no others:

1. **App functionality** — recording that a shopper wants to hear about a
   product, detecting that the product has returned, and sending them the
   notification they asked for.
2. **Marketing on the merchant's behalf** — the notification itself is a
   marketing message, sent under the consent the shopper gave on that store.
3. **Analytics and reporting to the merchant** — showing a merchant how much
   demand a product has, how many notifications were sent, and how much revenue
   followed from them.

We do not sell personal data. We do not share it with advertisers. We do not
use it to train machine learning models. We do not use it to make automated
decisions that have legal or similarly significant effects on anyone.

## 5. Who else sees it

We use four sub-processors, and only four:

| Sub-processor                          | What it does                                                                       | Where                       |
| -------------------------------------- | ---------------------------------------------------------------------------------- | --------------------------- |
| Shopify Inc.                           | Hosts the store and the app's session data; the source of order and inventory data | Canada / global             |
| Resend (Plus Five Five, Inc.)          | Delivers the notification emails                                                   | United States (`us-east-1`) |
| Hetzner Online GmbH                    | Hosts the application server, its database and its job queue                       | Germany (`nbg1`)            |
| Functional Software, Inc. d/b/a Sentry | Receives a report when something in the app fails, so we can find and fix it       | United States (Iowa)        |

The last of these is different from the other three, and the difference is
deliberate. An error report is a diagnostic record, not a copy of your data: it
carries the internal reference numbers of the records involved, the store
domain, and the failing code. It does not carry a shopper's email address. The
app removes any address from the text of a report before it is sent, and the
reports are configured to carry no request contents, no browser cookies or
headers, no database values and no variables from the running code. So no
address travels with an error report, and an erasure request has nothing to
reach in one.

The current list is maintained at
[the Waitly Data Protection Agreement](/dpa/), and merchants are notified
before a sub-processor is added or changed.

Beyond these, we disclose personal data only where we are legally compelled to.

## 6. Where it is processed

The application and its database run in **Germany**. Notification emails are
delivered through a provider in the **United States**, which means an email
address reaches the United States at the moment a notification is sent.

Error reports also go to the **United States**, and that is a second transfer.
It is a narrower one: as section 5 describes, a report carries reference
numbers and failing code rather than personal data, and no email address goes
with it.

Where a transfer needs a legal basis, it rests on the European Commission's
Standard Contractual Clauses, incorporated into our agreements with the
relevant providers and with merchants.

## 7. How long we keep it

Each merchant sets a **retention period** for their store, between 30 and 365
days. It defaults to 365 days, which is also the maximum: a merchant may
shorten it, never extend it.

That period governs both ends of a waitlist entry's life:

- an entry that is still waiting and has seen no activity for longer than the
  period is **ended**;
- an entry that ended more than one period ago is **deleted**, taking the
  record of any notifications sent for it.

So no waitlist entry survives longer than twice the retention period, and one
for a product that never returns is not kept indefinitely.

**One thing outlives that, and we would rather say so than leave it to be
discovered.** The email address itself sits on a subscriber record, separate
from the individual waitlist entries. Deleting every entry a person ever made
does not delete their address. An address is retained for the life of the
merchant's installation, and is removed when:

- Shopify sends us an erasure request for that customer (section 8); or
- the merchant uninstalls Waitly. Shopify asks us to erase the store's data 48
  hours after an uninstall. If that request never arrives, we erase the store
  anyway, **seven days after the uninstall**, without being asked.

Aggregated revenue figures already reported to a merchant survive the deletion
of the notification they came from, because a merchant's historical revenue
report should not silently change months later. Those figures identify an order
and an amount; they do not contain an email address.

## 8. Erasure requests, and what "anonymised" means here

When Shopify passes us a customer erasure request, we **anonymise** the
subscriber record rather than delete the row: we permanently remove the email
address, the phone number, the Shopify customer id, the unsubscribe token, and
the IP address and user agent from every consent record, and we stamp the row
as redacted.

We keep the row because deleting it would cascade through, and destroy, the
merchant's demand and revenue history — quietly rewriting numbers the merchant
was shown months earlier, with no event to explain the change.

**We treat anonymisation as a complete answer to an erasure request only
because what remains genuinely cannot identify anyone.** After the operation
the record holds no address, no phone number, no Shopify identifier, no
network address and no device string — nothing that names a person, and nothing
that could be matched back to one without the very data we deleted. What is
left is a count: that some person, at some time, wanted a product. If that were
not true, deletion would be the only honest answer, and we would delete.

Two things are deliberately kept, and both are kept _for_ the person, not
despite them:

- **The fact that consent was given or withdrawn** — the channel, whether it
  was granted, and when. Stripped of the identifiers above, this is the only
  evidence that the subscription was legitimate. It is what a later dispute
  would be decided on.
- **A standing suppression** — the record that an address asked not to be
  emailed. This is the one case where we hold an address in order to honour a
  request, and forgetting it would make that address contactable again.

A store erasure request deletes everything, with no exception.

## 9. Consent, and how to stop

A shopper is added to a waitlist only by their own action on a merchant's
storefront. Every notification carries an unsubscribe link, and supports
one-click unsubscribe in the mail clients that offer it, so unsubscribing never
requires visiting a page or filling in a form.

Unsubscribing records a standing suppression: we stop emailing that address for
that store, on every waitlist, immediately and permanently, until the person
subscribes again themselves.

## 10. Security

Personal data lives in exactly one place — our database. It is deliberately
kept out of our job queue, out of our application logs, and out of the payloads
our background jobs carry, so that an erasure reaches all of it.

Data is encrypted in transit on every hop that crosses a network. Access to
production data is limited to the people who need it, logged, and protected by
multi-factor authentication.
Production data is never copied into development or test environments.

We hold a written security incident response policy. If a breach affects
personal data we process for a merchant, we notify that merchant without undue
delay and no later than **48 hours** after we become aware of it, so that they
can meet their own 72-hour obligation.

## 11. Your rights

Depending on where you live, you may have the right to access, correct, delete,
port or restrict the use of your personal data, and to object to its
processing.

For a shopper's data, we act as processor: send the request to the merchant
whose store you used, or to us at support@octabyte.io and we will pass it on
and act on their instruction. We answer within 30 days.

You may also complain to your local data protection authority.

## 12. Children

Waitly is not directed at children and we do not knowingly collect data from
anyone under 16. If you believe we hold such data, write to support@octabyte.io
and we will delete it.

## 13. Changes

We update this policy when what we do changes. The date at the top records the
last change. Material changes are notified to merchants through the app before
they take effect.
