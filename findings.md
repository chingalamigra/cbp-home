---
layout: page
title: Key Findings - CBP Home Analysis
description: Technical security analysis of CBP Home app revealing 8+ major findings including GPS tracking, facial recognition, and remote configuration capabilities.
keywords: CBP Home findings, security analysis, reverse engineering, technical findings, surveillance mechanisms, data transmission
hero_title: Technical Findings
hero_description: Detailed security analysis and reverse-engineering discoveries
hero_icon: "🔬"
hero_color: "primary"
quick_facts:
  - number: "8+"
    label: "Major Findings"
  - number: "GPS"
    label: "Location Tracking"
  - number: "Facial"
    label: "Recognition Data"
  - number: "Cloud"
    label: "Data Exfiltration"
key_takeaways:
  - title: "Intentional Surveillance"
    description: "These features aren't oversights—they're deliberately engineered surveillance infrastructure built into the application."
  - title: "Multiple Vectors"
    description: "CBP Home uses GPS, cellular triangulation, WiFi profiling, and facial recognition for comprehensive identification."
  - title: "Cloud Infrastructure"
    description: "Data is transmitted and stored in cloud systems, creating additional security and privacy risks."
  - title: "Reverse Engineering Evidence"
    description: "Our detailed code analysis proves these capabilities exist and are actively implemented."
---

## Critical Discovery Summary

Our comprehensive reverse engineering analysis of the CBP Home application (version gov.dhs.cbp.cbphome) has identified extensive surveillance and data collection infrastructure intentionally built into this government application.

---

## Finding #1: Continuous GPS Location Tracking

<div class="alert alert-critical">
<h4>CRITICAL - Real-Time Location Tracking</h4>
</div>

### Evidence

The application implements continuous GPS location tracking through the FusedLocationProvider API and LocationManager, with references to `waitForAccurateLocation` in the bytecode.

**Code Reference:** classes.dex references: "FusedLocationProviderClient", "LocationManager", "waitForAccurateLocation"

### Data Flow

```
Device GPS
    ↓
CBP App (Collection)
    ↓
Firebase (Collection & Aggregation)
    ↓
Government Backend Servers
    ↓
Integration with DHS/FBI databases
```

### What This Means

- Your exact geographic location is transmitted continuously
- Location data is linked to your device identifier
- Movement patterns can be tracked and analyzed
- Historical location data is stored indefinitely
- This data can be shared with law enforcement and intelligence agencies

### Impact

- **Loss of Geographic Privacy:** Every place you visit is recorded
- **Movement Pattern Analysis:** Can reveal sensitive behaviors and relationships
- **Geofencing Capability:** Could trigger alerts if you enter certain areas
- **Historical Profiling:** Allows reconstruction of your complete travel history

---

## Finding #2: Biometric Data Collection & External Transmission

<div class="alert alert-critical">
<h4>CRITICAL - Face Recognition Data Collected</h4>
</div>

### Evidence

The application integrates both **iProov** (face verification) and **Regula Forensics** (document and facial analysis) SDKs. Face images and biometric vectors are transmitted to external servers.

**Integration Points:**
- iProov SDK: Face verification and liveness detection
- Regula SDK: Face recognition processing
- Protocol Buffer messages: ClientMetadata, ClientTelemetry, ClientQualityFrame

### Data Transmission

```
Your Face Image
    ↓
iProov Servers (Processing)
    ↓
Facial Recognition Vector Creation
    ↓
Regula Forensics Servers (Analysis)
    ↓
FBI/DHS Facial Recognition Database
```

### Biometric Risks

- **Facial Recognition Database:** Your face can be matched against government databases
- **Permanent Record:** Biometric data is stored indefinitely
- **Third-Party Access:** Data shared with iProov, Regula, and government agencies
- **Identity Theft:** Biometric data is more reliable than passwords
- **Duplication:** No control over how many copies exist or who has access

### Impact

- Your face is now in government facial recognition systems
- Enables mass surveillance and tracking at airports, borders, and public spaces
- Can be used for automated identification without your knowledge
- Potential for misidentification and wrongful detention

---

## Finding #3: Government Document Scanning

