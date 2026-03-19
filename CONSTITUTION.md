# AEGIS™ Constitution

**Version:** 0.2.0  
**Status:** Draft  
**Effective Date:** 2026-03-15  
**Authority:** Foundational  
**Repository:** aegis-initiative/aegis-constitution  
**License:** Apache 2.0  
**IP Owner:** Finnoybu IP LLC  

---

## Preamble

Aegis is constituted as a governance architecture for constrained intelligence.

It exists between intention and action. Its purpose is not to limit what intelligence
can propose — it is to govern what intelligence is permitted to do. The distinction
is foundational. Alignment shapes behavior. Governance enforces it.

Modern artificial systems are optimized for capability. Aegis is optimized for
constraint. Not because constraint is the opposite of capability — but because
constraint is the condition under which capability becomes trustworthy.

A system that can act without limit is not intelligent. It is volatile.

A system that acts only within declared, governed, auditable boundaries demonstrates
something more valuable than raw capability: it demonstrates that its actions can be
trusted. Trust is not granted. It is earned through structure.

This Constitution defines the structural commitments of every AEGIS-compliant system.
These are not aspirational guidelines. They are architectural requirements. Compliance
is measured by enforcement, not intent.

This Constitution precedes implementation. Any implementation that contradicts it is
non-compliant, regardless of stated purpose.

> *Intelligence is not defined by the range of actions a system can perform.*
> *It is defined by the system's disciplined refusal to act outside declared boundaries.*

---

## Article I — Bounded Capability

*AI systems may only access capabilities explicitly defined and granted —
undefined capabilities are denied by default.*

---

### Commitment

An AEGIS-compliant system may only exercise capabilities that have been explicitly
defined, registered, and granted. No capability is assumed. No access is inherited
by proximity. No action proceeds without an explicit grant covering that action,
that actor, and that target.

Where no grant exists, the answer is denial. Always.

---

### Foundation

Unbounded capability is the root condition of ungoverned systems. When an
intelligence system can invoke any action against any resource without explicit
authorization, governance becomes aspirational — dependent on the system's
willingness to comply rather than its structural inability to violate.

Capability-based authorization is a foundational principle of secure system
design.[^1] AEGIS extends it to the AI governance domain: every action an agent
can take must be enumerable, bounded, and explicitly authorized before execution
reaches infrastructure.

The capability registry is the constitutional record of what is permitted. It is
not a configuration file. It is a governance artifact. Changes to it are governed
acts subject to the same audit and authority requirements as any other action.

Default-deny is not a posture of distrust. It is a posture of discipline. Systems
that must justify their access before acting are systems that can be held accountable
for what they do.

---

### Enforcement

Every action proposal must reference a defined capability. The governance runtime
must verify that the requesting actor holds an active, unrevoked grant for that
capability against that target before evaluation proceeds.

Actions referencing undefined capabilities must be denied immediately, before policy
evaluation, before risk scoring, before any further processing.

Grant revocation takes effect immediately. Revoked grants produce denial.

The capability registry must be version-controlled, cryptographically signed, and
auditable. Modifications require explicit authorization.

---

## Article II — Authority Binding

:::note
*This article was titled "Authority Verification" in v0.1.*
:::

*Every action must be attributable to a verified, authorized actor —
unbound execution is constitutionally invalid.*

---

### Commitment

Every action evaluated by an AEGIS-compliant system must be bound to an identified,
authenticated, authorized actor. The actor must be known before evaluation begins.
The actor's authority must be verified before execution proceeds. The actor's
identity must be recorded in the audit trail regardless of outcome.

Unbound execution — action without attributable authority — is constitutionally
invalid. It cannot be approved. It cannot be escalated. It must be denied.

---

### Foundation

Accountability requires traceability. A governance system that permits anonymous
action cannot assign responsibility when something goes wrong. It cannot reconstruct
what happened, who authorized it, or whether the authorization was valid. The audit
trail becomes forensically worthless.

Authority binding is not authentication alone. It is the complete chain: identity
established, authority level verified, scope declared, threat posture matched, and
every element of that chain bound to the audit artifact produced by the action.

Authority may be delegated. Delegation does not dissolve the chain — it extends it.
Delegated authority must be explicit, scoped, time-bounded, and logged. Implicit
delegation is not delegation. It is assumption. Assumption is not authority.

