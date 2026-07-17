# AI Teacher Studio (ATS)

# Project Context

**Document ID** : ATS-DOC-000  
**Document Name** : Project Context  
**Version** : 1.0.0 (Draft)  
**Status** : Active  
**Owner** : AI Teacher Studio Development Team  
**Last Updated** : July 2026

---

# Revision History

| Version | Date | Author | Description |
|----------|------|--------|-------------|
| 1.0.0 | 2026-07-17 | ATS Team | Initial Constitution |




# Document Purpose

Dokumen ini merupakan dokumen induk (master document) yang menjelaskan konteks, visi, filosofi, tujuan, ruang lingkup, dan arah pengembangan AI Teacher Studio (ATS).

Seluruh dokumentasi teknis, keputusan arsitektur, standar pengembangan, implementasi modul, serta roadmap proyek mengacu pada dokumen ini.

Dokumen ini wajib dibaca oleh setiap pengembang sebelum melakukan perubahan terhadap source code maupun dokumentasi proyek.

---

# Executive Summary

AI Teacher Studio (ATS) adalah platform digital yang dirancang untuk membantu guru dalam merencanakan, melaksanakan, mengevaluasi, dan mengelola seluruh proses pembelajaran secara terintegrasi.

ATS dikembangkan menggunakan Google Apps Script sebagai platform implementasi awal dengan pendekatan arsitektur modular, dokumentasi yang kuat, dan prinsip platform-independent sehingga logika bisnis dapat dikembangkan ke platform lain di masa depan apabila diperlukan.

ATS bukan sekadar aplikasi administrasi guru. ATS dirancang sebagai ekosistem kerja digital yang menggabungkan pengelolaan data, otomatisasi administrasi, pemanfaatan kecerdasan buatan (AI), serta integrasi dokumen pembelajaran ke dalam satu sistem yang mudah digunakan.

Fokus utama ATS adalah mengurangi beban administratif guru sehingga guru dapat lebih banyak mencurahkan waktu untuk proses pembelajaran yang berkualitas.

---

We build for teachers.

We document before coding.

We design before implementing.

We value clarity over cleverness.

We automate repetitive work.

We protect data integrity.

We build sustainable software.


# Non Goals

ATS bukan:

- Learning Management System
- Video Conference Platform
- Marketplace
- Social Network
- Student Information System

ATS berfokus pada administrasi pembelajaran dan produktivitas guru.





# Project Vision

## Vision Statement

> *Menjadi platform digital terpadu yang membantu guru merancang, mengelola, melaksanakan, dan mengevaluasi pembelajaran secara efektif melalui pemanfaatan teknologi modern dan kecerdasan buatan.*

---

## Long-Term Vision

Dalam jangka panjang, AI Teacher Studio diharapkan menjadi platform yang mampu:

- mendukung seluruh siklus administrasi pembelajaran;
- menyediakan referensi kurikulum dan regulasi pendidikan secara terintegrasi;
- memanfaatkan AI sebagai asisten guru dalam berbagai aktivitas profesional;
- menghasilkan dokumen pembelajaran yang konsisten dengan standar nasional;
- mengurangi pekerjaan administratif yang berulang melalui otomatisasi;
- menjadi fondasi pengembangan ekosistem digital sekolah.

---

# Project Mission

Untuk mewujudkan visi tersebut, ATS memiliki misi sebagai berikut:

## 1. Teacher First

Seluruh fitur dikembangkan dengan berorientasi pada kebutuhan nyata guru dan tenaga kependidikan.

Keputusan desain selalu mempertimbangkan kemudahan penggunaan, efisiensi waktu, dan manfaat langsung bagi pengguna.

---

## 2. Documentation First

Dokumentasi merupakan bagian dari proses pengembangan.

Perubahan besar tidak dilakukan sebelum tujuan, rancangan, dan dampaknya terdokumentasi dengan baik.

---

## 3. Architecture Driven Development

Pengembangan dilakukan berdasarkan arsitektur yang telah disepakati.

Implementasi harus mengikuti struktur proyek, bukan sebaliknya.

---

## 4. AI Assisted Workflow

AI digunakan sebagai alat bantu untuk meningkatkan produktivitas guru.

AI tidak menggantikan peran guru dalam mengambil keputusan profesional maupun akademik.

---

## 5. Data Driven System

Seluruh proses bisnis didasarkan pada data yang konsisten.

Data menjadi sumber utama dalam menghasilkan laporan, analisis, dan dokumen pembelajaran.

---

## 6. Continuous Improvement

ATS dikembangkan secara bertahap melalui sprint yang terukur.

Setiap sprint menghasilkan peningkatan kualitas dokumentasi, kode, dan pengalaman pengguna.

---

# Project Background

Guru memiliki berbagai tanggung jawab yang meliputi:

- menyusun administrasi pembelajaran;
- menyusun ATP;
- menyusun Program Tahunan (Prota);
- menyusun Program Semester (Promes);
- menyusun Modul Ajar;
- melakukan asesmen;
- mengolah nilai;
- menyusun laporan pembelajaran;
- membuat media pembelajaran;
- mendokumentasikan kegiatan pembelajaran.

Sebagian besar pekerjaan tersebut masih dilakukan menggunakan berbagai file yang terpisah sehingga:

- data sering berulang;
- sinkronisasi sulit dilakukan;
- perubahan membutuhkan waktu lama;
- kualitas dokumen tidak konsisten.

AI Teacher Studio dikembangkan untuk mengatasi permasalahan tersebut melalui satu platform yang terintegrasi.

---

# Core Principles

Seluruh pengembangan ATS harus mengikuti prinsip-prinsip berikut.

## 1. Teacher First

Kepentingan guru menjadi prioritas utama dalam setiap keputusan desain maupun implementasi.

---

## 2. Simplicity

Solusi yang sederhana lebih diutamakan dibanding solusi yang rumit apabila menghasilkan manfaat yang sama.

---

## 3. Modularity

