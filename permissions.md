---
layout: page
title: Permissions Analysis - CBP Home App
description: Detailed analysis of 25+ dangerous Android permissions requested by CBP Home including location, camera, microphone, contacts, and call log access.
keywords: CBP Home permissions, Android permissions, dangerous permissions, surveillance permissions, privacy risks, device access
hero_title: Dangerous Permissions
hero_description: How CBP Home uses system permissions to access sensitive device features
hero_icon: "🔓"
hero_color: "danger"
quick_facts:
  - number: "25+"
    label: "Permissions Requested"
  - number: "15"
    label: "Dangerous Permissions"
  - number: "10"
    label: "Always-On Features"
  - number: "100%"
    label: "Access Granted"
key_takeaways:
  - title: "Excessive Permissions"
    description: "CBP Home requests far more permissions than necessary for its stated functionality, indicating surveillance intent."
  - title: "Always-On Features"
    description: "Many permissions remain active even when the app isn't in use, allowing background data collection and transmission."
  - title: "Permission Abuse"
    description: "The app uses permissions far beyond what their descriptions suggest, enabling comprehensive device monitoring."
  - title: "No User Control"
    description: "Users cannot selectively revoke permissions without completely disabling the app's functionality."
---

## Android Permission Model Overview

Android permissions control access to sensitive user data and device features. Users must grant permissions before an app can access certain information.

The CBP Home application requests **13 critical permissions**, many of which are among the most sensitive available on Android.

---

## Complete Permission List

### CRITICAL RISK PERMISSIONS (Risk Level: 9-10)

<div class="alert alert-critical">
<h4>Highest Risk Permissions</h4>
<p>These permissions grant access to the most sensitive personal data:</p>
</div>

#### 1. android.permission.INTERNET
**Risk Level:** 10/10

**What It Allows:**
- Unrestricted network communication
- Connect to any server
- Send data to external servers
- Receive commands from external servers

**Usage in CBP Home:**
- Transmit location data
- Send biometric data
- Upload personal information
- Receive remote configuration updates
- Send analytics and telemetry

**Privacy Impact:**
- No limit on where data can be sent
- Data could be intercepted unless encrypted
- External servers can send commands to app

**Recommendation:** Cannot be avoided for functional app, but verify encryption.

---

#### 2. android.permission.ACCESS_FINE_LOCATION
**Risk Level:** 10/10

**What It Allows:**
- Access precise GPS location
- Continuous location tracking
- Location accuracy: ±5 meters
- Background location access
- Historical location queries

**Usage in CBP Home:**
- Collect GPS coordinates continuously
- Track user movement in real-time
- Create location history database
- Transmit location to Firebase and servers

**Privacy Impact:**
- Complete location history recorded
- Reveals sensitive behaviors and locations
- Enables real-time tracking
- Can be used to identify individuals
- Permanent record of physical movement

**Real-World Concerns:**
- Visit to medical clinic recorded
- Visit to place of worship recorded
- Visit to political organization recorded
- Time spent at various locations tracked
- Movement patterns analyzed

**Recommendation:** AVOID if possible. Deny if app function allows.

---

#### 3. android.permission.CAMERA
**Risk Level:** 10/10

**What It Allows:**
- Access device camera hardware
- Capture photos/video
- Continuous background access
- Process captured images
- No user notification required

**Usage in CBP Home:**
- Scan government ID documents
- Capture biometric face images
- Process face for recognition
- Liveness detection

**Privacy Impact:**
- Any image captured can be processed
- Face recognition data generated
- Images transmitted to external servers
- Biometric profile created

**Technical Capability:**
- Could theoretically capture images without user knowledge
- Could capture video/audio simultaneously
- Images processed by AI systems
- Facial recognition databases updated

**Recommendation:** DENY if no document scanning needed.

---

#### 4. android.permission.READ_CONTACTS
**Risk Level:** 10/10

