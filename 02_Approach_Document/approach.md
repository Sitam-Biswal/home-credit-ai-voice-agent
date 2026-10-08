# Home Credit LAP AI Voice Agent — Approach Document

## 1. Objective
Build a conversational AI voice agent that performs preliminary qualification for an existing customer's pre-approved Loan Against Property offer.

## 2. Design Approach
The solution is organized into five layers:
1. Conversation layer — greeting, verification, offer, questions and handoff.
2. Business logic — exact eligibility rules.
3. State/memory — stores all customer facts.
4. Branch handling — busy, transfer, disqualification and diversions.
5. Testing — happy path, failure paths and adversarial cases.

## 3. Key Design Principle
**Extract first → validate second → update state third → ask the next missing question fourth.**

This prevents repeated questions and enables out-of-order information capture.

## 4. Eligibility
- Residential, Commercial, Industrial: allowed.
- Agricultural: disqualify.
- Sole and Joint ownership: allowed.
- Original documents must be available.
- Maximum amount: ₹75 lakh.
- Salaried or Self-employed.
- Income must be through bank; cash income is not eligible.
- Market value is captured; no minimum threshold is invented.
- Tenure: 3–15 years inclusive.

## 5. Special Branches
### Busy customer
Ask callback time and end.

### Existing loan / EMI reduction
Do not start fresh-loan eligibility. Route to loan-transfer specialist and end.

### Loan request above ₹75 lakh
Offer the maximum ₹75 lakh instead of immediately rejecting.

## 6. State
The agent maintains customer verification, the seven checklist facts, transfer signals and disqualification status internally.

## 7. Prompt Engineering
The system prompt explicitly defines:
- role and limits,
- dynamic variables,
- language and gender,
- state management,
- business rules,
- first-missing-question logic,
- contradiction handling,
- interruptions,
- RAG use,
- terminal conditions,
- handoff gate.

## 8. Testing
The included matrix contains 16 scenarios covering:
- eligible customer,
- each major disqualifier,
- ₹75 lakh boundary,
- joint ownership,
- existing loan,
- EMI reduction,
- out-of-order answers,
- busy customer,
- contradictions,
- multiple answers,
- interruption,
- ambiguity.

## 9. Voice Platform
The assignment permits Retell AI, Bolna or a similar platform. The package intentionally does not fabricate call recordings. After deploying the prompt, record the listed scenarios and place the exported audio/transcripts into `06_Recordings/`.

## 10. Submission
Submit:
- System Prompt
- Test Audios
- Audio Transcripts
- Overall approach document
- Public recording/call-log link if required by the assignment platform