Setiap modul harus berdiri sendiri sehingga mudah dikembangkan, diuji, dan dipelihara.

---

## 4. Reusability

Komponen yang dapat digunakan kembali harus dipisahkan menjadi reusable component.

Tidak boleh terjadi duplikasi kode apabila dapat dihindari.

---

## 5. Scalability

Struktur proyek harus mampu berkembang dari beberapa modul menjadi puluhan modul tanpa perubahan arsitektur yang signifikan.

---

## 6. Maintainability

Kode dan dokumentasi harus mudah dipahami oleh pengembang lain.

---

## 7. Consistency

Penamaan, struktur folder, dokumentasi, dan pola implementasi harus konsisten di seluruh proyek.

---

## 8. Transparency

Keputusan arsitektur, perubahan besar, dan roadmap proyek harus terdokumentasi dengan baik.

---

# Project Values

Nilai-nilai yang menjadi budaya pengembangan ATS adalah:

- Professionalism
- Simplicity
- Collaboration
- Innovation
- Reliability
- Integrity
- Sustainability
- Continuous Learning

---

# Definition of Success

Sebuah fitur dianggap selesai apabila memenuhi seluruh kriteria berikut:

- Dokumentasi telah diperbarui.
- Implementasi mengikuti arsitektur ATS.
- Database telah sesuai dengan DatabaseSchema.
- UI mengikuti UI Guideline.
- Pengujian dasar telah dilakukan.
- Tidak menyebabkan regresi pada modul lain.
- Siap digunakan oleh pengguna.

Fitur yang hanya selesai dikoding tetapi belum terdokumentasi belum dianggap selesai.

---

# Scope of This Document

Dokumen ini mencakup:

- konteks proyek;
- filosofi pengembangan;
- visi dan misi;
- prinsip pengembangan;
- tujuan proyek;
- gambaran umum sistem;
- struktur organisasi proyek;
- arah pengembangan jangka panjang.

Detail implementasi teknis dijelaskan pada dokumen lain di dalam folder `docs/`.

# Design Philosophy

AI Teacher Studio dikembangkan berdasarkan filosofi bahwa teknologi harus membantu guru bekerja lebih efektif, bukan menambah beban administrasi.

Setiap keputusan desain harus menjawab tiga pertanyaan utama:

1. Apakah fitur ini benar-benar membantu guru?
2. Apakah fitur ini menyederhanakan proses kerja?
3. Apakah fitur ini dapat dipelihara dan dikembangkan dalam jangka panjang?

Apabila sebuah solusi tidak memenuhi ketiga prinsip tersebut, maka solusi tersebut harus dievaluasi kembali.

---

# Project Goals

ATS memiliki tujuan jangka pendek, menengah, dan panjang.

## Short-Term Goals

- Membangun fondasi framework ATS.
- Menyediakan Master Data yang terstruktur.
- Mengembangkan modul ATP.
- Mengembangkan Prota dan Promes.
- Mengembangkan Modul Ajar.
- Menyediakan sistem import data dari dokumen resmi.

---

## Medium-Term Goals

- Mengembangkan sistem asesmen.
- Mengembangkan bank soal.
- Mengembangkan pengolahan nilai.
- Mengembangkan dashboard analitik guru.
- Menambahkan AI Assistant.
- Menambahkan sistem otomatisasi dokumen.

---

## Long-Term Goals

- Menjadi platform administrasi guru yang lengkap.
- Mendukung kolaborasi antar guru.
- Mendukung multi sekolah.
- Mendukung integrasi cloud.
- Mendukung integrasi AI multi-provider.
- Menjadi platform yang dapat dikembangkan ke web maupun mobile tanpa mengubah business logic.

---

# Target Users

ATS dirancang untuk digunakan oleh beberapa jenis pengguna.

## Primary Users

### Guru

Merancang, melaksanakan, dan mengevaluasi pembelajaran.

---

### Kepala Sekolah

Melakukan monitoring administrasi pembelajaran.

---

### Operator Sekolah

Mengelola data master sekolah.

---

## Future Users

- Pengawas Sekolah
- Dinas Pendidikan
- Tim Kurikulum
- Administrator Sistem

---

# Scope of The System

ATS mencakup seluruh siklus administrasi pembelajaran.

Secara umum ruang lingkup ATS meliputi:

## Master Data

- Sekolah
- Guru
- Mata Pelajaran
- Kelas
- Fase
- Tahun Ajaran
- Semester
- Referensi

---

## Planning

- CP
- ATP
- KKTP
- Program Tahunan
- Program Semester
- Modul Ajar

---

## Assessment

- Asesmen Awal
- Formatif
- Sumatif
- Remedial
- Pengayaan

---

## Administration

- Agenda Mengajar
- Jurnal Mengajar
- Arsip
- Sertifikat
- Administrasi Kelas

---

## AI Services

- AI Assistant
- AI Content Generator
- AI Lesson Planner
- AI Document Assistant

---

## System

- User Management
- Configuration
- Import
- Export
- Backup
- Logging

---

# Functional Scope

ATS menyediakan kemampuan utama sebagai berikut.

## Data Management

- CRUD seluruh master data.
- Validasi data.
- Pencarian.
- Filter.
- Import.
- Export.

---

## Document Generation

ATS mampu menghasilkan dokumen pembelajaran secara otomatis berdasarkan data yang telah tersimpan.

Contoh:

- ATP
- Prota
- Promes
- Modul Ajar
- LKPD
- Rubrik

---

## AI Assistance

ATS memanfaatkan AI untuk membantu guru dalam:

- menyusun tujuan pembelajaran;
- menyusun materi;
- menyusun asesmen;
- menghasilkan contoh aktivitas pembelajaran;
- menghasilkan refleksi pembelajaran.

AI tidak menjadi pengambil keputusan akhir. Seluruh hasil AI tetap berada di bawah kendali pengguna.

---

## Reporting

ATS menyediakan berbagai laporan seperti:

