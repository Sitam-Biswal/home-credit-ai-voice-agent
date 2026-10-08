# Conversation State Machine

START
  |
  v
GREETING
  |
  v
VERIFY CUSTOMER
  |-- cannot verify --> END
  |
  v
AVAILABLE TO TALK?
  |-- NO --> CALLBACK TIME --> END
  |
  v
EXPLAIN LAP OFFER
  |
  v
EXISTING LOAN / EMI REDUCTION?
  |-- YES --> SPECIALIST MESSAGE --> END
  |
  v
QUALIFICATION LOOP
  |
  +--> Extract all facts from customer response
  |
  +--> Disqualifying fact?
  |      |-- YES --> POLITE DISQUALIFICATION --> END
  |
  +--> Transfer condition?
  |      |-- YES --> SPECIALIST MESSAGE --> END
  |
  +--> Update state
  |
  +--> Find first unanswered checklist item
         |
         +--> Item exists --> Ask only that item --> QUALIFICATION LOOP
         |
         +--> No item --> FINAL ELIGIBILITY CHECK
                           |
                           +--> FAIL --> EXPLAIN --> END
                           |
                           +--> PASS --> SENIOR LOAN EXPERT HANDOFF --> END