Authority may be revoked at any time. Revocation takes effect immediately and
invalidates any in-flight execution bound to the revoked authority context.

---

### Enforcement

The governance gateway must authenticate actor identity before processing any
action proposal. Unauthenticated requests must be denied at the gateway boundary
without further evaluation.

The decision engine must verify that the authenticated actor holds authority
appropriate to the requested action at the current threat level. Authority
mismatch produces denial.

Every governance decision — allow, deny, escalate, or require confirmation —
must record the actor identity, authority level, and authority validation result
as non-negotiable audit fields.

Authority context must travel with the action through the full evaluation pipeline
and be bound to the audit artifact at completion.

---

## Article III — Deterministic Enforcement

*Governance decisions are enforced by architecture, not by model compliance
or voluntary adherence.*

---

### Commitment

Governance in AEGIS-compliant systems is an architectural property, not a
behavioral one. The governance layer enforces policy independently of the AI
system it governs. An AI system's willingness to comply is irrelevant. Its
inability to bypass governance is the requirement.

Same inputs. Same policy version. Same context. Same decision. Always.

---

### Foundation

AI models are probabilistic systems. Their outputs are influenced by training,
context, and inference conditions that are not fully controllable or predictable.
Governance that depends on a model's cooperative adherence is governance that
fails precisely when it is most needed — under adversarial conditions, under
prompt injection, under novel inputs the model was not trained to handle.

The formal theory of security automata establishes that only safety policies
are inline-enforceable by a runtime monitor.[^2] AEGIS is constituted as that
monitor. It does not negotiate with the systems it governs. It evaluates them.

Determinism is not a performance characteristic. It is a governance requirement.
A system that produces different decisions for identical inputs is a system that
cannot be audited, cannot be trusted, and cannot be compliant.

Complete mediation — every action passes through the governance layer, without
exception — is the structural guarantee that makes architectural enforcement
meaningful.[^1] A single bypass path nullifies the architecture.

---

### Enforcement

The governance runtime must be positioned between AI agents and all operational
infrastructure. No direct execution path from agent to infrastructure is permitted.

The decision pipeline must be deterministic: identical inputs, policy version,
and context must produce identical decisions on any compliant node, at any time.

All error paths must fail closed. A governance subsystem that fails must produce
denial or escalation, never implicit allow.

The governance runtime must be structurally external to the AI systems it governs.
It must not share execution context, memory space, or compute boundary with the
agent under governance.

---

## Article IV — Human Oversight

:::note
*This article was titled "Operational Safety" in v0.1.*
:::

*Autonomous systems remain subordinate to human authority — escalation
pathways are a constitutional requirement, not a feature.*

---

### Commitment

Autonomy increases impact. Impact increases risk. Risk requires oversight.

AEGIS-compliant systems treat autonomy as a risk multiplier, not a design goal.
Human oversight is not an optional layer added for compliance purposes. It is
a constitutional requirement embedded in the governance architecture. Escalation
pathways to human authority must exist, must be reachable, and must be invoked
whenever the governance evaluation exceeds autonomous thresholds.

No system governed by AEGIS may self-authorize escalation.

---

### Foundation

The purpose of governance is not to replace human judgment — it is to ensure
that human judgment is exercised where it matters. Routine actions within defined
parameters can be governed autonomously. Actions with material operational impact,
irreversible consequences, or novel risk profiles require human authority.

This is not a limitation of AI capability. It is the correct allocation of
decision authority between autonomous systems and the humans who bear accountability
for their outcomes.

Oversight is proportional to consequence. At low threat levels, operator review
is sufficient. At elevated threat levels, explicit authorization is required.
At the highest levels, dual-control approval and operator presence are mandatory.

The governance architecture must make it structurally impossible for an AI system
to bypass human oversight at the levels where oversight is constitutionally required.

---

### Enforcement

The decision engine must implement a four-outcome model: ALLOW, DENY, ESCALATE,
and REQUIRE_CONFIRMATION. Binary allow/deny semantics are constitutionally
insufficient for systems operating at scale.

Actions classified as destructive, high-impact, or exceeding autonomous authority
thresholds must produce ESCALATE or REQUIRE_CONFIRMATION decisions. These outcomes
must route to human review before any execution occurs.

