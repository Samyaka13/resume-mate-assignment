# 📄 PDF Generator App

Build a Next.js + TypeScript app with 2 screens to collect user details, preview them as a PDF,
and allow downloading the PDF.

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

| Tech                | Purpose                                |
| ------------------- | -------------------------------------- |
| **Next.js**         | Framework for routing and SSR          |
| **TypeScript**      | Type safety                            |
| **Zustand**         | Global state management                |
| **React Hook Form** | Form handling                          |
| **Zod**             | Schema-based form validation           |
| **ShadCN UI**       | Clean and accessible component styling |
| **react-to-print**  | Print and download functionality       |

---

## 📂 Folder Structure

src/
│
├── app/
│ ├── page.tsx # Entry point (renders main screen)
│ └── screen1/page.tsx # Form screen
│ └── screen2/page.tsx # PDF preview screen
│
├── components/
│ ├── PrintableCard.tsx # Displays printable user info
│ └── Errorboundary.tsx # Catches and handles rendering errors
│
├── store/
│ └── useFormStore.ts # Zustand store for global form data
│
├── validators/
│ └── validationSchema.ts # Zod schema for form validation

---

## ⚙️ Getting Started

### 1. Clone the Repository

```bash
git clone https://github.com/Samyaka13/resume-mate-assignment.git
cd pdf-generator-app
```

### 2. Install Dependencies

```bash
npm install
# or
yarn
```

### 3. Run Locally

```bash
npm run dev
# or
yarn dev
```

Open your browser and visit http://localhost:3000

## 🌍 Deployment

You can check the live deployment here:
🔗 https://resume-mate-assignment-three.vercel.app/

## Author

## Author

Samyak Ajmera

#### LinkedIn - [Click Here](https://www.linkedin.com/in/samyak-ajmera/)