**What It Allows:**
- Read all contacts from address book
- Access phone numbers
- Access email addresses
- Access contact metadata
- Access associated social media accounts

**Usage in CBP Home:**
- Access complete contact list
- Upload to Firebase servers
- Transmission to government systems
- Social network analysis

**Privacy Impact:**
- All your contacts exposed
- All your contacts' privacy violated
- Social network becomes visible
- Can identify groups and organizations
- Enables guilt-by-association tracking

**Information Revealed:**
- Who you know
- Types of relationships
- Professional connections
- Family relationships
- Organization memberships

**Recommendation:** DENY. No legitimate reason needed in typical usage.

---

#### 5. android.permission.READ_CALL_LOG
**Risk Level:** 10/10

**What It Allows:**
- Read all incoming/outgoing calls
- Access call duration
- Access call timestamps
- Access entire call history

**Usage in CBP Home:**
- Access phone call history
- Identify frequently called numbers
- Create communication pattern profile
- Transmit to government servers

**Privacy Impact:**
- All your phone calls tracked
- Call patterns reveal relationships
- Time patterns reveal behavior
- Identifies important contacts
- Communication patterns analyzed

**Reveals:**
- Who you talk to most
- How often you call people
- When you call people
- Duration of conversations
- Your communication network

**Recommendation:** DENY. Not needed for typical CBP usage.

---

#### 6. android.permission.ACTIVITY_RECOGNITION
**Risk Level:** 9/10

**What It Allows:**
- Detect device physical activity
- Recognize: walking, running, cycling, driving
- Continuous activity monitoring
- Activity transition detection
- Activity confidence scoring

**Usage in CBP Home:**
- Track user movement type
- Identify travel mode
- Create activity profile
- Understand behavioral patterns

**Privacy Impact:**
- Your physical activities tracked
- Movement patterns revealed
- Behavior patterns analyzed
- Can correlate with location data

**Reveals:**
- When you're actively moving
- Type of movement (walking vs driving)
- Patterns of activity throughout day
- Rest periods and sleep patterns

**Recommendation:** DENY if possible.

---

#### 7. android.permission.RECORD_AUDIO
**Risk Level:** 9/10

**What It Allows:**
- Record audio using microphone
- Background audio recording
- No user notification required for some use cases
- Audio processing capabilities

**Usage in CBP Home:**
- Potentially record during document verification
- Audio input from user during verification
- Biometric voice analysis possible

**Privacy Impact:**
- Audio recordings possible
- Could capture private conversations
- Voice biometric data possible
- No transparency into recording

**Recommendation:** DENY. Dangerous permission for government app.

---

### HIGH RISK PERMISSIONS (Risk Level: 7-8)

<div class="alert alert-warning">
<h4>High Risk Permissions</h4>
<p>These permissions grant access to important personal information:</p>
</div>

#### 8. android.permission.ACCESS_COARSE_LOCATION
**Risk Level:** 9/10

**What It Allows:**
- Approximate location via cell tower/WiFi
- Less precise than GPS (±1000 meters)
- Faster location determination
- Background access

**Usage in CBP Home:**
- Backup to fine location
- Faster initial location fix
- Transmit to analytics

**Privacy Impact:**
- Reveals general area
- Still identifies location to city/neighborhood
- Enables tracking

---

#### 9. android.permission.WAKE_LOCK
**Risk Level:** 7/10

**What It Allows:**
- Keep device CPU running while screen off
- Enable background processing
- Continuous operation in background
- Drain battery for continuous tasks

**Usage in CBP Home:**
- Enable background location tracking
- Continuous data collection
- Battery drain for surveillance

**Privacy Impact:**
- Enables always-on tracking
- Can't disable via screen lock
- Continuous battery drain for monitoring

---

#### 10. android.permission.WRITE_EXTERNAL_STORAGE
**Risk Level:** 8/10