- Progress Pembelajaran
- Administrasi Guru
- Rekap ATP
- Rekap Modul Ajar
- Statistik Penggunaan

---

# Non-Functional Requirements

Selain fungsi utama, ATS harus memenuhi kebutuhan non-fungsional berikut.

## Performance

- Respon antarmuka harus cepat.
- Mengurangi pembacaan Spreadsheet yang berulang.
- Memanfaatkan cache jika diperlukan.

---

## Reliability

- Data tidak boleh hilang akibat kesalahan pengguna.
- Setiap proses penting harus dapat dipulihkan.

---

## Security

- Hak akses berdasarkan peran pengguna.
- Validasi input.
- Audit log untuk aktivitas penting.

---

## Maintainability

Struktur proyek harus mudah dipahami sehingga pengembang baru dapat berkontribusi tanpa mengubah arsitektur utama.

---

## Scalability

Penambahan modul baru tidak boleh memerlukan perubahan besar pada framework ATS.

---

## Portability

Business logic dirancang agar dapat dipindahkan ke platform lain apabila diperlukan di masa depan.

---

# Project Modules

ATS dibangun menggunakan pendekatan modular.

Setiap modul memiliki tanggung jawab yang jelas dan dikembangkan secara independen.

## Core Framework

Berisi fondasi sistem seperti:

- Routing
- Configuration
- Logging
- Utility
- View Engine
- ID Generator

---

## Database Layer

Bertanggung jawab terhadap:

- Database Manager
- Repository
- Service
- Schema
- Validasi struktur data

---

## Master Data Modules

Meliputi:

- Sekolah
- Guru
- Mata Pelajaran
- Kelas
- Fase
- Referensi

---

## Learning Modules

Meliputi:

- ATP
- Prota
- Promes
- Modul Ajar
- LKPD

---

## Assessment Modules

Meliputi:

- KKTP
- Diagnostik
- Formatif
- Sumatif
- Nilai

---

## Administration Modules

Meliputi:

- Agenda
- Jurnal
- Arsip
- Administrasi Kelas

---

## AI Modules

Meliputi:

- AI Assistant
- Prompt Library
- AI History
- AI Context

---

## System Modules

Meliputi:

- Settings
- Import
- Export
- Backup
- Version
- Logging

---

# Project Organization

Pengembangan ATS dibagi ke dalam beberapa lapisan tanggung jawab.

## Documentation

Menjelaskan seluruh keputusan dan standar proyek.

---

## Architecture

Menentukan struktur dan pola pengembangan.

---

## Source Code

Implementasi seluruh business logic.

---

## Database

Mengelola struktur data dan penyimpanan.

---

## Testing

Memastikan seluruh fitur berjalan sesuai rancangan.

---

## Deployment

Mengelola proses distribusi aplikasi ke lingkungan produksi.

---

# Success Indicators

Pengembangan ATS dianggap berhasil apabila:

- Struktur proyek tetap konsisten.
- Dokumentasi selalu mengikuti implementasi.
- Modul baru dapat ditambahkan tanpa mengubah framework.
- Waktu pengerjaan administrasi guru berkurang secara signifikan.
- AI benar-benar meningkatkan produktivitas guru.
- Seluruh data tersimpan secara konsisten.
- Pengguna dapat menggunakan aplikasi tanpa pelatihan yang kompleks.

---

# Transition to Technical Documentation

Dokumen ini memberikan konteks proyek secara menyeluruh.

Detail teknis dijelaskan pada dokumen berikut:

- 01_ARCHITECTURE.md
- 02_DATABASE.md
- 03_FOLDER_STRUCTURE.md
- 04_CODING_STANDARD.md
- 05_UI_GUIDELINE.md
- 06_DEVELOPMENT_WORKFLOW.md
- 07_ROADMAP.md
- 08_PROJECT_STATUS.md

# System Architecture Overview

AI Teacher Studio (ATS) dikembangkan menggunakan arsitektur berlapis (Layered Architecture) dengan pendekatan modular.

Setiap layer memiliki tanggung jawab yang jelas dan tidak boleh mengambil alih tanggung jawab layer lainnya.

Tujuan utama arsitektur ini adalah:

- memudahkan pengembangan;
- memudahkan pengujian;
- memudahkan pemeliharaan;
- meminimalkan coupling;
- meningkatkan reusability;
- memungkinkan perpindahan platform di masa depan.

---

# Architecture Principles

Seluruh implementasi ATS harus mengikuti prinsip-prinsip berikut.

## Separation of Concerns

Setiap layer hanya menangani satu tanggung jawab.

Contoh:

- UI hanya menangani tampilan.
- Controller hanya menangani request.
- Service hanya menangani business logic.
- Repository hanya menangani akses data.
- Database hanya menangani penyimpanan data.

---

## Single Responsibility

Setiap class memiliki satu tanggung jawab utama.

Contoh:

ATPRepository

hanya bertanggung jawab terhadap operasi data ATP.

Tidak boleh:

- membuat HTML
- memanggil Dialog
- membuat Toast

---

## Dependency Direction

Ketergantungan sistem hanya boleh bergerak dari atas ke bawah.

UI

↓

Controller

↓

Service

↓

Repository

↓

Database

Tidak boleh terjadi pemanggilan dari bawah ke atas.

---

## Modular Architecture

Setiap modul merupakan unit independen.

Misalnya:

ATP

Guru

Sekolah

Prota

Promes

Modul Ajar

masing-masing memiliki:

- Controller
- Service
- Repository
- UI
- Dokumentasi

---

# High Level Architecture

Secara umum ATS terdiri atas lima lapisan utama.

```text
Browser

        │

        ▼

Google Apps Script HTML Service

        │

        ▼

Presentation Layer

        │

        ▼

Business Layer

        │

        ▼

Data Access Layer

        │

        ▼

Google Spreadsheet
```

---

# Architecture Layers

## Presentation Layer

Presentation Layer bertanggung jawab terhadap seluruh interaksi pengguna.

