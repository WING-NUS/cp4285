---
title: 'CP4285: Modern Recommendation Systems'
date: 2026-06-15
type: landing

sections:
  - block: hero
    content:
      title: "CP4285: Modern Recommendation Systems"
      text: 'Emerging Topics in Computer Science V<br>A course covering recommendation foundations, modern recommender methods and hands-on group work.'
      primary_action:
        text: Go to Canvas
        url: https://canvas.nus.edu.sg/courses/98339
        icon: arrow-top-right-on-square
      media:
        src: /uploads/recommendation-social-media.png
        alt: Recommendation icon showing a social media recommendation interaction
      trust:
        text: '<span class="hero-attribution">Recommendation icons created by <a href="https://www.flaticon.com/free-icons/recommendation" title="recommendation icons">Freepik - Flaticon</a></span>'
      announcement:
        text: "NUS School of Computing — Emerging Topics in Computer Science V"
    design:
      spacing:
        padding: ["5rem", 0, "4rem", 0]
        margin: [0, 0, 0, 0]
      layout: split-right
      alignment: left
      css_class: "nus-hero"
      background:
        color: "#061323"
  - block: markdown
    content:
      text: |
        <section class="page-changelog" aria-labelledby="home-changelog-title">
          <h5 id="home-changelog-title">Changelog</h5>
          <ul>
            <li><strong>8 Sep 2026</strong> — Made weekly schedule cards a click-anywhere accordion with animated opening, while preserving links and embedded materials.</li>
            <li><strong>6 Sep 2026</strong> — Refreshed the lecture decks and authoring workflow, and made page changelog history expandable.</li>
            <li><strong>5 Sep 2026</strong> — Standardised schedule labels and date-time formatting, with a Week 05 recap and Week 06 preview.</li>
            <li><strong>1 Sep 2026</strong> — Published Week 04 lecture materials and recording, including the neural-model comparison and Week 05 bridge.</li>
          </ul>
          <details class="page-changelog__archive">
            <summary class="page-changelog__toggle">
              <span class="page-changelog__show">Show earlier changes</span>
              <span class="page-changelog__hide">Hide earlier changes</span>
            </summary>
            <ul>
              <li><strong>31 Aug 2026</strong> — Expanded the Week 04 neural-recommendation lecture and its transition into sequential recommendation.</li>
              <li><strong>25 Aug 2026</strong> — Published Week 03 evaluation materials and recorded that no lecture video is available.</li>
              <li><strong>20 Aug 2026</strong> — Refreshed deck typography and clarified Week 01–03 course materials.</li>
              <li><strong>14 Aug 2026</strong> — Openly shared the course slides and invited public feedback.</li>
              <li><strong>17 Jun 2026</strong> — Added the CP428x pilot-course context, course rhythm, learning outcomes, course links, and WING.NUS information.</li>
            </ul>
          </details>
        </section>
    design:
      css_class: "bg-white dark:bg-gray-950"
  - block: course-notice
    content:
      text: This website is provided for external and public reference. Lecture slides are the definitive course record; Canvas and this website are supporting references. If information appears inconsistent, follow the slides and check with Min.
    design:
      css_class: "bg-white dark:bg-gray-950"
  - block: markdown
    content:
      title: About Emerging Topics in Computer Science Courses
      text: |
        CP4285 is part of the **CP428x Emerging Topics in Computer Science** series at [NUS Computing](https://www.comp.nus.edu.sg/). These are pilot courses, each run for a single semester only, with the intention of eventually becoming a permanent offering. Students should expect that the course is not yet fully mature: content, assessments, and delivery are actively evolving. The series exists to expose undergraduates to emerging areas of computer science before they become established parts of the curriculum.
    design:
      css_class: "bg-slate-50 dark:bg-gray-950"
  - block: markdown
    content:
      title: Why Recommendation Systems?
      text: |
        Recommendation systems now shape many everyday decisions: what people read, watch, buy, study, apply for, and who or what receives attention. Their influence extends beyond convenience into visibility, opportunity, trust, and social outcomes, making it important to understand not only how these systems work, but also what values and trade-offs they encode.
    design:
      css_class: "bg-white dark:bg-gray-950"
  - block: markdown
    content:
      title: About This Course
      text: |
        CP4285: Modern Recommendation Systems examines the algorithms, data, and design trade-offs behind contemporary recommender systems. The course connects classical recommendation methods with modern neural approaches, and emphasizes practical implementation, careful evaluation, and responsible deployment in real-world settings.

        CP4285 covers classical methods, neural architectures, ranking and retrieval pipelines, sequential models, graph-based recommendation, online learning, and emerging LLM-based approaches. Ethical issues are interwoven throughout, including bias, fairness, privacy, exposure, transparency, and stakeholder impact. Students apply these ideas in a hands-on group project requiring problem formulation, dataset work, baselines, model design, evaluation, critique, and either a final presentation or report.

        The lecture slides for this course are openly shared with the public. If you use these materials for learning, teaching, or another purpose, Min would be delighted to hear about your experience—please [share it by email](mailto:knmnyn@nus.edu.sg?subject=%5BCP4285%5D%20slides%20feedback).

        The course is hosted by [WING.NUS](https://wing.comp.nus.edu.sg/), the Web IR / NLP research group at NUS led by Min.

        **Prerequisites:** [CS2109S](https://nusmods.com/courses/CS2109S/introduction-to-ai-and-machine-learning) (Introduction to AI and Machine Learning) or equivalent, and completion of at least 120 units. Students without CS2109S but with equivalent background may seek approval from Min.

        **Workload:** [(2-0-0-3-5)](https://nusmods.com/courses/CP4285/emerging-topics-in-computing-v#timetable) — 2 hours lecture, 3 hours projects and assignments, 5 hours preparatory and other work; approximately 10 hours per week.
    design:
      css_class: "bg-slate-50 dark:bg-gray-950"
  - block: features
    id: rhythm
    content:
      title: Course Rhythm
      text: The semester moves from foundations into project critique, then advanced methods and final presentations.
      items:
        - name: "Weeks 1-6: Foundations"
          icon: calendar-days
          description: Recommendation tasks, latent factors, evaluation, neural models, sequence models, and retrieval-ranking architectures.
        - name: "Week 7: Design Review"
          icon: shield-check
          description: Teams critique project domains, datasets, objectives, baselines, evaluation plans, feasibility, and ethical risks.
        - name: "Weeks 8-12: Modern Recommenders"
          icon: chart-bar
          description: Learning-to-rank, graph recommendation, multi-objective systems, online learning, LLMs, and research frontiers.
        - name: "Week 13: Project Showcase"
          icon: presentation-chart-bar
          description: Teams present at STePS or submit a project report, integrating technical design, evaluation results, error analysis, and ethical analysis.
    design:
      css_class: "bg-white dark:bg-gray-950"
  - block: markdown
    id: outcomes
    content:
      title: Learning Outcomes
      text: |
        By the end of the course, students should be able to:

        | CLO | Outcome |
        | :-- | :--- |
        | **CLO 1** | Explain and compare classical recommendation methods, including collaborative filtering, content-based filtering, and hybrid approaches. |
        | **CLO 2** | Implement matrix factorization and neural recommendation models using modern deep learning frameworks. |
        | **CLO 3** | Design and execute rigorous offline evaluation protocols using appropriate ranking metrics. |
        | **CLO 4** | Analyse the cold-start problem and propose strategies to address it. |
        | **CLO 5** | Critique recommender systems from fairness, privacy, transparency, and stakeholder impact perspectives. |
        | **CLO 6** | Explain advanced recommendation architectures including sequential, graph-based, multi-objective, and LLM-enhanced systems. |
        | **CLO 7** | Design and justify a complete recommendation system pipeline from problem formulation through evaluation and ethical analysis. |
        | **CLO 8** | Communicate and defend recommendation-system designs and results to a technical audience. |
    design:
      css_class: "bg-slate-50 dark:bg-gray-950"
  - block: features
    id: links
    content:
      title: Course Pages
      items:
        - name: Schedule
          icon: calendar-days
          description: Weekly topics, milestones, and important dates.
          url: docs/schedule/
        - name: Assignments & Projects
          icon: clipboard-document-check
          description: Coursework components, project milestones, and submission notes.
          url: docs/assignments/
        - name: Grading
          icon: chart-bar
          description: Assessment components, weights, academic honesty, and AI use policy.
          url: docs/grading/
        - name: FAQ
          icon: question-mark-circle
          description: Frequently asked questions about the course.
          url: docs/faq/
    design:
      css_class: "bg-white dark:bg-gray-950"
---