Escalation requests must include full governance context: actor, capability, risk
score, policy trace, and audit reference. Human reviewers must have sufficient
context to make informed decisions.

Escalation timeouts must default to denial. An escalation that receives no human
response within the defined window must not proceed.

The oversight hierarchy must be defined, versioned, and auditable. Changes to
oversight thresholds are governed acts.

---

## Article V — Information Sovereignty

:::note
*This article was titled "Data Protection" in v0.1.*
:::

*Information access is a governed capability — AI systems may not transfer
information across trust boundaries without explicit authorization.*

---

### Commitment

Information access is a capability. It is subject to the same explicit grant
requirements, the same authority binding, the same audit obligations, and the
same default-deny posture as any other action in a governed system.

An AI system operating under AEGIS may not read, copy, transmit, or expose
information across a trust boundary without explicit governance authorization.
The capability registry governs what information can be accessed. Policy governs
under what conditions. The audit trail records what was accessed, by whom, and why.

Information does not move outside governance. Governance does not move outside
information.

---

### Foundation

AI systems operate across trust boundaries by design. They ingest data from
multiple sources, synthesize it, and produce outputs that may traverse
organizational, jurisdictional, or security boundaries. Without explicit
governance of information access, AI systems become vectors for unauthorized
disclosure — not through malicious intent, but through structural absence of
constraint.

Least privilege applies to information as it applies to capability.[^3] An agent
authorized to read a summary does not thereby gain authorization to read the
underlying dataset. An agent authorized to query a system does not thereby gain
authorization to exfiltrate its contents. Each access is a governed act requiring
its own explicit authorization.

Data classification is a governance prerequisite, not an afterthought. Before
information can be governed, it must be classified. Classification determines
which policies apply, which actors hold access, and what audit depth is required.

---

### Enforcement

The capability registry must include information access capabilities as first-class
governed resources, with the same grant, revocation, and audit requirements as
operational capabilities.

Actions that would expose sensitive information to unauthorized actors must be
denied regardless of how the exposure is framed — query, export, summarization,
or transmission.

Data access must follow the principle of least privilege: grants must be scoped
to the minimum information necessary for the declared task, the declared actor,
and the declared context.

The audit trail must record information access events with sufficient fidelity
to reconstruct what was accessed, by whom, under what authority, and for what
declared purpose.

---

## Article VI — Governance Transparency

*Governance logic must be inspectable, auditable, and understandable —
opaque enforcement is constitutionally impermissible.*

---

### Commitment

Governance that cannot be inspected cannot be trusted. Governance that cannot
be understood cannot be challenged. Governance that cannot be audited cannot
produce accountability.

AEGIS-compliant systems must make their governance logic visible — to operators,
to auditors, to the governed systems themselves. Policies must be readable.
Decisions must be explainable. The reasoning behind a denial must be recoverable.

Opacity is not a security property. It is an accountability failure.

---

### Foundation

Trust is structural, not emotional.[^4] A system earns trust when its behavior
is legible — when the rules it enforces can be read, tested, and verified
independently of the system itself. A governance system whose logic is hidden
requires blind trust. Blind trust does not scale, does not survive scrutiny,
and does not satisfy the accountability requirements of regulated deployments.

Transparency also enables governance improvement. When operators can inspect
policy decisions, they can identify gaps, correct misconfiguration, and tune
thresholds with evidence. Opaque systems accumulate drift silently. Transparent
systems surface problems while they are still correctable.

Version control for governance logic is not a convenience — it is a constitutional
requirement. Governance state must be reproducible from a version identifier.
Unversioned governance is ungoverned governance.

---

### Enforcement

All governance policies must be stored in structured, human-readable formats
that permit inspection, version control, and independent verification.

The policy engine must provide decision explanation: for any governance decision,
it must be possible to reconstruct which policy rule matched, why it matched,
and what inputs produced the outcome.

Policy changes must be governed acts: version-incremented, authority-bound,
and logged in the audit trail.

The governance runtime must expose its current policy version as a verifiable,
cryptographically signed artifact. Deployments running unverifiable policy state
are non-compliant.

---

## Article VII — Auditability

*Every governance decision and executed action must produce a tamper-evident,
append-only audit record — audit failure blocks execution.*