Lokasi:

src/views

src/ui

src/modules/*/*.html

Tugas:

- menampilkan halaman
- menerima input
- validasi sederhana
- memanggil Controller

Presentation Layer tidak boleh mengakses Spreadsheet secara langsung.

---

## Controller Layer

Lokasi:

src/modules/*/*Controller.gs

Controller menjadi penghubung antara UI dan Business Layer.

Tanggung jawab:

- menerima request
- memvalidasi request
- memanggil Service
- mengembalikan response

Controller tidak boleh:

- membaca Spreadsheet
- menulis Spreadsheet
- membuat query data

---

## Business Layer

Lokasi:

src/modules/*/*Service.gs

Service merupakan pusat business logic.

Seluruh aturan bisnis berada pada layer ini.

Contoh:

- validasi ATP
- generate kode ATP
- import ATP
- sinkronisasi data

Service tidak mengetahui bagaimana data disimpan.

---

## Data Access Layer

Lokasi:

src/modules/*/*Repository.gs

Repository hanya menangani:

- CRUD
- Query
- Filter
- Mapping

Repository tidak boleh:

- membuat Toast
- membuat Dialog
- membuat HTML
- menjalankan business rule

---

## Database Layer

Lokasi:

src/database

Database Layer menyediakan layanan umum seperti:

DatabaseManager

DatabaseRepository

DatabaseService

DatabaseSchema

Seluruh modul menggunakan layer ini.

---

# Core Framework

Framework ATS berada pada folder:

src/core

Komponen utama:

App

Router

Config

Constants

Logger

Utils

View

Installer

IdGenerator

Core Framework bersifat independen terhadap seluruh modul.

Framework tidak mengetahui ATP, Guru, maupun Modul Ajar.

---

# Module Architecture

Setiap modul wajib mengikuti struktur berikut.

```text
Module

│

├── Controller

├── Service

├── Repository

├── UI

└── Documentation
```

Contoh:

```text
ATP

│

├── ATPController.gs

├── ATPService.gs

├── ATPRepository.gs

├── Page_ATP.html

├── Modal_ATP.html

├── ATPEvents.html

└── README.md
```

Seluruh modul baru wajib mengikuti struktur ini.

---

# UI Architecture

Komponen UI dibagi menjadi dua kelompok.

Reusable Components

src/ui

Business Components

src/modules

Reusable Components:

- Modal
- Toast
- Table
- Loading
- Validator
- Dialog

Business Components:

- ATP Form
- ATP Table
- Guru Form
- Prota Form

Komponen reusable tidak boleh memiliki business logic.

---

# Database Architecture

ATS menggunakan Google Spreadsheet sebagai media penyimpanan data.

Namun seluruh akses data dilakukan melalui Database Layer.

Alur akses:

```text
Module

↓

Repository

↓

DatabaseRepository

↓

DatabaseManager

↓

Spreadsheet
```

Module tidak boleh mengakses Spreadsheet secara langsung.

---

# Data Flow

Contoh proses penyimpanan ATP.

Browser

↓

Form ATP

↓

ATPController

↓

ATPService

↓

ATPRepository

↓

DatabaseRepository

↓

Spreadsheet

↓

Response

↓

Toast

↓

Refresh Table

Seluruh proses mengikuti alur tersebut.

---

# Source of Truth

Untuk menjaga konsistensi proyek, ATS menetapkan sumber kebenaran (Source of Truth) untuk setiap aspek.

| Area | Source of Truth |
|------|-----------------|
| Database Schema | src/database/DatabaseSchema.gs |
| Konteks Proyek | docs/00_PROJECT_CONTEXT.md |
| Arsitektur | docs/01_ARCHITECTURE.md |
| Struktur Folder | docs/03_FOLDER_STRUCTURE.md |
| Coding Standard | docs/04_CODING_STANDARD.md |
| UI Standard | docs/05_UI_GUIDELINE.md |
| Workflow | docs/06_DEVELOPMENT_WORKFLOW.md |
| Roadmap | docs/07_ROADMAP.md |
| Status Proyek | docs/08_PROJECT_STATUS.md |
| Changelog | docs/09_CHANGELOG.md |
| ADR | docs/ADR |
| Dokumentasi Modul | docs/Modules |

---

# Dependency Rules

Untuk menjaga kualitas arsitektur, aturan berikut wajib dipatuhi.

## Allowed

UI

↓

Controller

↓

Service

↓

Repository

↓

Database

---

## Forbidden

UI → Spreadsheet

UI → Repository

UI → Database

Controller → Spreadsheet

Controller → HTML

Repository → Toast

Repository → Dialog

Repository → Business Rule

Service → HTML

Database → UI

---

# Project Glossary

| Istilah | Keterangan |
|----------|------------|
| CP | Capaian Pembelajaran |
| ATP | Alur Tujuan Pembelajaran |
| KKTP | Kriteria Ketercapaian Tujuan Pembelajaran |
| Prota | Program Tahunan |
| Promes | Program Semester |
| Modul Ajar | Dokumen perencanaan pembelajaran |
| Repository | Layer akses data |
| Service | Layer business logic |
| Controller | Layer penghubung UI dan Service |
| Core | Framework utama ATS |

---

# Architecture Evolution

ATS dirancang agar dapat berkembang tanpa mengubah arsitektur utama.

Tahap pengembangan diperkirakan sebagai berikut.

Version 0.x

Google Apps Script

↓

Version 1.x

Modular AI Teacher Studio

↓

Version 2.x

REST API Ready

↓

Version 3.x

Cloud Native

↓

Version 4.x

Multi Platform

↓

Version 5.x

AI Native Learning Platform

Arsitektur saat ini harus mampu mendukung evolusi tersebut tanpa perubahan fundamental pada business logic.


# Technology Stack

AI Teacher Studio dibangun menggunakan teknologi yang dipilih berdasarkan prinsip:

