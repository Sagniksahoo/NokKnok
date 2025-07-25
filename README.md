# NokKnok


# 🏢 Visitor Management Portal

A web-based portal designed to streamline and manage visitor entries, employee interactions, and administrative approvals in a secure and automated manner.

---

## 📂 Portal Sections

The portal is divided into three main sections:

- 🔧 **Management**
- 🧑‍💼 **Colleague**
- 🙋‍♂️ **Visitor**

---

## 🔧 Management Workflow

> _Coming soon: Details for managing approvals, logs, emergency overrides, and analytics._

---

## 🧑‍💼 Colleague Workflow

> _Coming soon: Steps to manage availability, view and respond to visit requests, and track visit history._

---

## 🙋‍♂️ Visitor Workflow

The **Visitor** tab enables a secure and structured entry process for guests.

```
Step 1 │ 📋 Submit Visitor Details
```

Visitor fills in the following:
- Full Name
- Mobile Number
- Email Address
- Aadhaar Number
- Purpose of Visit
- Person to Visit (dropdown)
- Real-time Photo Capture

✅ **Enhancements:**
- Smart input validation and masking (phone, email, Aadhaar)
- Autofill based on previous visits or QR invites

---

```
Step 2 │ 📧 Email Notification to Colleague
```

- The system fetches colleague’s email from the database
- Sends visitor details with **Approve / Reject** action buttons

---

```
Step 3 │ 🔐 OTP Verification (Email-based) for Visitor
```

- **Only after colleague approval**, the flow proceeds
- Visitor receives a One-Time Password via email
- Visitor must verify OTP to continue

✅ **Enhancements:**
- Countdown timer with resend option
- OTP attempt limit and CAPTCHA for added security

---

```
Step 4 │ 📬 Email Notifications (Triggered Events)
```

- 📩 **To Colleague**  
  - Confirmation email with visit summary  
  - Optional entry instructions / QR code

- 📩 **To Management/Admin**  
  - Notification with visitor request and visit summary

- 📩 **To Visitor**  
  - Confirmation with visit summary  
  - Office map (optional)  
  - Entry QR code and instructions

✅ **Enhancements:**
- QR-based check-in included in email
- Calendar invite integration

---

```
Step 5 │ 🪪 Approval & ID Card Issuance
```

Upon colleague approval:
- System generates temporary Visitor ID Card
- ID Card is **valid for 6 hours**
- Includes:
  - Visitor Photo
  - Name, Mobile Number, Aadhaar (optional)
  - Colleague Name
  - Purpose & Entry Time
  - QR Code / Barcode for check-in

✅ **Enhancements:**
- Mobile-friendly or printable ID
- QR code scan at gate
- Geo-fencing for auto check-in via mobile

---

## 🧑‍💼 Colleague Tab Features

- View & approve/reject visitor requests
- Set and update availability
- View schedule of expected visitors
- Mark visits as completed or no-show

✅ **Enhancements:**
- Slack / MS Teams integration for notifications
- Auto-respond when unavailable

---

## 🔧 Management Tab Features

- Centralized dashboard: active visitors, approvals, logs
- Manual override and ID issuance
- Visitor analytics: frequency, departments, trends
- Exportable reports for audit
- Role-based access & permissions

✅ **Enhancements:**
- Blocklist / Flag suspicious visitors
- Overstay alerts
- Real-time security desk alerts

---

## 📊 Admin Dashboard Suggestions

- Total visitors by day/week/month
- Top colleagues/teams with frequent visits
- Visitor feedback ratings (optional post-visit form)
- Approval response time metrics
- No-show analytics

---

## 🛠 Technology Stack

| Layer         | Tech Used                      |
|---------------|--------------------------------|
| **Frontend**  | Angular / TypeScript           |
| **Backend**   | Flask (Python)                 |
| **Database**  | MongoDB                        |
| **Email**     | SMTP                           |
| **Image Capture** | HTML5 Camera API / Python |
| **QR Code**   | `qrcode.js` / Google Charts API|

---

## 🚀 Future Enhancements

- ✅ SMS / WhatsApp OTP support
- ✅ Mobile App for Security Desk Check-in
- ✅ NFC / RFID badge integration
- ✅ Touchscreen self-check-in kiosk mode
- ✅ Multi-office support with centralized admin
- ✅ AI-based face recognition for repeat visitors
- ✅ Visitor feedback form after checkout
- ✅ Auto check-out based on geo-fencing / QR scan

---