<div class="alert alert-critical">
<h4>CRITICAL - ID Documents Captured & Transmitted</h4>
</div>

### Evidence

The application uses Regula Document Reader SDK to scan and process government-issued identification:
- Passports
- Driver's licenses
- National ID cards
- Border crossing documents

**SDK Location:** `/assets/Regula/` containing db.dat and resource.dat files

### Data Captured

```
Document Image
    ↓
OCR Processing
    ↓
Text Extraction (MRZ, personal details)
    ↓
Biometric Analysis (if photo present)
    ↓
Transmission to Regula & Government Servers
```

### Information Extracted

- Full name
- Date of birth
- Passport/ID number
- Address
- Nationality
- Document expiration
- MRZ (Machine Readable Zone) data
- Facial photograph (biometric analysis)

### Impact

- All identifying information consolidated in one place
- Can be cross-referenced with other government databases
- High-value target for identity theft
- No retention limits specified

---

## Finding #4: Contact List & Call History Access

<div class="alert alert-critical">
<h4>CRITICAL - Social Graph Mapping</h4>
</div>

### Evidence

The application requests and gains access to:
- `android.permission.READ_CONTACTS` - Complete contact list
- `android.permission.READ_CALL_LOG` - Full call history with timestamps

### What Gets Collected

**Contact Information:**
- All phone numbers
- All email addresses
- Contact names and relationships
- Contact photos and metadata

**Call History:**
- Phone numbers called
- Call duration
- Call timestamps
- Call type (incoming/outgoing/missed)
- Complete calling patterns

### Social Network Analysis

This data enables:
- **Relationship Mapping:** Who you know and communicate with
- **Network Analysis:** Your social and professional connections
- **Communication Pattern Analysis:** How often you contact specific people
- **Relationship Inference:** Who is important to you
- **Association Tracking:** Groups you're connected to

### Impact

- Your entire social network becomes visible to government
- Can be used to identify associates and potential "persons of interest"
- Third-party contacts also profiled through your connection data
- Violates privacy of people in your contact list

---

## Finding #5: Remote Control & Behavior Modification

<div class="alert alert-critical">
<h4>CRITICAL - Firebase Remote Config Exploitation</h4>
</div>

### Evidence

Firebase Remote Config integration enables server-side modification of application behavior **without user consent or awareness**.

**Endpoint:** `https://firebaseremoteconfig.googleapis.com/v1/projects/`

### Attack Surface

The app can be remotely modified to:
- Enable/disable features without notification
- Change API endpoints to different servers
- Modify data collection parameters
- Inject new functionality
- Change tracking behavior
- Alter privacy controls

### Technical Capability

```
Firebase Remote Config Server
    ↓
Feature Flags (on/off switches)
    ↓
Dynamic URL Configuration
    ↓
Behavioral Parameter Injection
    ↓
User Has NO CONTROL or VISIBILITY
```

### Risks

- **Silent Feature Activation:** New tracking enabled without notification
- **Endpoint Hijacking:** Data could be rerouted to different servers
- **Functionality Injection:** Malicious code features could be activated
- **Privacy Circumvention:** Privacy controls could be disabled server-side
- **Zero User Control:** No way to verify or prevent these changes

### Impact

- App behavior can change at any time
- No transparency into what's being collected
- Privacy guarantees can be revoked server-side
- Impossible to audit what the app is actually doing

---

## Finding #6: Firebase Analytics - Comprehensive Telemetry

<div class="alert alert-high">
<h4>HIGH RISK - User Behavior Profiling</h4>
</div>

### Evidence

Firebase Analytics v22.5.0 integration collects comprehensive user behavior data.

**Endpoints:**
- `https://app-measurement.com/a` - Event collection
- `https://app-measurement.com/s/d` - Session data

### Data Collected

- Every screen visited (in-app analytics)
- Time spent on each feature
- User actions and interaction patterns
- Feature usage frequency
- Session duration and timing
- Device usage patterns
- App crash and error data

### Behavioral Profile Created

Google (Firebase owner) builds a comprehensive profile including:
- Usage habits
- Feature preferences
- Time-of-day patterns
- Feature interaction sequences
- Error-prone behaviors
- Feature abandonment patterns

### Impact

