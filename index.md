---
layout: default
title: CBP Home App - Critical Privacy & Surveillance Warning
description: Critical security warning about CBP Home app's extensive surveillance capabilities including location tracking, biometric data collection, and behavior monitoring.
keywords: CBP Home, privacy, surveillance, government apps, biometric data, location tracking
og_image: /cbp-warning-site/assets/images/cbp-og-image.svg
---

# CBP Home - Critical Privacy Warning

## ⚠️ The CBP Home App Collects Extensive Personal Data

The **CBP Home** mobile application (gov.dhs.cbp.cbphome) implements comprehensive data collection and surveillance infrastructure. Our complete decompilation and analysis reveals what the app does behind the scenes.

**Analysis Date:** October 24, 2025 | **Risk Level:** CRITICAL

---

## 📥 Download the Complete Technical Analysis

The PDF report contains complete source code evidence, detailed findings, and technical specifications backed by direct bytecode analysis.

<div class="my-8 p-6 bg-gradient-to-r from-red-950 to-red-900 border-2 border-red-600 rounded-lg">
<a href="/cbp-warning-site/assets/pdf/CBP-Home-Security-Report.pdf" class="btn btn-download" download style="display: inline-block; padding: 12px 24px; background: #dc2626; color: white; border-radius: 6px; font-weight: bold; text-decoration: none;">
  📥 Download PDF Report (30 pages)
</a>
<p style="margin-top: 12px; color: #cbd5e1; font-size: 14px;">Complete decompilation analysis with source code evidence and all technical findings</p>
</div>

---

## What Gets Collected

<div class="grid grid-cols-1 md:grid-cols-2 gap-4 my-8">
  <div class="bg-red-950 border-l-4 border-red-600 p-4 rounded">
    <h4 class="text-red-300 font-bold mb-2">Biometric Data</h4>
    <p class="text-slate-300 text-sm">Facial images sent to Regula Forensics and iProov servers</p>
  </div>
  <div class="bg-red-950 border-l-4 border-red-600 p-4 rounded">
    <h4 class="text-red-300 font-bold mb-2">Government ID Documents</h4>
    <p class="text-slate-300 text-sm">Photos and extracted data from passport/driver's license</p>
  </div>
  <div class="bg-red-950 border-l-4 border-red-600 p-4 rounded">
    <h4 class="text-red-300 font-bold mb-2">Precise Location</h4>
    <p class="text-slate-300 text-sm">GPS coordinates with millisecond timestamps (meter-level accuracy)</p>
  </div>
  <div class="bg-red-950 border-l-4 border-red-600 p-4 rounded">
    <h4 class="text-red-300 font-bold mb-2">Contact & Call Logs</h4>
    <p class="text-slate-300 text-sm">Complete access to all contacts and call history</p>
  </div>
  <div class="bg-red-950 border-l-4 border-red-600 p-4 rounded">
    <h4 class="text-red-300 font-bold mb-2">Analytics & Usage</h4>
    <p class="text-slate-300 text-sm">Every screen view and interaction logged continuously</p>
  </div>
  <div class="bg-red-950 border-l-4 border-red-600 p-4 rounded">
    <h4 class="text-red-300 font-bold mb-2">Device Telemetry</h4>
    <p class="text-slate-300 text-sm">Device ID, hardware info, and behavioral patterns</p>
  </div>
</div>

---

## Where Data Goes

| Recipient | Data Sent | Purpose |
|-----------|-----------|---------|
| **Google/Firebase** | Analytics, location, events | Tracking and telemetry |
| **Regula Forensics** | Facial images, ID documents | Document processing |
| **iProov** | Face images | Biometric verification |
| **CBP Servers** | All collected data | Government systems |
| **Government Databases** | Biometrics, location | FBI NGI, DHS IDENT |

---

## Key Finding: Remote Control

The app includes **Firebase Remote Configuration** that allows Google (and CBP) to:
- Change app behavior remotely
- Modify verification requirements
- Alter data collection parameters
- Deploy changes without app updates
- **No user notification of changes**

---

## Encryption Status

**In Transit:** ✅ HTTPS/TLS encryption
**At Rest:** ❓ Unknown (likely unencrypted)
**End-to-End:** ❌ Not implemented

**What This Means:**
- Your data is encrypted while traveling to servers
- But servers store it in decrypted form
- Third parties (Regula, iProov, Google) receive unencrypted data
- No certificate pinning found (weak SSL verification)
- Permanent exposure to third parties

---

## Critical Features

<div class="space-y-3 my-8">
  <div class="flex gap-3 items-start">
    <span class="text-2xl">🚫</span>
    <div>
      <strong class="text-slate-100">No User Controls:</strong>
      <p class="text-slate-400 text-sm">No way to disable analytics, location tracking, or biometric collection while using the app</p>
    </div>
  </div>
  <div class="flex gap-3 items-start">
    <span class="text-2xl">👁️</span>
    <div>
      <strong class="text-slate-100">Background Persistence:</strong>
      <p class="text-slate-400 text-sm">Runs background jobs continuously via Firebase Cloud Messaging</p>
    </div>
  </div>
  <div class="flex gap-3 items-start">
    <span class="text-2xl">🌍</span>
    <div>
      <strong class="text-slate-100">Social Network Mapping:</strong>
      <p class="text-slate-400 text-sm">READ_CONTACTS and READ_CALL_LOG permissions enable contact graph analysis</p>
    </div>
  </div>
  <div class="flex gap-3 items-start">
    <span class="text-2xl">♾️</span>
    <div>
      <strong class="text-slate-100">Indefinite Retention:</strong>
      <p class="text-slate-400 text-sm">No data deletion mechanism found in code; suggests permanent storage</p>
    </div>
  </div>
</div>

---

## Is It Malware?

**No.** All functionality appears intentional and properly integrated with official SDKs (Firebase, Regula, iProov).

**However:** It represents comprehensive government surveillance infrastructure with no user transparency or control. Legitimate purpose ≠ Appropriate data collection scope.

---

## Recommendation

**Do not install this application.** If border services are required, seek alternatives that don't demand this level of access to your personal data.

If already installed, consider uninstalling or using a separate device with minimal personal information.

---

## Detailed Information

For comprehensive technical analysis with decompiled source code and detailed findings:

- **[Complete PDF Report](/cbp-warning-site/assets/pdf/CBP-Home-Security-Report.pdf)** - 30-page technical deep dive
- **[Analysis Methodology](/cbp-warning-site/methodology.html)** - How this analysis was conducted
- **[Key Findings](/cbp-warning-site/findings.html)** - Detailed findings summary
- **[Risk Assessment](/cbp-warning-site/risks.html)** - Complete risk analysis
- **[Permissions](/cbp-warning-site/permissions.html)** - Android permissions explained
- **[Recommendations](/cbp-warning-site/recommendations.html)** - What you can do

---

**Analysis Date:** October 24, 2025 | **Confidence Level:** Very High (direct source code evidence) | **Classification:** Educational Analysis
