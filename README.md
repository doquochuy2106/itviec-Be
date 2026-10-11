# ITViec Clone — Backend API (NestJS + MongoDB)

RESTful API backend for the **ITViec Clone** recruitment platform, built with **NestJS**, **TypeScript**, and **MongoDB (Mongoose)**. It provides authentication, fine-grained Role-Based Access Control (RBAC), company/job/resume management, file uploads, and automated weekly job notification emails via Cron Jobs.

- **Live Frontend Demo:** [https://itviec-fe-gslm.vercel.app](https://itviec-fe-gslm.vercel.app)
- **Demo Admin Account:** `admin@gmail.com` | **Password:** `123456`
- **Frontend Repository:** [github.com/doquochuy2106/itviec-Fe](https://github.com/doquochuy2106/itviec-Fe)

---

## Key Features

- **Authentication & Security:**
  - JWT-based authentication (`Access Token` + `Refresh Token` stored in HTTP-Only Cookies).
  - Password hashing with `bcryptjs`, HTTP security headers via `Helmet`, and API rate limiting with `@nestjs/throttler`.
- **Dynamic Role-Based Access Control (RBAC):**
  - Granular endpoint-level permissions (`GET`, `POST`, `PATCH`, `DELETE` per module) assigned to customizable Roles (`SUPER_ADMIN`, `HR`, `NORMAL_USER`).
  - Global `JwtAuthGuard` and custom decorators (`@Public()`, `@ResponseMessage()`, `@User()`) for standardized request handling.
- **Core Recruitment Modules:**
  - **Companies:** CRUD operations, pagination, search/filtering, and logo upload.
  - **Jobs:** Job posting management by skills, location, salary range, level, and active dates.
  - **Resumes (CV Applications):** Online CV upload (`Multer`), application submission, and application status workflow (`PENDING` -> `REVIEWING` -> `APPROVED` / `REJECTED`).
  - **Subscribers & Automated Cron Emails:** Candidates subscribe by skills; automated Cron Jobs (`@nestjs/schedule`) send weekly matching job digest emails rendered with `Handlebars` templates and `Nodemailer`.
- **API Documentation & Standardization:**
  - Interactive OpenAPI/Swagger documentation at `/swagger` with API URI Versioning (`/api/v1/...`).
  - Global `TransformInterceptor` and `ValidationPipe` (`class-validator` / `class-transformer`) for consistent response formatting and payload validation.
  - Soft-delete support across all MongoDB schemas (`soft-delete-plugin-mongoose`).

---

## Tech Stack

| Category | Technologies |
| :--- | :--- |
| **Framework & Language** | NestJS 10, Node.js, TypeScript |
| **Database & ODM** | MongoDB, Mongoose, `soft-delete-plugin-mongoose`, `api-query-params` |
| **Authentication & Security** | Passport.js (`passport-jwt`, `passport-local`), `@nestjs/jwt`, Helmet, Throttler |
| **Background Jobs & Mail** | `@nestjs/schedule` (Cron), `@nestjs-modules/mailer`, Nodemailer, Handlebars (`.hbs`) |
| **Documentation & DevOps** | Swagger (`@nestjs/swagger`), Docker, Docker Compose, Render |

---

## Project Structure

```text
src/
├── auth/           # Local & JWT strategies, Guards, Login/Register/Refresh token flows
├── companies/      # Company CRUD, search & pagination
├── jobs/           # Job postings, skill/location filtering
├── resumes/        # Candidate CV submissions & HR review status tracking
├── permissions/    # Endpoint-level permission definitions
├── roles/          # Role management & permission assignment (RBAC)
├── subscribers/    # Skill subscription management for job alerts
├── mail/           # Nodemailer + Handlebars templates + Cron job scheduler
├── files/          # Multer file upload configuration & static asset handling
├── databases/      # Database seeding & initial sample data setup
├── core/           # Global TransformInterceptor & HTTP exception filters
└── decorator/      # Custom decorators (@Public, @User, @ResponseMessage)
```

---

## Getting Started

### 1. Prerequisites
- **Node.js** >= 16.20.0 (or v18+)
- **MongoDB** (Local instance, Docker container, or MongoDB Atlas)

### 2. Installation

```bash
# Install dependencies
npm install --legacy-peer-deps
```

### 3. Environment Variables

Copy `.env.example` to `.env` and configure your credentials:

```bash
cp .env.example .env
```

### 4. Run the Application

```bash
# Development mode (watch)
npm run dev

# Production build
npm run build
npm run start:prod
```

Once running, access the Swagger API documentation at:
`http://localhost:8080/swagger`

### 5. Run with Docker Compose

```bash
docker compose up -d
```