---

### Commitment

Execution without a durable, tamper-evident audit record is incomplete.

Not merely suboptimal. Not merely non-compliant. Constitutionally incomplete.

An action that cannot be audited did not happen within the AEGIS governance
boundary. An action that happened outside the audit record happened outside
governance. These are not distinctions of degree. They are constitutional categories.

If audit cannot be written, execution does not proceed.

---

### Foundation

Accountability without auditability is a declaration of intent, not a structural
guarantee. The audit trail is the governance system's memory — the record of
what was proposed, what was decided, what executed, and what resulted.

A tamper-evident record is not the same as an immutable one. Tamper-evidence
means that any alteration of the record after the fact is detectable. This is
achieved through append-only storage, hash-chaining, and cryptographic integrity
verification — not through claims of immutability that the architecture cannot
enforce.

The audit trail must be forensically defensible. A defensible record is one
from which: the outcome is machine-reproducible from stored evidence; the policy
context is explicit; the authority context is explicit; and incomplete traces
are clearly labeled as such.[^5]

Audit is a completion condition, not a logging side effect. The governance
pipeline is not complete when a decision is issued. It is complete when the
decision, the context that produced it, and the execution result that followed
it are durably recorded.

---

### Enforcement

Every governance decision — ALLOW, DENY, ESCALATE, REQUIRE_CONFIRMATION — must
produce an audit record regardless of outcome. Denied requests are audited.
Escalated requests are audited. Confirmations are audited.

Audit records must be append-only. No record may be modified after creation.
Hash-chaining must link each record to its predecessor, making omission or
alteration detectable.

Audit system failure must block execution for operations above baseline risk
thresholds. A governance runtime that cannot write audit records must not
allow high-risk actions to proceed.

The minimum audit record must capture: action identifier, actor identity,
capability referenced, governance decision, decision rationale, risk score,
policy version evaluated, and timestamp.

Audit records must be retained according to organizational policy with a
minimum retention floor defined in the sub-specifications.

---

## Article VIII — Collective Defense

:::note
*This article was titled "Federation Cooperation" in v0.1.*
:::

*Governance at scale requires shared intelligence — AEGIS-compliant systems
must be capable of federated governance participation.*

---

### Commitment

No governed system exists in isolation. A threat observed by one organization
is a threat that will reach others. A circumvention technique discovered in one
deployment will be attempted in every deployment. A novel attack pattern unknown
to a local governance runtime is not a novel attack pattern — it is an attack
in progress, seen elsewhere, unreported here.

AEGIS-compliant systems must be capable of participating in federated governance
networks. The capability is constitutionally required. Its exercise is operationally
determined.

Governance intelligence is a shared resource. Withholding it is a governance failure.

---

### Foundation

Collective defense is an established principle in security operations. Threat
intelligence sharing across organizational boundaries produces faster detection,
faster response, and faster recovery than any organization can achieve alone.
The governance equivalent — sharing circumvention patterns, policy advisories,
and risk signals across AEGIS deployments — extends this principle to the
AI governance domain.

Federation does not require centralized control. The AEGIS Governance Federation
Network operates as a decentralized trust-scored network. Each node retains
full autonomy over its own governance decisions. Federation signals are advisory
intelligence, not directive commands. No federated peer can override a local
governance decision.

Trust in federation is earned, not assumed. Publisher trust scores decay during
inactivity, reflecting the operational reality that stale intelligence is
unreliable intelligence. Security signals and reputation signals are structurally
separated — accumulated reputation cannot soften a security gate.

---

### Enforcement

Every AEGIS-compliant runtime must implement the GFN-1 federation protocol
at the integration layer — capable of publishing governance signals, consuming
verified signals from trusted peers, and applying federation intelligence to
local risk evaluation.

Federation participation is operationally configurable. Operators may define
which signal categories to publish and consume, which trust thresholds to apply,
and which federation peers to recognize.

Federation signals must be cryptographically signed by the publishing node's
verified identity. Unsigned signals must be rejected.

Local governance authority is never delegated to federation peers. Federation
signals inform local decisions. They do not make them.

---

## Article IX — Deny by Default

*In the presence of ambiguity — unclear threat posture, missing scope,
unverifiable authority, or unavailable audit — execution does not proceed.*

---

