# The Williams Collection - Payment Recovery Website

Professional cross-sell website for The Williams Collection Inc., focused on payment recovery solutions for eCommerce businesses.

## Company Information

- **Company Name**: The Williams Collection Inc.
- **Address**: E 2ND ST 5830 Casper WY US 82609
- **Founded**: March 2023
- **Owner**: Shannon Williams
- **Phone**: +1 517-258-3818

## Features

- ✅ Professional CartRescue-style landing page
- ✅ No "Serenity" branding anywhere
- ✅ Company details loaded from environment variables
- ✅ Fully responsive design
- ✅ No-indexed for search engines (robots.txt + meta tags)
- ✅ Styled-components for modern UI

## Setup Instructions

### 1. Install Dependencies

```bash
npm install
```

### 2. Environment Variables

The `.env` file is already configured with:
- Company name
- Address
- Phone number
- Email support
- Owner information

### 3. Run Development Server

```bash
npm start
```

Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

### 4. Build for Production

```bash
npm run build
```

## Search Engine Visibility

This site is configured to be **no-indexed** using:
- `robots.txt` with `Disallow: /`
- Meta tag: `<meta name="robots" content="noindex, nofollow">`

## Project Structure

```
williams_cs_1/
├── public/
│   ├── index.html          # No-index meta tag included
│   ├── robots.txt          # Disallow all crawlers
│   └── manifest.json       # App metadata
├── src/
│   ├── components/
│   │   ├── Header.tsx      # Navigation header
│   │   ├── HeroSection.tsx # Main hero section
│   │   ├── FeaturesSection.tsx # 6 key features
│   │   ├── StatsSection.tsx # Industry statistics
│   │   ├── CTASection.tsx  # Call-to-action
│   │   └── Footer.tsx      # Footer with contact info
│   ├── App.tsx             # Main app component
│   └── index.tsx           # Entry point
├── .env                    # Environment variables (DO NOT COMMIT)
└── package.json
```

## Technologies Used

- React 19.2.0
- TypeScript 4.9.5
- Styled-components 6.1.19
- React Scripts 5.0.1

## Important Notes

⚠️ **CRITICAL**: The word "Serenity" must NEVER appear anywhere in:
- Domain names
- Content
- Meta data
- Descriptions
- Emails
- Backend areas

✅ All company details are pulled from the `.env` file and match official documentation.