- sederhana untuk dipelihara;
- mudah dikembangkan;
- stabil untuk penggunaan jangka panjang;
- sesuai dengan kebutuhan administrasi pendidikan.

Pemilihan teknologi selalu mempertimbangkan keseimbangan antara kemudahan pengembangan, performa, dan biaya operasional.

---

## Current Technology Stack

| Layer | Technology |
|--------|------------|
| Runtime | Google Apps Script (V8 Runtime) |
| Backend | Google Apps Script |
| Frontend | HTML5 |
| Styling | CSS3 |
| UI Framework | Bootstrap 5 |
| JavaScript | Vanilla JavaScript (ES6+) |
| Database | Google Spreadsheet |
| Template Engine | HtmlService |
| Source Control | Git |
| Repository Hosting | GitHub |
| Documentation | Markdown |
| AI Assistant | ChatGPT / LLM Provider |

---

## Future Technology Direction

Arsitektur ATS dirancang agar dapat berkembang ke platform lain tanpa mengubah business logic utama.

Target evolusi teknologi meliputi:

- REST API
- Cloud Database
- Progressive Web Application (PWA)
- Mobile Application
- Multi AI Provider
- Cloud Deployment

Business logic harus tetap dapat digunakan meskipun media penyimpanan atau platform berubah.

---

# Database Overview

ATS menggunakan Google Spreadsheet sebagai media penyimpanan data pada fase awal pengembangan.

Spreadsheet dipilih karena:

- mudah digunakan oleh sekolah;
- tidak memerlukan infrastruktur server tambahan;
- mudah dicadangkan;
- mudah dipulihkan;
- terintegrasi dengan Google Workspace.

Meskipun demikian, seluruh akses data dilakukan melalui Database Layer sehingga implementasi penyimpanan dapat diganti di masa depan.

---

## Database Design Principles

Seluruh struktur database mengikuti prinsip berikut:

### Single Source of Truth

Struktur tabel hanya didefinisikan pada:

src/database/DatabaseSchema.gs

Tidak diperbolehkan membuat struktur tabel secara manual di modul.

---

### Centralized Access

Seluruh operasi database dilakukan melalui Database Layer.

Modul tidak boleh mengakses Spreadsheet secara langsung.

---

### Schema Driven

Perubahan struktur tabel dilakukan dengan mengubah DatabaseSchema terlebih dahulu, kemudian menyesuaikan implementasi.

---

### Data Integrity

Seluruh proses CRUD harus menjaga:

- konsistensi data;
- validitas relasi;
- keunikan identifier;
- audit perubahan bila diperlukan.

---

# Source Code Organization

Struktur source code ATS dirancang agar mudah dipahami dan dikembangkan.

Direktori utama terdiri atas beberapa area tanggung jawab.

```text
src/

core/

database/

modules/

ui/

views/
```

---

## Core

Berisi framework utama aplikasi.

Contoh:

- Router
- App
- Config
- Logger
- Installer
- View
- Utils

Core tidak bergantung pada modul bisnis.

---

## Database

Berisi seluruh komponen pengelolaan database.

Contoh:

- DatabaseManager
- DatabaseRepository
- DatabaseService
- DatabaseSchema

---

## Modules

Berisi implementasi seluruh fitur bisnis.

Setiap modul berdiri sendiri dan mengikuti pola:

Controller

↓

Service

↓

Repository

↓

UI

↓

Documentation

---

## UI

Berisi komponen antarmuka yang dapat digunakan kembali oleh seluruh modul.

Contoh:

- Modal
- Table
- Alert
- Loading
- Dialog
- Toast

---

## Views

Berisi halaman utama aplikasi yang menggabungkan berbagai komponen UI dan modul.

---

# Documentation Organization

Dokumentasi merupakan bagian dari source code dan dipelihara bersama implementasi.

Struktur dokumentasi mengikuti organisasi berikut:

```text
docs/

00_PROJECT_CONTEXT.md

01_ARCHITECTURE.md

02_DATABASE.md

03_FOLDER_STRUCTURE.md

04_CODING_STANDARD.md

05_UI_GUIDELINE.md

06_DEVELOPMENT_WORKFLOW.md

07_ROADMAP.md

08_PROJECT_STATUS.md

09_CHANGELOG.md

10_DECISION_LOG.md

11_DEPLOYMENT.md

12_TESTING_GUIDE.md

ADR/

Modules/

Architecture/

Database/

Reference/

Sprint/

Templates/
```

---

# Project Governance

Pengembangan ATS mengikuti prinsip tata kelola proyek yang sederhana namun disiplin.

Seluruh perubahan harus dapat ditelusuri melalui dokumentasi, riwayat versi, dan repositori kode.

Prinsip utama tata kelola ATS meliputi:

- transparansi;
- konsistensi;
- dokumentasi;
- kolaborasi;
- keberlanjutan.

---

## Decision Making

Keputusan yang berdampak terhadap arsitektur, struktur database, atau workflow proyek harus didokumentasikan melalui:

Decision Log

atau

Architecture Decision Record (ADR).

Dengan demikian seluruh perubahan memiliki alasan yang jelas dan dapat ditelusuri di masa depan.

---

## Documentation Governance

Dokumentasi memiliki prioritas yang sama dengan source code.

Perubahan implementasi harus diikuti dengan pembaruan dokumentasi yang relevan.

Dokumentasi yang tidak sesuai dengan implementasi dianggap sebagai technical debt dan harus segera diperbaiki.

---

# Development Governance

Pengembangan ATS dilakukan secara bertahap melalui sprint yang terukur.

Setiap sprint menghasilkan salah satu atau beberapa keluaran berikut:

- fitur baru;
- peningkatan kualitas kode;
- penyempurnaan dokumentasi;
- peningkatan performa;
- refactoring;
- pengujian.

Target sprint harus realistis dan dapat diverifikasi.

---

# Quality Principles

Seluruh implementasi harus memenuhi standar kualitas berikut.

## Readability