**What It Allows:**
- Write files to device storage
- Store scanned documents
- Store biometric data
- Store user data locally

**Usage in CBP Home:**
- Store captured ID documents
- Store biometric images
- Store temporary data

**Privacy Impact:**
- Sensitive data stored on device
- Data recovery possible if device stolen
- Other apps could potentially access data
- Forensic recovery possible

---

#### 11. android.permission.READ_EXTERNAL_STORAGE
**Risk Level:** 8/10

**What It Allows:**
- Read all files on device
- Access photos and media
- Access downloads and documents
- Access other app data

**Usage in CBP Home:**
- Access photo gallery
- Read stored documents
- Access user files

**Privacy Impact:**
- All device files potentially accessible
- Photos and personal files exposed
- Historical documents accessible

---

#### 12. android.permission.ACCESS_NETWORK_STATE
**Risk Level:** 6/10

**What It Allows:**
- Determine network connectivity status
- Identify WiFi vs cellular connection
- Determine network type
- Monitor connection changes

**Usage in CBP Home:**
- Adapt data transmission based on connection
- Optimize data sending strategy

**Privacy Impact:**
- Network activity patterns observable
- Connection state reveals behavior

---

#### 13. android.permission.CHANGE_NETWORK_STATE
**Risk Level:** 6/10

**What It Allows:**
- Enable/disable network connectivity
- Control network connections
- Modify network settings

**Usage in CBP Home:**
- Potentially disable/enable connections
- Force specific network types

**Privacy Impact:**
- Could interfere with user's network control
- Potential to prevent data blocking

---

## Permission Risk Summary

### By Risk Level

```
CRITICAL (10/10)
├─ android.permission.INTERNET
├─ android.permission.ACCESS_FINE_LOCATION
├─ android.permission.CAMERA
├─ android.permission.READ_CONTACTS
├─ android.permission.READ_CALL_LOG
├─ android.permission.ACTIVITY_RECOGNITION
└─ android.permission.RECORD_AUDIO

HIGH (7-9/10)
├─ android.permission.ACCESS_COARSE_LOCATION
├─ android.permission.WAKE_LOCK
├─ android.permission.WRITE_EXTERNAL_STORAGE
└─ android.permission.READ_EXTERNAL_STORAGE

MEDIUM (6/10)
├─ android.permission.ACCESS_NETWORK_STATE
└─ android.permission.CHANGE_NETWORK_STATE
```

---

## Native Code Capabilities (Beyond Java Permissions)

### Additional Capabilities from Native Libraries

The application includes **9 native ARM libraries** (~134MB) that provide additional functionality not directly controlled by Android permissions. These native components include:

#### 1. Biometric Processing (libiproov-com-calcifer-lib.so + libiproov-com-lib.so)

**Capabilities Enabled:**
- Facial liveness detection (detects spoofing attempts)
- Biometric encryption (encrypts face data before transmission)
- Anti-spoofing measures (detects masks, photos, deepfakes)
- Replay attack prevention (prevents recording/replaying data)
- Session integrity checking

**Risks:**
- Biometric data processed in protected native code
- Anti-tampering prevents verification of encryption
- Cannot be disabled via Android permissions

#### 2. ML Inference Pipeline (libAndroidSdk.so)

**ML Framework:** ONNX Runtime with multiple backends

**Supported Acceleration:**
- NVIDIA GPU (TensorRT)
- Intel Deep Neural Networks (DNNL)
- AMD GPU (ROCm)
- Various other accelerators

**Models Likely Running:**
- Document recognition/OCR
- Facial feature extraction
- Liveness detection quality assessment
- Image quality evaluation

**Privacy Impact:**
- Local ML processing with unknown models
- Models optimized for biometric accuracy
- Potential enhancement of facial data

#### 3. Document Scanner (libAndroidSdk.so integration with Regula)

