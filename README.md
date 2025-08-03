# 📄 PDF Generator App

A frontend internship assignment built using **Next.js**, **TypeScript**, **Zustand**, **React Hook Form**, **ShadCN UI**, and **Zod**. The app collects user details, displays them in a downloadable PDF format, and provides a smooth multi-step user experience.

---

## 🚀 Features

### 🔹 Screen 1: Form
- Collects user details:
  - **Name**
  - **Email**
  - **Phone Number**
  - **Position**
  - **Description** 
- Buttons:
  - **View PDF** → Navigates to the PDF preview page.
  - **Download PDF** → Instantly downloads the details as a PDF.
- **Validation (with Zod):**
  - Name, Email, and Phone are required.
  - Email must be in a valid format.
  - Phone number must contain at least 10 digits.

### 🔹 Screen 2: PDF Preview
- Displays a styled layout with the user's entered information.
- Buttons:
  - **Back** → Returns to the form with all data preserved.
  - **Download PDF** → Downloads the content as a printable PDF.

---

## 🧱 Tech Stack

| Tech              | Purpose                                 |
|-------------------|------------------------------------------|
| **Next.js**       | Framework for routing and SSR            |
| **TypeScript**    | Type safety                              |
| **Zustand**       | Global state management                  |
| **React Hook Form** | Form handling                         |
| **Zod**           | Schema-based form validation             |
| **ShadCN UI**     | Clean and accessible component styling   |
| **react-to-print**| Print and download functionality         |

---

## 📂 Folder Structure

src/
│
├── app/
│ ├── page.tsx # Entry point (redirects or renders main screen)
│ └── screen1/page.tsx # Form screen
│ └── screen2/page.tsx # PDF Preview screen
│
├── components/
│ └── PrintableCard.tsx 
│ └── Errorboundary.tsx 
│
├── store/
│ └── useFormStore.ts # Zustand store for persisting form data
│
├── validators/
│ └── validationSchema.ts # Zod validation schema








