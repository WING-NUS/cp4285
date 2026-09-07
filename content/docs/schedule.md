---
title: Schedule
weight: 10
changelog:
  - date: 8 Sep 2026
    text: Made weekly schedule cards a click-anywhere accordion with smooth opening and closing, while preserving links and embedded materials.
  - date: 5 Sep 2026
    text: Standardised week labels and date-time formatting across the schedule and Weeks 01–04 materials.
  - date: 1 Sep 2026
    text: Added Week 04 slides and video, including the neural-model comparison and Week 05 bridge.
  - date: 25 Aug 2026
    text: Added a Week 03 notice confirming that no lecture recording is available.
  - date: 20 Aug 2026
    text: Refreshed the Week 03–13 embedded lecture decks with improved typography for readability and consistency.
  - date: 14 Aug 2026
    text: Added the Week 01 lecture recording link (NUSNet authentication required).
---

{{< changelog >}}

## Class Meetings

| Day | Time | Venue |
| --- | --- | --- |
| Every Tuesday | 10:00-12:00 SGT | [Seminar Room 12, COM3-01-21](https://nusmods.com/venues/COM3-01-21) |

## Weekly Schedule

{{< week-card week="Week 01" date="11–17 Aug 2026" focus="Recommendation Problems and Classical Methods" >}}

Topics:

- Recommendation tasks
- Explicit vs implicit feedback
- Popularity-based recommendation
- Content-based recommendation
- Collaborative filtering

Ethics thread: popularity bias, exposure inequality, and platform incentives.

Learning outcomes:

- Formulate a recommendation task using a user-item matrix, available signals, and either a prediction or top-*k* ranking objective.
- Compare popularity-based, content-based, collaborative-filtering, and knowledge-based recommendation in terms of their evidence, suitable use cases, and limitations.
- Explain cold-start and sparse-data challenges, and justify an appropriate response.
- Compute and interpret user-user or item-item similarity using appropriate neighborhood-based collaborative-filtering measures.
- Explain how neighborhood selection, similarity weighting, and ranking objectives affect prediction quality, exposure, and long-tail visibility.
- Critique recommendation choices in terms of privacy, fairness, robustness, novelty, and stakeholder impact.

**Slides:**

{{< slides src="/cp4285-website/slides/w01/w01.html" title="Week 01 Slides" height="520px" >}}

**Lecture video:** [Watch the Week 01 lecture recording](https://soc-n.us/cp4285-t2610-w01-video) — requires NUSNet authentication.
{{< /week-card >}}

{{< week-card week="Week 02" date="18–24 Aug 2026" focus="Latent Factor Models" >}}

**Essay 1 release:** Tue, 18 Aug 2026.

Topics:

- Matrix factorization
- User-item embeddings
- Bias models
- Ranking objectives, including Bayesian Personalized Ranking

Ethics thread: bias encoded in historical interactions, representation, and interpretability.

Learning outcomes:

- Distinguish explicit features, text representations, and learned latent factors as ways to represent recommendation evidence.
- Explain how latent-factor models use user and item vectors, dot-product scores, and regularised fitting on observed interactions.
- Compare signed SVD-style factorisation with nonnegative matrix factorisation, and justify which lens suits a given kind of evidence.
- Critique the limits of latent-factor scores, including sparse and unobserved interactions, exposure, diversity, and interpretation.

**Slides:**

{{< slides src="/cp4285-website/slides/w02/w02.html" title="Week 02 Slides" height="520px" >}}

**Lecture video:** [Watch the Week 02 lecture recording](https://soc-n.us/cp4285-t2610-w02-video) — requires NUSNet authentication.
{{< /week-card >}}

{{< week-card week="Week 03" date="25–31 Aug 2026" focus="Evaluation of Recommendation Systems" due="Essay 1 + Project Mini-team Declaration — Mon, 24 Aug 2026 · 23:59 SGT" >}}

Topics:

- Offline evaluation
- Precision@K
- Recall@K
- MAP
- NDCG
- Business metrics

Ethics thread: metrics as value choices, and accuracy versus user welfare.

Learning outcomes:

- Design evaluation protocols.
- Compute ranking metrics.
- Critique metric selection.
- Explain limitations of offline evaluation.

**Slides:**

{{< slides src="/cp4285-website/slides/w03/w03.html" title="Week 03 Slides" height="520px" >}}

<p class="course-recording-notice"><strong>Lecture recording:</strong> The recording was not made, so no recording is available.</p>
{{< /week-card >}}

{{< week-card week="Week 04" date="1–7 Sep 2026" focus="Neural Recommendation Models" >}}

**Project teams release:** Tue, 1 Sep 2026.

Topics:

- Neural collaborative filtering
- Deep ranking models
- Representation learning

Ethics thread: explainability versus performance, and transparency concerns.

Learning outcomes:

- Build neural recommenders.
- Compare neural and latent-factor approaches.
- Analyze explainability challenges.
- Assess trade-offs between complexity and transparency.

**Slides:**

{{< slides src="/cp4285-website/slides/w04/w04.html" title="Week 04 Slides" height="520px" >}}

**Lecture video:** [Watch the Week 04 lecture recording](https://soc-n.us/cp4285-t2610-w04-video) — requires NUSNet authentication.
{{< /week-card >}}

{{< week-card week="Week 05" date="8–14 Sep 2026" focus="Sequential and Session-Based Recommendation" >}}

**Question Bank collection:** Prepare your assigned contribution covering Weeks 01–05 and submit it on Canvas by **Mon, 21 Sep 2026, 23:59 SGT**.

Topics:

- User sequences
- GRU4Rec
- SASRec
- Transformer recommenders

Ethics thread: engagement optimization and behavioral manipulation risks.

Learning outcomes:

- Model temporal preferences.
- Implement next-item prediction.
- Compare static and dynamic representations.
- Critically assess engagement-driven objectives.

**Slides:**

{{< slides src="/cp4285-website/slides/w05/w05.html" title="Week 05 Slides" height="520px" >}}
{{< /week-card >}}

{{< week-card week="Week 06" date="15–21 Sep 2026" focus="Retrieval and Ranking Architectures" >}}

Topics:

- Candidate generation
- Retrieval
- Ranking
- Re-ranking
- Two-tower architectures

Ethics thread: visibility allocation and stakeholder impacts.

Learning outcomes:

- Explain industrial recommendation pipelines.
- Design retrieval-ranking architectures.
- Analyze scalability trade-offs.
- Evaluate how ranking affects different stakeholders.

**Slides:**

{{< slides src="/cp4285-website/slides/w06/w06.html" title="Week 06 Slides" height="520px" >}}
{{< /week-card >}}

<aside class="course-schedule-notice course-schedule-notice--break"><strong>Recess Week</strong><span>Tue, 22 Sep 2026 · No class</span></aside>

{{< week-card week="Week 07" date="29 Sep–5 Oct 2026" focus="Project Design Critique Workshop" due="Project design critique" >}}

**Essay 2 release:** Tue, 29 Sep 2026.

Student deliverables:

- Application domain
- Dataset
- User problem
- Recommendation objective
- Baselines
- Evaluation plan
- Ethical risks

Ethics thread: feasibility, bias, evaluation design, and project scope.

Peer critique themes:

- Is the recommendation task well-defined?
- Are the evaluation metrics appropriate?
- What biases may emerge?
- Is the problem feasible?

Learning outcomes:

- Defend recommendation-system designs.
- Critique evaluation strategies.
- Identify ethical risks early.
- Refine project scope based on feedback.

Suggested weight: 5-10% participation or milestone grade.

**Slides:**

{{< slides src="/cp4285-website/slides/w07/w07.html" title="Week 07 Slides" height="520px" >}}
{{< /week-card >}}

{{< week-card week="Week 08" date="6–12 Oct 2026" focus="Learning-to-Rank" due="Essay 2 — Mon, 5 Oct 2026 · 23:59 SGT" >}}

Topics:

- Pointwise ranking
- Pairwise ranking
- Listwise ranking
- LambdaRank intuition

Ethics thread: position bias and fair ranking.

Learning outcomes:

- Formulate ranking objectives.
- Compare ranking approaches.
- Analyze position bias.
- Discuss fairness implications of ranking.

**Slides:**

{{< slides src="/cp4285-website/slides/w08/w08.html" title="Week 08 Slides" height="520px" >}}
{{< /week-card >}}

{{< week-card week="Week 09" date="13–19 Oct 2026" focus="Graph-Based Recommendation" >}}

Topics:

- User-item graphs
- Graph embeddings
- Graph neural networks
- LightGCN

Ethics thread: homophily, echo chambers, and community amplification.

Learning outcomes:

- Represent recommendations as graph problems.
- Explain graph propagation.
- Build graph-based recommenders.
- Analyze risks of graph-driven feedback loops.

**Slides:**

{{< slides src="/cp4285-website/slides/w09/w09.html" title="Week 09 Slides" height="520px" >}}
{{< /week-card >}}

{{< week-card week="Week 10" date="20–26 Oct 2026" focus="Multi-Objective Recommendation" >}}

Topics:

- Diversity
- Novelty
- Serendipity
- Coverage
- Long-term satisfaction

Ethics thread: balancing stakeholder interests.

Learning outcomes:

- Define non-accuracy objectives.
- Measure diversity and novelty.
- Design multi-objective recommenders.
- Justify objective trade-offs.

**Slides:**

{{< slides src="/cp4285-website/slides/w10/w10.html" title="Week 10 Slides" height="520px" >}}
{{< /week-card >}}

{{< week-card week="Week 11" date="27 Oct–2 Nov 2026" focus="Exploration and Online Learning" >}}

Topics:

- Multi-armed bandits
- Contextual bandits
- Exploration-exploitation
- Feedback loops

Ethics thread: online experimentation and fair exposure.

Learning outcomes:

- Explain exploration strategies.
- Design adaptive recommendation policies.
- Analyze recommendation feedback loops.
- Discuss ethical implications of experimentation.

**Slides:**

{{< slides src="/cp4285-website/slides/w11/w11.html" title="Week 11 Slides" height="520px" >}}
{{< /week-card >}}

{{< week-card week="Week 12" date="3–9 Nov 2026" focus="LLMs, Generative Recommendation, and Research Frontiers" >}}

Topics:

- Conversational recommendation
- LLM-enhanced recommendation
- Retrieval-augmented recommendation
- Foundation models
- Causal recommendation
- Future directions

Ethics thread: trust, hallucination, persuasive AI, and governance.

Learning outcomes:

- Explain modern recommendation research directions.
- Evaluate LLM-based recommendation systems.
- Critique emerging approaches.
- Identify open research challenges.

**Slides:**

{{< slides src="/cp4285-website/slides/w12/w12.html" title="Week 12 Slides" height="520px" >}}
{{< /week-card >}}

{{< week-card week="Week 13" date="10 Nov 2026" focus="Final Project Presentations" due="Final project presentation or report, depending on STePS participation" >}}

Teams selected to present at 29th STePS complete the presentation below and do **not** submit a project report. Teams not presenting at STePS submit a project report instead.

Required presentation components:

1. Problem formulation
2. Dataset and preprocessing
3. Baselines
4. Proposed recommender
5. Evaluation results
6. Error analysis
7. Ethical analysis
8. Future improvements

Ethics thread: technical, product, and societal considerations.

Learning outcomes:

- Present recommendation-system designs professionally.
- Defend technical decisions.
- Interpret evaluation results critically.
- Integrate technical, product, and societal considerations.

**Slides:**

{{< slides src="/cp4285-website/slides/w13/w13.html" title="Week 13 Slides" height="520px" >}}
{{< /week-card >}}

<aside class="course-schedule-notice course-schedule-notice--break"><strong>Reading Week</strong><span>Sat, 14 Nov-Fri, 20 Nov 2026 · Reading week</span></aside>

<aside class="course-schedule-notice course-schedule-notice--exam"><strong>Examination Week 1</strong><span>Mon, 23 Nov 2026 · Final exam, 13:00-15:00 SGT · Venue to be announced</span></aside>

<aside class="course-schedule-notice course-schedule-notice--exam"><strong>Examination Week 2</strong><span>Sat, 28 Nov-Sat, 5 Dec 2026 · Examination period</span></aside>