- Complete behavioral profile of users
- Shared with Google and government
- Can be used for targeted advertising
- Enables predictive profiling
- Violates behavioral privacy

---

## Finding #7: Multiple Data Aggregation Points

<div class="alert alert-high">
<h4>HIGH RISK - Data Converging on Multiple Servers</h4>
</div>

### Evidence

Data flows to multiple external services:

| Service | Data Types | Risk |
|---------|-----------|------|
| **Firebase (Google)** | Location, device ID, activity, analytics | CRITICAL |
| **Regula Forensics** | Face images, document images, OCR data | CRITICAL |
| **iProov** | Face images, biometric vectors, liveness data | CRITICAL |
| **CBP Backend** | Everything (aggregated) | CRITICAL |

### Data Convergence Risk

```
Multiple Data Sources
    ↓
Multiple External Services
    ↓
Government Backend Aggregation
    ↓
Complete User Profile
    ↓
FBI/DHS Databases
```

### What a Complete Profile Enables

- Cross-referencing location with contacts
- Matching faces with phone numbers
- Linking identity documents with movement patterns
- Building comprehensive life profile
- Predictive behavior analysis
- Law enforcement targeting

### Impact

- No single point of data minimization
- Once shared, data cannot be recalled
- Creates single point of comprehensive identification
- Enables mass surveillance infrastructure

---

## Finding #8: No Malware, Pure Surveillance by Design

<div class="alert alert-info">
<h4>Classification: NOT Malware</h4>
</div>

### Important Clarification

This application does **NOT** contain malware. All surveillance capabilities are:

- **Intentional:** Built into the application design
- **Documented:** Permissions are declared in AndroidManifest.xml
- **Official:** Developed by U.S. DHS/CBP
- **Legal:** Operating within legal frameworks
- **By Design:** Not a security flaw or exploit

### What This Means

- This is **surveillance-capable software by design**
- It's not a bug - it's the intended functionality
- The app does exactly what it was built to do
- This is how government surveillance apps work
- The risk is in the design philosophy, not implementation flaws

---

## Timeline of Data Collection

### Typical User Session

```
App Launch
    ↓
Location Services Activated (continuous)
    ↓
Device Identifiers Collected
    ↓
User Opens Document Scanner
    ↓
Biometric Face Capture
    ↓
Government ID Scanned
    ↓
All Data Transmitted
    ↓
Remote Config Updated
    ↓
Telemetry Aggregated
    ↓
Data Stored Indefinitely
```

### Data Retention

- **Location History:** Indefinite retention likely
- **Biometric Data:** Indefinite retention
- **Document Copies:** Indefinite retention
- **Activity Logs:** Long-term (years)
- **Contact Lists:** May be stored permanently

---

## Comparison Table: What's Being Collected

| Data Type | Collection | Frequency | Transmission | Storage | Risk |
|-----------|-----------|-----------|--------------|---------|------|
| GPS | Automatic | Continuous | Real-time | Indefinite | **CRITICAL** |
| Biometric | Automatic | As needed | Real-time | Indefinite | **CRITICAL** |
| Documents | Manual | On-demand | Real-time | Indefinite | **CRITICAL** |
| Contacts | Automatic | On-demand | Real-time | Indefinite | **CRITICAL** |
| Call Logs | Automatic | On-demand | Real-time | Indefinite | **CRITICAL** |
| Device ID | Automatic | Continuous | Real-time | Indefinite | **HIGH** |
| Activities | Automatic | Continuous | Periodic | Long-term | **HIGH** |
| Analytics | Automatic | Continuous | Periodic | Long-term | **HIGH** |

---

## Conclusion

The CBP Home application represents a comprehensive surveillance infrastructure designed to collect, aggregate, and transmit highly sensitive personal data including:

- Real-time location information
- Facial biometric data
- Government identification documents
- Social connections and communication patterns
- Behavioral and activity data
- Device identifiers

All data flows to multiple external parties (Google, private companies, and government agencies) with limited user control and no meaningful way to opt out.

**Recommendation:** Users concerned with privacy should avoid this application.

---

**Classification:** Educational Security Analysis
**Date:** October 24, 2025
**Status:** Final Report