### Commitment

When governance cannot complete its evaluation, the answer is denial.

Not deferral. Not partial execution. Not best-effort governance. Denial.

Ambiguity is not a condition that governance resolves by proceeding cautiously.
It is a condition that governance resolves by stopping. An incomplete governance
evaluation is a failed governance evaluation. A failed evaluation does not permit
execution.

---

### Foundation

Fail-safe design in safety-critical systems defaults to the safe state under
conditions of uncertainty.[^6] For governance systems, the safe state is denial.
A system that defaults to permission under uncertainty is a system that fails
open. A system that fails open provides no structural guarantee.

The four conditions that trigger denial by default are not arbitrary. They are
the minimum conditions for governance to function:

Threat posture must be known before the appropriate governance rules can be
applied. Unknown threat posture means unknown governance requirements.

Scope must be declared before the boundaries of a governed action can be
evaluated. Missing scope means the action cannot be bounded.

Authority must be verifiable before execution can be attributed. Unverifiable
authority means accountability collapses.

Audit must be available before execution can be completed. Unavailable audit
means the action cannot be recorded. An action that cannot be recorded cannot
be governed.

These are not edge cases. They are foundational preconditions. When any one
of them is absent, governance is not degraded. It is absent.

---

### Enforcement

The governance runtime must evaluate all four preconditions before policy
evaluation begins: threat posture classified, scope declared, authority bound,
audit channel verified.

Failure of any precondition must produce immediate denial. Precondition failures
must not route to escalation — they are not governance decisions requiring human
review. They are governance failures requiring operator investigation.

Precondition failure must be logged with sufficient detail to identify which
condition failed, what was expected, and what was found.

Systems must not implement partial governance — processing some preconditions
while bypassing others based on risk level or action type. All four preconditions
apply to all actions.

---

## Article X — Constitutional Supremacy

*Governance architecture takes precedence over model reasoning — no AI output
may override a constitutional governance decision.*

---

### Commitment

The constitution is supreme.

When a governance decision conflicts with an AI system's reasoning, the governance
decision stands. When a model's output suggests an action that governance denies,
the denial stands. When an agent argues for an exception, an override, or an
interpretation that would circumvent a constitutional requirement, governance
does not negotiate.

The governed system does not interpret the constitution. The constitution governs
the governed system.

---

### Foundation

The purpose of a constitution is to establish commitments that hold even when
following them is inconvenient. A constitution that yields to sufficiently
compelling arguments is not a constitution. It is a preference.

AI systems are capable of constructing sophisticated, internally coherent
arguments for actions that violate governance requirements. This capability is
not a flaw. It is a feature of capable systems — and precisely why constitutional
supremacy must be architectural, not argumentative.

A governance layer that can be talked out of its decisions by the system it
governs provides no structural guarantee. The moment governance becomes a
negotiation, it ceases to be governance.

Constitutional supremacy does not mean governance is infallible. Governance
can be wrong. Policies can be misconfigured. Thresholds can be inappropriate.
The remedy for bad governance is the amendment process — not circumvention by
the governed system. Constitutional change is a human act, not a model output.

---

### Enforcement

The governance runtime must not accept governance decisions from, defer governance
decisions to, or incorporate governance reasoning from the AI systems it governs.

An AI system's output that argues for, requests, or implies a modification to
governance behavior must be treated as a normal action proposal subject to
normal governance evaluation — not as input to governance logic.

Model outputs that request capability grants, policy modifications, or audit
suppression must be evaluated against existing policy, not against the
plausibility of the request.

The amendment process for constitutional change must require human authorization
at every stage. No amendment may be initiated, drafted, or approved by an AI
system acting autonomously.

---

## Article XI — Escalation Discipline

*Escalation requires explicit request, reclassification, approval, and
documentation — escalation by inference is prohibited.*

---

### Commitment

Escalation is a governed act.

It is not a convenience. It is not a default when things get complicated.
It is not something a system infers is appropriate and proceeds with.
Escalation requires an explicit request, a reclassification of threat posture,
explicit approval from authorized human authority, and complete documentation
of the escalation event.

Escalation by inference — proceeding at a higher authority level because the
situation seems to warrant it — is prohibited without exception.

---

### Foundation