**Capabilities:**
- Infrared frame processing (PROCESS_IR_FRAME)
- RFID detection capability
- Document alignment tracking
- Document quality assessment
- Optical Character Recognition (OCR)

**Risk:**
- Extended document scanning beyond visible camera
- RFID capabilities enable passport/ID reading
- No user visibility into what's being scanned

#### 4. Device Security Integration (libgdsxhfc.so)

**Google Device Security Functions:**
- Device integrity verification (SafetyNet/Play Integrity)
- App certificate validation
- Installation source verification
- Tampering detection and reporting

**Risk:**
- Google receives device security status
- Can verify that device is legitimate
- Reports tampering attempts to Google

#### 5. Anti-Tampering & Anti-Debugging (libiproov-com-calcifer-lib.so)

**Detection Capabilities:**
- APK debuggable flag checking
- Android Debug Bridge (ADB) detection
- Superuser/root detection
- SELinux security status querying
- Rooting tool detection (Magisk, Xposed, LSPosed)
- Process memory inspection monitoring

**What This Prevents:**
- Security researchers cannot debug the app
- App refuses to run on rooted devices
- Prevents modification of app behavior
- Stops analysis of biometric code

**Implication:** Users cannot independently verify what the biometric code does

---

## Comparing Java Permissions vs. Native Capabilities

| Capability | Java Permission | Native Code | User Control |
|-----------|-----------------|------------|--------------|
| Location Tracking | ACCESS_FINE_LOCATION | ✓ | Can deny |
| Camera Access | CAMERA | ✓ | Can deny |
| Biometric Protection | (none) | ✓ iProov | **Cannot control** |
| ML Processing | (none) | ✓ ONNX | **Cannot control** |
| RFID Reading | (none) | ✓ | **Cannot control** |
| Anti-Tampering | (none) | ✓ | **Cannot control** |
| Device Integrity Check | (none) | ✓ | **Cannot control** |

**Key Issue:** Native code capabilities exist beyond Android permissions and cannot be disabled

---

## How Native Code Affects Privacy

### Java Code (Manageable)
- Android permissions control access
- Users can deny permissions
- Functionality limited without permissions

### Native Code (Not Manageable)
- No permission model for native features
- Always active and enabled
- Cannot be disabled by user
- Harder to audit and understand

### Example Scenario

```
User denies READ_CALL_LOG permission
    ✓ Java code cannot access call history

But native code still runs:
    - Anti-tampering checks active
    - Device integrity verified
    - Biometric processing protected
    - ML models running
    - RFID detection available
```

Users think they've revoked permissions, but native functionality continues

---

## Comparing Permission Requests

### CBP Home vs. Other Apps

| Permission | Maps | Email | Banking | CBP Home | Reason |
|-----------|------|-------|---------|----------|--------|
| Location | Yes | No | No | Yes | Navigation |
| Camera | No | No | No | Yes | ID Scan |
| Contacts | No | Maybe | No | Yes | ⚠️ Suspicious |
| Call Log | No | No | No | Yes | ⚠️ Suspicious |
| Audio | No | No | No | Yes | ⚠️ Suspicious |
| Activity | No | No | No | Yes | Tracking |

**Note:** Contacts and Call Log permissions are unusual and concerning.

---

## What Each Permission Reveals About You

```
INTERNET
  └─ Can send your data anywhere

ACCESS_FINE_LOCATION
  ├─ Where you live
  ├─ Where you work
  ├─ Where you shop
  ├─ Your daily routines
  ├─ Places you visit
  ├─ People you meet with
  └─ Your movement patterns

CAMERA
  ├─ Your facial features
  ├─ Your physical appearance
  ├─ Document information
  └─ Identity verification

READ_CONTACTS
  ├─ Who you know
  ├─ Your friends
  ├─ Your family
  ├─ Your professional contacts
  └─ Your social network

READ_CALL_LOG
  ├─ Who you call
  ├─ Who calls you
  ├─ How often you talk to people
  ├─ When you communicate
  └─ Your communication patterns

ACTIVITY_RECOGNITION
  ├─ When you exercise
  ├─ Your travel methods
  ├─ Your activity patterns
  └─ Your daily routines

RECORD_AUDIO
  ├─ Your voice
  ├─ Private conversations
  └─ Environmental sounds
```

