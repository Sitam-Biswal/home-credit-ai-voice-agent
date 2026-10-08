"""
Home Credit LAP Qualification Simulator
Purpose: local sanity-check for the first-missing-question/state logic.
This is not a voice engine. It is a deterministic test helper.
"""

CHECKLIST = [
    "property_type",
    "ownership_status",
    "documents_available",
    "loan_amount",
    "occupation_income_mode",
    "market_value",
    "tenure",
]

STATE = {k: None for k in CHECKLIST}
STATE.update({
    "existing_property_loan": False,
    "emi_reduction_request": False,
    "disqualified": False,
})

def first_missing(state):
    for item in CHECKLIST:
        if state.get(item) is None:
            return item
    return None

def evaluate(state):
    if state["property_type"] == "Agricultural":
        return "FAIL: agricultural property"
    if state["documents_available"] is False:
        return "FAIL: original documents unavailable"
    if state.get("income_mode") == "Cash":
        return "FAIL: cash income"
    if state["tenure"] is not None and not (3 <= state["tenure"] <= 15):
        return "FAIL: tenure outside 3-15 years"
    return "PASS_OR_INCOMPLETE"

def process_response(state, facts):
    # Merge all facts first.
    state.update(facts)

    # Transfer branch has priority after fact extraction.
    if state["existing_property_loan"] or state["emi_reduction_request"]:
        state["transfer_required"] = True
        return "TRANSFER → specialist"

    # Validate disqualifiers.
    result = evaluate(state)
    if result.startswith("FAIL"):
        state["disqualified"] = True
        return result + " → END"

    missing = first_missing(state)
    if missing:
        return f"NEXT → {missing}"

    return "PASS → senior loan expert handoff"

if __name__ == "__main__":
    state = STATE.copy()
    print(process_response(state, {
        "property_type": "Residential",
        "ownership_status": "Joint",
        "market_value": "₹80 lakh",
    }))
    print(state)