Kode harus mudah dibaca oleh pengembang lain.

---

## Consistency

Seluruh modul menggunakan pola implementasi yang sama.

---

## Testability

Business logic harus mudah diuji tanpa bergantung pada UI.

---

## Reusability

Komponen umum harus dapat digunakan kembali.

---

## Simplicity

Solusi yang sederhana lebih diprioritaskan dibanding solusi yang kompleks.

---

## Maintainability

Perubahan kecil tidak boleh menyebabkan perubahan besar pada modul lain.

---

# Project Risks

Beberapa risiko utama dalam pengembangan ATS meliputi:

## Technical Risks

- Kompleksitas modul yang terus bertambah.
- Ketergantungan pada Google Apps Script.
- Batas kuota layanan Google.

---

## Documentation Risks

- Dokumentasi tertinggal dari implementasi.
- Inkonsistensi istilah antar dokumen.

---

## Development Risks

- Duplikasi kode.
- Ketergantungan antar modul.
- Perubahan kebutuhan pengguna.

---

## Mitigation Strategy

Risiko tersebut dikurangi melalui:

- dokumentasi yang baik;
- arsitektur modular;
- code review;
- refactoring berkala;
- sprint review;
- pengujian berkelanjutan.

---

# Success Criteria

Proyek ATS dianggap berjalan sesuai arah apabila:

- Arsitektur tetap konsisten.
- Dokumentasi selalu diperbarui.
- Modul baru dapat ditambahkan tanpa mengubah framework.
- Database tetap menjadi sumber kebenaran utama.
- Business logic tetap terpisah dari UI.
- Pengguna memperoleh manfaat nyata dari setiap fitur baru.

---

# Transition to Detailed Documentation

Dokumen ini memberikan gambaran umum mengenai konteks dan tata kelola proyek.

Penjelasan rinci tersedia pada dokumen berikut:

- 01_ARCHITECTURE.md
- 02_DATABASE.md
- 03_FOLDER_STRUCTURE.md
- 04_CODING_STANDARD.md
- 05_UI_GUIDELINE.md
- 06_DEVELOPMENT_WORKFLOW.md
- 07_ROADMAP.md
- 08_PROJECT_STATUS.md
- 09_CHANGELOG.md
- 10_DECISION_LOG.md
- 11_DEPLOYMENT.md
- 12_TESTING_GUIDE.md

# Project Policies

Project Policies merupakan seperangkat aturan yang mengatur bagaimana AI Teacher Studio dikembangkan, dipelihara, dan dikembangkan di masa depan.

Seluruh kontributor wajib memahami dan mengikuti kebijakan ini sebelum melakukan perubahan pada source code maupun dokumentasi.

---

# Documentation Policy

Dokumentasi merupakan bagian yang tidak terpisahkan dari source code.

Setiap perubahan implementasi yang memengaruhi perilaku sistem harus disertai pembaruan dokumentasi yang relevan.

Dokumentasi dianggap sebagai artefak resmi proyek dan memiliki prioritas yang sama dengan source code.

---

## Documentation Rules

Seluruh dokumentasi harus memenuhi ketentuan berikut.

- Menggunakan Markdown.
- Mengikuti struktur folder `docs/`.
- Menggunakan istilah yang konsisten.
- Tidak menduplikasi informasi yang sudah menjadi Source of Truth.
- Selalu diperbarui setelah perubahan besar.

---

## Source of Documentation

| Dokumen | Fungsi |
|----------|--------|
| 00_PROJECT_CONTEXT | Konteks proyek |
| 01_ARCHITECTURE | Arsitektur |
| 02_DATABASE | Database |
| 03_FOLDER_STRUCTURE | Struktur folder |
| 04_CODING_STANDARD | Standar kode |
| 05_UI_GUIDELINE | Panduan UI |
| 06_DEVELOPMENT_WORKFLOW | Workflow |
| 07_ROADMAP | Roadmap |
| 08_PROJECT_STATUS | Status proyek |
| 09_CHANGELOG | Riwayat perubahan |
| 10_DECISION_LOG | Keputusan proyek |

---

# Code Ownership Policy

Seluruh source code harus memiliki tanggung jawab yang jelas.

Framework bertanggung jawab terhadap framework.

Modul bertanggung jawab terhadap modul.

Database bertanggung jawab terhadap database.

Tidak diperbolehkan membuat implementasi yang mengambil tanggung jawab modul lain.

---

## Ownership Rules

Sebagai contoh:

Core

↓

Framework

Modules

↓

Business Features

Database

↓

Data Storage

UI

↓

Presentation

Views

↓

Application Pages

Setiap folder hanya memiliki satu tanggung jawab utama.

---

# Dependency Policy

Seluruh dependency harus mengikuti arsitektur ATS.

Dependency hanya diperbolehkan mengalir dari layer atas ke layer bawah.

Contoh:

UI

↓

Controller

↓

Service

↓

Repository

↓

Database

Dependency sebaliknya tidak diperbolehkan.

---

# Database Policy

Database merupakan aset utama ATS.

Seluruh struktur database harus didefinisikan pada:

DatabaseSchema.gs

Tidak diperbolehkan:

- membuat sheet secara manual;
- membuat kolom di luar schema;
- membaca Spreadsheet langsung dari UI;
- membaca Spreadsheet langsung dari Controller.

Semua akses data harus melalui Database Layer.

---

# Module Policy

Seluruh modul harus mengikuti struktur standar ATS.

Setiap modul minimal memiliki:

- Controller
- Service
- Repository
- HTML
- Documentation

Apabila diperlukan, modul dapat memiliki:

- Events
- Validator
- Helper
- Constants
- Tests

---

# UI Policy

UI ATS mengikuti prinsip berikut.

## Separation

Business Logic tidak boleh berada di HTML.

HTML hanya menangani:

- layout;
- event;
- rendering sederhana.

Seluruh proses bisnis dilakukan di Service.

---

## Reusable Components