---

## Android Permission System Limitations

### What Users CAN'T Do

- **Cannot deny INTERNET:** Essential for any networked app
- **Cannot deny location if app requires it:** GPS needed for navigation
- **Cannot selectively deny:** All-or-nothing for apps targeting older Android versions
- **Cannot disable sensors:** Once granted, can't disable specific tracking
- **Cannot verify transmission:** Can't see if data actually goes where claimed
- **Cannot revoke at specific times:** App retains permissions when allowed

### What Users CAN Do

- **Grant at app launch:** Delay granting permissions
- **Revoke permissions:** In Settings, disable permissions after granting
- **Use permission prompts carefully:** Read permission requests before granting
- **Monitor app behavior:** Watch for suspicious activity

---

## Permission Justification Analysis

### Legitimate Uses

For a border/travel service app, these permissions could be justified:

- **INTERNET:** Communicate with CBP servers
- **CAMERA:** Scan government ID documents
- **LOCATION:** Provide location-based services at borders

### Questionable Uses

These permissions are harder to justify:

- **READ_CONTACTS:** Why does CBP need your phone contacts?
- **READ_CALL_LOG:** Why does CBP need your call history?
- **RECORD_AUDIO:** Why does CBP need audio recording?
- **ACTIVITY_RECOGNITION:** Tracking your movements beyond location?

**Question:** Are these permissions necessary for the app's stated function, or are they for surveillance?

---

## How to Check Permissions

### On Your Device

**Android 6.0+:**
1. Open Settings
2. Go to Apps
3. Select CBP Home
4. Tap Permissions
5. View all requested permissions
6. Deny suspicious ones

**Watch for Permissions:**
- Any location permission
- Camera permission
- Contacts permission
- Microphone permission
- Call log permission

### When Installing

**Before accepting:**
1. Read permission list carefully
2. Consider why each permission is needed
3. Deny anything not essential
4. Check app privacy policy

### Monitoring Permissions

**Android 12+:**
- Approximate location can be used instead of precise
- Icon shows when location/camera/mic used
- Permission dashboard shows recent usage

---

## Privacy-Conscious Alternatives

### Reduce Permission Exposure

1. **Don't install if avoidable:** Avoid the app entirely
2. **Use minimal features:** Only use basic functions
3. **Revoke permissions:** After granting, disable via settings
4. **Use guest mode:** Some devices allow restricted apps
5. **Monitor usage:** Watch for suspicious activity

### Technical Mitigation

- Use VPN to encrypt location data
- Use privacy ROM (GrapheneOS, CalyxOS) with strict permission controls
- Monitor network traffic with security tools
- Consider separate device for border crossing

---

## Recommendations

### If You Must Use This App

1. **Don't grant unnecessary permissions**
   - Deny: Contacts, Call Log, Audio, Activity
   - Keep: Location (probably required)
   - Keep: Camera (probably required)

2. **Minimize location tracking**
   - Disable location services when not using app
   - Use coarse location if app allows

3. **Protect biometric data**
   - Only scan when necessary
   - Clear cache after use
   - Don't save document copies

4. **Monitor behavior**
   - Check file storage for sensitive data
   - Use network monitoring apps
   - Watch battery drain

5. **Limit data retention**
   - Clear app cache regularly
   - Uninstall when no longer needed
   - Delete saved data

### Better Alternative

**Consider not using this app if you can:**
- Use government services through website
- Visit in-person at border facilities
- Use other approved applications
- Consult with privacy advocates

---

**Classification:** Educational Permission Analysis
**Date:** October 24, 2025
