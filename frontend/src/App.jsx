import { useState } from "react";

const eligibilityRules = [
  "Applicant must satisfy all required eligibility criteria.",
  "Loan amount must be within the applicable ₹75 lakh limit.",
  "Agricultural property is not accepted under this flow.",
  "Cash-only income is not accepted; verifiable income is required.",
  "Loan tenure must be between 3 and 15 years.",
  "Existing-loan transfer cases should follow the balance-transfer flow.",
  "The agent should handle customer availability and callback requests."
];

const testScenarios = [
  "Eligible customer completes the conversation successfully.",
  "Customer is below the required age.",
  "Requested loan amount exceeds the permitted limit.",
  "Customer owns agricultural property.",
  "Customer reports only cash income.",
  "Requested tenure is below 3 years.",
  "Requested tenure is above 15 years.",
  "Customer wants an existing loan transferred.",
  "Customer is busy and requests a callback.",
  "Customer provides information out of order."
];

function App() {
  const [active, setActive] = useState("dashboard");

  const navigation = [
    ["dashboard", "Dashboard"],
    ["eligibility", "Eligibility"],
    ["rules", "Business Rules"],
    ["flow", "Conversation Flow"],
    ["testing", "Test Scenarios"]
  ];

  return (
    <div className="app">
      <header className="topbar">
        <div>
          <div className="brand">Home Credit</div>
          <div className="subtitle">AI Voice Agent Assignment</div>
        </div>

        <div className="status">
          <span></span> Assignment Demo
        </div>
      </header>

      <div className="layout">
        <aside className="sidebar">
          <p className="menu-title">Navigation</p>

          {navigation.map(([id, label]) => (
            <button
              key={id}
              className={active === id ? "nav active" : "nav"}
              onClick={() => setActive(id)}
            >
              {label}
            </button>
          ))}
        </aside>

        <main className="content">
          {active === "dashboard" && <Dashboard />}
          {active === "eligibility" && <Eligibility />}
          {active === "rules" && <Rules />}
          {active === "flow" && <Flow />}
          {active === "testing" && <Testing />}
        </main>
      </div>

      <footer>
        Home Credit AI Voice Agent • Assignment Demonstration
      </footer>
    </div>
  );
}

function Dashboard() {
  return (
    <>
      <section className="hero">
        <div>
          <p className="eyebrow">AI VOICE AGENT</p>
          <h1>Home Credit Loan Qualification Assistant</h1>
          <p>
            A structured AI voice-agent workflow designed to collect customer
            information, validate eligibility and guide the conversation
            according to business rules.
          </p>
        </div>
      </section>

      <div className="cards">
        <InfoCard title="7" text="Eligibility criteria" />
        <InfoCard title="10+" text="Test scenarios" />
        <InfoCard title="3–15 yrs" text="Supported tenure range" />
        <InfoCard title="₹75 Lakh" text="Maximum applicable loan limit" />
      </div>

      <section className="panel">
        <h2>Project Objective</h2>
        <p>
          Build a reliable AI voice-agent experience that can qualify
          prospective customers, ask for missing information, apply business
          rules consistently and handle common conversation situations.
        </p>
      </section>

      <section className="panel">
        <h2>Key Capabilities</h2>

        <div className="feature-grid">
          <Feature title="Customer Qualification" />
          <Feature title="Eligibility Validation" />
          <Feature title="Business Rule Handling" />
          <Feature title="Existing Loan Transfer" />
          <Feature title="Callback Handling" />
          <Feature title="Out-of-Order Information" />
        </div>
      </section>
    </>
  );
}

function Eligibility() {
  return (
    <>
      <PageTitle
        title="Eligibility Criteria"
        description="Core checks used by the AI voice agent during qualification."
      />

      <div className="rule-list">
        {eligibilityRules.map((rule, index) => (
          <div className="rule" key={rule}>
            <div className="number">{index + 1}</div>
            <p>{rule}</p>
          </div>
        ))}
      </div>
    </>
  );
}

function Rules() {
  return (
    <>
      <PageTitle
        title="Business Rules"
        description="Important decisions the agent must apply consistently."
      />

      <div className="table-wrap">
        <table>
          <thead>
            <tr>
              <th>Condition</th>
              <th>Agent Action</th>
            </tr>
          </thead>

          <tbody>
            <tr>
              <td>Loan amount ≤ ₹75 lakh</td>
              <td>Continue qualification</td>
            </tr>
            <tr>
              <td>Loan amount &gt; ₹75 lakh</td>
              <td>Do not qualify under this flow</td>
            </tr>
            <tr>
              <td>Agricultural property</td>
              <td>Reject / explain applicable restriction</td>
            </tr>
            <tr>
              <td>Cash-only income</td>
              <td>Do not qualify</td>
            </tr>
            <tr>
              <td>Tenure between 3–15 years</td>
              <td>Continue qualification</td>
            </tr>
            <tr>
              <td>Existing loan transfer</td>
              <td>Move to balance-transfer flow</td>
            </tr>
            <tr>
              <td>Customer is busy</td>
              <td>Offer callback / suitable time</td>
            </tr>
          </tbody>
        </table>
      </div>
    </>
  );
}

function Flow() {
  const steps = [
    ["01", "Greeting", "Introduce the agent and purpose of the call."],
    ["02", "Consent & Availability", "Confirm that the customer can continue."],
    ["03", "Customer Information", "Collect the required qualification details."],
    ["04", "Eligibility Check", "Validate information against business rules."],
    ["05", "Loan Requirement", "Understand amount and tenure requirements."],
    ["06", "Decision", "Explain the next step clearly."],
    ["07", "Closing", "Confirm follow-up or callback requirements."]
  ];

  return (
    <>
      <PageTitle
        title="Conversation Flow"
        description="High-level state machine for the voice-agent conversation."
      />

      <div className="flow">
        {steps.map(([number, title, description]) => (
          <div className="flow-item" key={number}>
            <div className="flow-number">{number}</div>
            <div>
              <h3>{title}</h3>
              <p>{description}</p>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}

function Testing() {
  return (
    <>
      <PageTitle
        title="Test Scenarios"
        description="Scenarios used to validate the agent's conversation and rule handling."
      />

      <div className="test-grid">
        {testScenarios.map((scenario, index) => (
          <div className="test-card" key={scenario}>
            <span>Test {String(index + 1).padStart(2, "0")}</span>
            <p>{scenario}</p>
          </div>
        ))}
      </div>
    </>
  );
}

function InfoCard({ title, text }) {
  return (
    <div className="info-card">
      <strong>{title}</strong>
      <span>{text}</span>
    </div>
  );
}

function Feature({ title }) {
  return (
    <div className="feature">
      <span>✓</span>
      {title}
    </div>
  );
}

function PageTitle({ title, description }) {
  return (
    <div className="page-title">
      <p className="eyebrow">HOME CREDIT AI VOICE AGENT</p>
      <h1>{title}</h1>
      <p>{description}</p>
    </div>
  );
}

export default App;