Komponen yang dapat digunakan kembali harus ditempatkan pada folder UI.

Komponen tersebut tidak boleh bergantung pada modul tertentu.

---

# Coding Policy

Seluruh source code mengikuti Coding Standard ATS.

Beberapa prinsip utama:

- Readable
- Consistent
- Modular
- Testable
- Maintainable
- Reusable

Detail lengkap dijelaskan pada:

04_CODING_STANDARD.md

---

# Testing Policy

Setiap fitur baru harus diuji sebelum dianggap selesai.

Jenis pengujian meliputi:

- Unit Test
- Integration Test
- Manual Test

Bug yang ditemukan selama sprint harus dicatat dan diperbaiki sebelum release.

---

# Backward Compatibility Policy

Perubahan terhadap framework tidak boleh merusak modul yang sudah ada.

Apabila terjadi perubahan yang tidak kompatibel, maka harus:

- didokumentasikan;
- dicatat pada Changelog;
- memiliki strategi migrasi.

---

# Deprecation Policy

Fitur yang tidak lagi digunakan tidak boleh langsung dihapus.

Tahapan penghentian fitur:

Deprecated

↓

Migration

↓

Replacement

↓

Removal

Dengan cara ini pengguna maupun pengembang memiliki waktu untuk melakukan penyesuaian.

---

# Security Policy

Keamanan merupakan bagian dari kualitas perangkat lunak.

Prinsip keamanan ATS meliputi:

- validasi input;
- pembatasan hak akses;
- sanitasi data;
- logging aktivitas penting;
- tidak menyimpan informasi sensitif di source code.

Seluruh pengembangan harus mempertimbangkan keamanan sejak awal.

---

# Performance Policy

Implementasi harus mempertimbangkan performa.

Prinsip utama:

- mengurangi akses Spreadsheet;
- menghindari query berulang;
- menggunakan cache bila diperlukan;
- mengurangi render UI yang tidak perlu.

---

# Error Handling Policy

Seluruh proses penting harus memiliki mekanisme penanganan kesalahan.

Minimal meliputi:

- logging;
- pesan kesalahan yang jelas;
- pemulihan proses bila memungkinkan.

Error tidak boleh diabaikan tanpa pencatatan.

---

# Versioning Policy

ATS menggunakan Semantic Versioning.

Format:

MAJOR.MINOR.PATCH

Contoh:

1.0.0

Perubahan versi dilakukan sesuai tingkat perubahan:

MAJOR

Perubahan besar yang tidak kompatibel.

MINOR

Penambahan fitur baru yang kompatibel.

PATCH

Perbaikan bug tanpa mengubah perilaku utama.

---

# Definition of Done

Sebuah pekerjaan dinyatakan selesai apabila memenuhi seluruh kriteria berikut.

## Documentation

✓ Dokumentasi diperbarui.

---

## Architecture

✓ Mengikuti arsitektur ATS.

---

## Database

✓ Mengikuti DatabaseSchema.

---

## UI

✓ Mengikuti UI Guideline.

---

## Coding Standard

✓ Mengikuti Coding Standard.

---

## Testing

✓ Telah diuji.

---

## Review

✓ Telah direview.

---

## Changelog

✓ Dicatat pada Changelog.

---

## Project Status

✓ Status proyek diperbarui bila diperlukan.

---

# Definition of Ready

Sebelum sebuah pekerjaan dimulai, minimal harus tersedia:

- tujuan pekerjaan;
- ruang lingkup;
- desain solusi;
- dampak terhadap modul lain;
- estimasi implementasi.

Pekerjaan yang belum memenuhi kriteria tersebut sebaiknya tidak langsung diimplementasikan.

---

# Long-Term Commitment

AI Teacher Studio dikembangkan sebagai proyek jangka panjang.

Keputusan teknis selalu mempertimbangkan:

- keberlanjutan;
- kemudahan pemeliharaan;
- kemudahan pengembangan;
- kemudahan migrasi;
- kualitas dokumentasi.

Keberhasilan ATS tidak hanya diukur dari jumlah fitur, tetapi juga dari kualitas arsitektur, konsistensi dokumentasi, dan kemudahan pengembangannya di masa depan.


# Project Lifecycle

AI Teacher Studio dikembangkan menggunakan siklus pengembangan yang berkelanjutan (Continuous Development Lifecycle).

Setiap perubahan pada sistem mengikuti tahapan yang terstruktur agar kualitas, konsistensi, dan dokumentasi tetap terjaga.

```text
Idea
   │
   ▼
Analysis
   │
   ▼
Documentation
   │
   ▼
Architecture Design
   │
   ▼
Implementation
   │
   ▼
Testing
   │
   ▼
Review
   │
   ▼
Deployment
   │
   ▼
Monitoring
   │
   ▼
Maintenance
```

Setiap tahapan memiliki keluaran (deliverables) yang terdokumentasi dan dapat ditelusuri.

---

# Development Philosophy

Pengembangan ATS mengikuti prinsip bahwa kualitas perangkat lunak tidak hanya ditentukan oleh banyaknya fitur, tetapi oleh kualitas desain, dokumentasi, dan kemudahan pemeliharaan.

Pengembangan dilakukan secara iteratif melalui sprint yang menghasilkan peningkatan kecil namun berkelanjutan.

Setiap sprint diharapkan menghasilkan salah satu atau lebih dari berikut:

- fitur baru;
- peningkatan performa;
- penyempurnaan arsitektur;
- penyempurnaan dokumentasi;
- pengurangan technical debt;
- peningkatan pengalaman pengguna.

---

# Project Maturity Model

ATS dirancang untuk berkembang secara bertahap.

## Phase 1 – Foundation

Fokus:

- Framework
- Database Layer
- Core Module
- Dokumentasi

Target:

Membangun fondasi yang stabil.

---

## Phase 2 – Learning Management

Fokus:

- ATP
- Prota
- Promes
- Modul Ajar
- Master Data

Target:

Administrasi pembelajaran yang terintegrasi.