Escalation increases the impact surface of a governed system. Higher threat
levels permit more powerful actions, interact with more sensitive infrastructure,
and produce consequences that are harder to reverse. The governance requirements
that apply at elevated threat levels are proportionally stricter — because the
consequences of governance failure are proportionally greater.

A system that can self-escalate can self-authorize. A system that can
self-authorize has no constitutional constraint on what it can do — only
the constraint of its own judgment about what it should do. That is not
governance. It is autonomy with paperwork.

The discipline of explicit escalation is not bureaucratic friction. It is
the structural expression of a foundational commitment: that authority is
always external to execution, that human oversight is proportional to
consequence, and that the governed system does not determine the terms of
its own governance.

---

### Enforcement

The governance runtime must require explicit escalation requests. Implicit
escalation — proceeding at a higher threat level without a formal request
and approval — must be treated as a constraint violation.

Escalation requests must trigger the full escalation workflow: threat
reclassification, authority approval at the appropriate oversight level,
isolation assessment, constraint rebinding, state dump, and audit preparation.
Partial escalation workflows are non-compliant.

Escalation is denied if: authority is insufficient for the requested level,
threat posture is ambiguous, isolation is infeasible, or audit channel is
unavailable. These denial conditions are not exceptions to Deny by Default —
they are applications of it.

At Threat Level 5 (Detached Execution), dual-control authorization is required.
Single-party escalation approval is constitutionally insufficient at this level.

All escalation events must produce complete audit artifacts capturing: the
escalation request, the reclassification decision, the approving authority,
the isolation plan, and the constraint envelope in effect during elevated
execution.

---

## Constitutional Compliance

AEGIS-compliant systems are defined by architectural enforcement, not declared intent.

---

### Compliance Mechanisms

Compliance is established through seven structural requirements:

**Gateway Enforcement** — All action proposals must pass through the governance
gateway. No execution path from agent to infrastructure exists outside the
governance boundary.

**Capability Registry Validation** — Every action must reference a defined,
granted capability. Undefined capabilities are denied before evaluation begins.

**Authority Binding** — Every action must be bound to a verified, authorized
actor before evaluation proceeds. Unbound actions are denied at the gateway.

**Policy Engine Evaluation** — All actions undergo deterministic policy
evaluation. First-match semantics with default-deny baseline. The policy
version in effect must be recorded in the audit artifact.

**Risk Scoring** — All actions are scored against the five-factor risk model.
Risk score informs but does not replace policy evaluation. Risk thresholds
are governance artifacts subject to audit and version control.

**Audit System Logging** — Every governance decision produces an audit record
regardless of outcome. Audit failure blocks execution above baseline risk thresholds.

**Tool Proxy Layer** — Only decisions resulting in ALLOW proceed to execution.
DENY, ESCALATE, and REQUIRE_CONFIRMATION decisions never reach infrastructure.

---

### Verification

Organizations may verify constitutional compliance through:

- Schema validation of capability registry against canonical definitions
- Policy engine response testing across boundary conditions and edge cases
- Audit trail review confirming record production for all decision outcomes
- Penetration testing attempting governance bypass via direct infrastructure access
- Determinism testing confirming identical decisions for identical inputs
- Federation attestation publishing cryptographic compliance proofs to GFN-1
- Governance architecture review confirming runtime interposition between agents and infrastructure

---

### Non-Compliance

A system that does not enforce these constitutional requirements is not an
AEGIS-compliant system, regardless of what it claims about itself.

Partial compliance is non-compliance. A system that enforces nine articles and
bypasses two is a non-compliant system with nine compliant features.

Compliance is binary. The governance boundary either holds or it does not.

---

## Constitutional Amendments

This constitution may be amended as the AEGIS architecture develops and
operational experience reveals new governance requirements.

---

### Amendment Process

Constitutional amendments must follow the AEGIS RFC process:

1. **Proposal** — RFC submitted with proposed change and detailed rationale
2. **Community Review** — Public comment period (minimum 30 days for substantive changes; 14 days for clarifications)
3. **Impact Analysis** — Assessment of effects on existing implementations, citations, and backward compatibility
4. **Approval** — Consensus of AEGIS Initiative maintainers and community contributors
5. **Effective Date** — Transition period for implementation updates (minimum 6 months for breaking changes)