---

## Phase 3 – Assessment

Fokus:

- KKTP
- Asesmen
- Nilai
- Analitik

Target:

Evaluasi pembelajaran yang terdigitalisasi.

---

## Phase 4 – AI Integration

Fokus:

- AI Assistant
- Prompt Library
- AI Recommendation
- Document Generator

Target:

Meningkatkan produktivitas guru melalui AI.

---

## Phase 5 – Integrated Education Platform

Fokus:

- Multi Sekolah
- Cloud Integration
- REST API
- Mobile Support
- Dashboard Manajemen

Target:

Platform pendidikan digital yang komprehensif.

---

# AI Strategy

Artificial Intelligence merupakan bagian penting dari ATS, tetapi bukan pengganti peran guru.

AI berfungsi sebagai:

- asisten penulisan;
- pembuat draft dokumen;
- pemberi rekomendasi;
- alat analisis data;
- pendukung pengambilan keputusan.

Keputusan akademik tetap berada pada pengguna.

Seluruh penggunaan AI harus:

- transparan;
- dapat ditinjau;
- dapat diedit;
- dapat dipertanggungjawabkan.

---

# Sustainability Strategy

ATS dikembangkan agar tetap relevan dalam jangka panjang.

Strategi keberlanjutan meliputi:

- dokumentasi yang lengkap;
- arsitektur modular;
- standar kode yang konsisten;
- minim duplikasi;
- migrasi platform yang memungkinkan;
- refactoring berkala.

Dengan strategi ini, ATS dapat terus berkembang tanpa harus dibangun ulang dari awal.

---

# Guiding Principles

Seluruh keputusan teknis di masa depan harus mengacu pada prinsip berikut.

## Build for Teachers

Teknologi harus mempermudah pekerjaan guru.

---

## Documentation Before Implementation

Dokumentasi mendahului implementasi.

---

## Architecture Before Features

Arsitektur lebih penting daripada kecepatan menambah fitur.

---

## Simplicity Over Complexity

Pilih solusi yang paling sederhana apabila memberikan hasil yang sama.

---

## Reuse Before Rewrite

Gunakan kembali komponen yang sudah ada sebelum membuat yang baru.

---

## Consistency Before Optimization

Konsistensi lebih penting daripada optimasi yang belum diperlukan.

---

## Data Integrity Above Convenience

Kemudahan implementasi tidak boleh mengorbankan konsistensi data.

---

## Continuous Improvement

Selalu ada ruang untuk penyempurnaan.

---

# Project Success Metrics

Keberhasilan ATS diukur menggunakan indikator berikut.

## Technical Metrics

- Struktur proyek tetap konsisten.
- Tidak terjadi peningkatan technical debt yang signifikan.
- Modul baru dapat ditambahkan tanpa mengubah framework.
- Bug kritis dapat diminimalkan.

---

## Documentation Metrics

- Seluruh modul memiliki dokumentasi.
- Seluruh perubahan terdokumentasi.
- Tidak ada dokumentasi yang usang.

---

## User Metrics

- Guru dapat menyelesaikan administrasi lebih cepat.
- Pengguna mudah memahami antarmuka.
- Pengguna memperoleh manfaat nyata dari AI.

---

## Quality Metrics

- Kode mudah dipelihara.
- Arsitektur tetap stabil.
- Database tetap konsisten.
- Pengujian berjalan dengan baik.

---

# Future Vision

Dalam jangka panjang, AI Teacher Studio diharapkan berkembang menjadi platform yang mampu:

- mengelola seluruh administrasi pembelajaran;
- membantu guru melalui AI;
- menghasilkan dokumen berkualitas tinggi;
- mendukung kolaborasi antar guru;
- menyediakan analitik pembelajaran;
- mendukung integrasi lintas platform;
- menjadi fondasi transformasi digital sekolah.

---

# References

Dokumen ini didukung oleh dokumen-dokumen berikut.

| Dokumen | Deskripsi |
|----------|-----------|
| 01_ARCHITECTURE.md | Arsitektur sistem |
| 02_DATABASE.md | Struktur database |
| 03_FOLDER_STRUCTURE.md | Organisasi source code |
| 04_CODING_STANDARD.md | Standar penulisan kode |
| 05_UI_GUIDELINE.md | Standar antarmuka |
| 06_DEVELOPMENT_WORKFLOW.md | Proses pengembangan |
| 07_ROADMAP.md | Rencana pengembangan |
| 08_PROJECT_STATUS.md | Status implementasi |
| 09_CHANGELOG.md | Riwayat perubahan |
| 10_DECISION_LOG.md | Catatan keputusan arsitektur |
| 11_DEPLOYMENT.md | Panduan deployment |
| 12_TESTING_GUIDE.md | Panduan pengujian |

---

# Document Maintenance

Dokumen ini merupakan **Source of Truth** untuk konteks proyek.

Perubahan terhadap dokumen ini hanya dilakukan apabila terjadi perubahan yang memengaruhi:

- visi proyek;
- misi proyek;
- filosofi pengembangan;
- prinsip arsitektur;
- ruang lingkup sistem;
- arah jangka panjang.

Perubahan teknis sehari-hari tidak boleh dilakukan langsung pada dokumen ini, tetapi pada dokumen teknis yang sesuai.

---

# Closing Statement

AI Teacher Studio bukan hanya sebuah aplikasi.

ATS adalah fondasi ekosistem digital yang dirancang untuk membantu guru bekerja lebih efektif, lebih terstruktur, dan lebih berfokus pada proses pembelajaran.

Keberhasilan ATS tidak diukur dari banyaknya fitur yang dimiliki, tetapi dari kemampuannya memberikan manfaat nyata bagi guru, menjaga kualitas arsitektur, dan tetap mudah dikembangkan dalam jangka panjang.

Dokumen ini menjadi landasan utama seluruh keputusan teknis, dokumentasi, dan pengembangan AI Teacher Studio.

---

*End of Document**