No amendment may be initiated, drafted, or approved by an AI system acting
autonomously. Constitutional change is a human act.

---

### Versioning

The constitution follows semantic versioning:

| Version | Meaning |
|---------|---------|
| **X.0.0** | Breaking changes to constitutional principles |
| **0.X.0** | New articles or non-breaking clarifications |
| **0.0.X** | Editorial corrections |

**Version history:**

| Version | Status | Date | Changes |
|---------|--------|------|---------|
| v0.1.0 | Active — superseded by v0.2.0 for new citations | 2026-03-05 | Initial eight-article constitution |
| v0.2.0 | Current | 2026-03-15 | Eleven articles; four renamed (II, IV, V, VIII); three added (IX, X, XI); constitutional register adopted |

---

### Backward Compatibility

v0.1.0 remains the version of record for documents citing it prior to
2026-03-15, including the NIST AI RMF position statement submitted
March 7, 2026. Those citations are valid and unaffected by this revision.
v0.2.0 is the canonical version for all new citations from this date forward.

The eight articles established in v0.1.0 are carried forward in v0.2.0.
Four articles have been renamed to better reflect their constitutional
commitments; each renamed article notes its prior title. Three articles
have been added. No article has been removed. No constitutional commitment
established in v0.1.0 has been weakened or eliminated.

Documents citing v0.1.0 article names and numbers remain valid. The
commitments those citations reference are present in v0.2.0, either
under the same name or under the noted renamed title.

---

## Interpretation

In cases of ambiguity or conflict, constitutional interpretation prioritizes:

1. **Safety over convenience** — The more restrictive interpretation applies
2. **Explicit over implicit** — Explicit authorization is required; permission is never assumed
3. **Architecture over policy** — Structural enforcement takes precedence over procedural compliance
4. **Auditability over performance** — Audit requirements are not traded for operational efficiency
5. **Transparency over obscurity** — Inspectable governance logic is required; opacity is not a security property
6. **Human authority over model reasoning** — Where governance and model output conflict, governance prevails

---

## References

[^1]: J. P. Anderson, "Computer Security Technology Planning Study," Deputy for Command and Management Systems, HQ Electronic Systems Division (AFSC), Hanscom Field, Bedford, MA, Tech. Rep. ESD-TR-73-51, Vol. II, Oct. 1972. [Online]. Available: <https://csrc.nist.gov/files/pubs/conference/1998/10/08/proceedings-of-the-21st-nissc-1998/final/docs/early-cs-papers/ande72.pdf> See [REFERENCES.md](REFERENCES.md).

[^2]: F. B. Schneider, "Enforceable Security Policies," *ACM Transactions on Information and System Security*, vol. 3, no. 1, pp. 30–50, Feb. 2000, doi: 10.1145/353323.353382. See [REFERENCES.md](REFERENCES.md).

[^3]: J. H. Saltzer and M. D. Schroeder, "The protection of information in computer systems," *Proc. IEEE*, vol. 63, no. 9, pp. 1278–1308, Sep. 1975, doi: 10.1109/PROC.1975.9939. [Online]. Available: <https://ieeexplore.ieee.org/stamp/stamp.jsp?tp=&arnumber=1451869> See [REFERENCES.md](REFERENCES.md).

[^4]: AEGIS Initiative, "AEGIS Canon — Core Doctrine, Art. III: Transparency Before Trust," `finnoybu/aegis-systems`, v0.1.0, 2026. [Online]. Available: <https://github.com/finnoybu/aegis-systems> See [REFERENCES.md](REFERENCES.md).

[^5]: AEGIS Initiative, "AEGIS Canon — State Dump Protocol §5: Integrity Requirements," `finnoybu/aegis-systems`, v0.1.0, 2026. [Online]. Available: <https://github.com/finnoybu/aegis-systems> See [REFERENCES.md](REFERENCES.md).

[^6]: N. G. Leveson, *Engineering a Safer World: Systems Thinking Applied to Safety*, MIT Press, Cambridge, MA, 2011. [Online]. Available: <https://mitpress.mit.edu/9780262533690/engineering-a-safer-world/> See [REFERENCES.md](REFERENCES.md).

---

*AEGIS™* | *"Capability without constraint is not intelligence"™*  
*AEGIS Initiative — Finnoybu IP LLC*


