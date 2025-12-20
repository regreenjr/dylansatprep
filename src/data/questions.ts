import { Question } from './types';

export const questions: Question[] = [
  // ===============================
  // CRAFT AND STRUCTURE - HIGH PRIORITY
  // ===============================

  // Words in Context
  {
    id: "cs-wic-1",
    category: "craft-and-structure",
    subcategory: "Words in Context",
    difficulty: "medium",
    passage: "The scientist's hypothesis was initially met with skepticism by her colleagues, but subsequent experiments served to vindicate her theory, proving that her unconventional approach had merit after all.",
    question: "As used in the passage, 'vindicate' most nearly means",
    options: [
      "justify or prove right",
      "avenge or punish",
      "criticize harshly",
      "abandon completely"
    ],
    correctAnswer: 0,
    explanation: "The context tells us that 'subsequent experiments' proved the scientist's theory had 'merit' - meaning her approach was shown to be correct. 'Vindicate' means to justify, prove right, or clear from blame. The word 'avenge' is a less common meaning of vindicate but doesn't fit this scientific context.",
    skill: "Using context clues to determine word meaning",
    tip: "Look for signal words and the overall tone. Here, 'proving' and 'merit' signal a positive outcome."
  },
  {
    id: "cs-wic-2",
    category: "craft-and-structure",
    subcategory: "Words in Context",
    difficulty: "easy",
    passage: "Despite the company's efforts to appear transparent, critics argued that its financial reports remained deliberately opaque, making it nearly impossible for shareholders to understand where their money was being spent.",
    question: "As used in the passage, 'opaque' most nearly means",
    options: [
      "transparent and clear",
      "unclear or difficult to understand",
      "colorful and bright",
      "brief and concise"
    ],
    correctAnswer: 1,
    explanation: "'Opaque' is contrasted with 'transparent' in this passage. The context clue 'making it nearly impossible... to understand' confirms that opaque means unclear or difficult to understand. In a literal sense, opaque means not transparent (blocking light), but here it's used figuratively about information.",
    skill: "Identifying contrast clues in context",
    tip: "Words like 'despite' and 'but' often signal a contrast. The opposite of 'transparent' helps define 'opaque.'"
  },
  {
    id: "cs-wic-3",
    category: "craft-and-structure",
    subcategory: "Words in Context",
    difficulty: "hard",
    passage: "The poet's work was notable for its economy of language; where other writers might use elaborate descriptions, she conveyed profound emotions through sparse, carefully chosen words that resonated with readers long after they finished reading.",
    question: "As used in the passage, 'economy' most nearly means",
    options: [
      "financial system",
      "thrifty management of resources",
      "efficient and minimal use",
      "abundance and plenty"
    ],
    correctAnswer: 2,
    explanation: "'Economy of language' refers to using words efficiently and minimally. The context clues 'sparse' and 'carefully chosen words' (as opposed to 'elaborate descriptions') confirm this meaning. This is a figurative use of 'economy' - not about money, but about using language efficiently.",
    skill: "Understanding figurative word usage",
    tip: "Don't default to the most common meaning. Consider how the word functions in this specific context."
  },
  {
    id: "cs-wic-4",
    category: "craft-and-structure",
    subcategory: "Words in Context",
    difficulty: "medium",
    passage: "The diplomat's measured response to the provocation helped de-escalate what could have been an international incident. Her ability to remain composed under pressure was crucial to maintaining peace.",
    question: "As used in the passage, 'measured' most nearly means",
    options: [
      "calculated using instruments",
      "slow and rhythmic",
      "careful and deliberate",
      "aggressive and forceful"
    ],
    correctAnswer: 2,
    explanation: "A 'measured response' means one that is careful, deliberate, and controlled - not impulsive or excessive. The context clues 'de-escalate,' 'composed,' and 'maintaining peace' all support this meaning. A measured response is the opposite of an emotional or reactive one.",
    skill: "Understanding tone-related vocabulary",
    tip: "Consider what type of response would 'de-escalate' a situation - something calm and controlled."
  },
  {
    id: "cs-wic-5",
    category: "craft-and-structure",
    subcategory: "Words in Context",
    difficulty: "hard",
    passage: "The author's treatment of the subject was anything but superficial; her exhaustive research led to a comprehensive analysis that illuminated previously overlooked aspects of the historical period.",
    question: "As used in the passage, 'exhaustive' most nearly means",
    options: [
      "tiring and draining",
      "thorough and complete",
      "quick and efficient",
      "outdated and obsolete"
    ],
    correctAnswer: 1,
    explanation: "'Exhaustive research' means thorough and complete research that examines all aspects. The context clues 'anything but superficial,' 'comprehensive analysis,' and 'illuminated previously overlooked aspects' all indicate depth and thoroughness. Don't confuse 'exhaustive' (complete) with 'exhausting' (tiring).",
    skill: "Distinguishing similar-sounding words",
    tip: "Look for result phrases - 'comprehensive analysis' and 'illuminated' suggest the research was thorough."
  },

  // Text Structure and Purpose
  {
    id: "cs-tsp-1",
    category: "craft-and-structure",
    subcategory: "Text Structure and Purpose",
    difficulty: "medium",
    passage: "For decades, scientists believed that the coelacanth, a prehistoric fish, had gone extinct along with the dinosaurs. This assumption was shattered in 1938 when a living specimen was discovered off the coast of South Africa, fundamentally changing our understanding of marine biology and evolution.",
    question: "The primary purpose of this passage is to",
    options: [
      "argue that scientific assumptions are usually wrong",
      "describe a discovery that overturned a long-held belief",
      "explain the extinction of the dinosaurs",
      "compare ancient and modern fish species"
    ],
    correctAnswer: 1,
    explanation: "The passage describes how a scientific assumption ('the coelacanth had gone extinct') was 'shattered' by a discovery. The main purpose is to describe this discovery and how it changed scientific understanding. It's not arguing all assumptions are wrong, nor is extinction or fish comparison the focus.",
    skill: "Identifying main purpose",
    tip: "Ask yourself: What is the author trying to accomplish? Look for the central event or argument."
  },
  {
    id: "cs-tsp-2",
    category: "craft-and-structure",
    subcategory: "Text Structure and Purpose",
    difficulty: "easy",
    passage: "First, gather all your ingredients and preheat the oven to 350 degrees. Next, mix the dry ingredients in a large bowl. Then, add the wet ingredients gradually while stirring. Finally, pour the batter into a greased pan and bake for 25 minutes.",
    question: "The organizational structure of this passage is best described as",
    options: [
      "cause and effect",
      "compare and contrast",
      "sequential/chronological",
      "problem and solution"
    ],
    correctAnswer: 2,
    explanation: "The passage uses sequential/chronological order, indicated by transition words like 'First,' 'Next,' 'Then,' and 'Finally.' This structure presents steps in the order they should be completed. It's a set of instructions that must be followed in sequence.",
    skill: "Identifying organizational patterns",
    tip: "Look for signal words: 'first, next, then, finally' = sequential; 'because, therefore' = cause/effect; 'however, but' = compare/contrast."
  },
  {
    id: "cs-tsp-3",
    category: "craft-and-structure",
    subcategory: "Text Structure and Purpose",
    difficulty: "hard",
    passage: "While some historians emphasize the economic factors that led to the American Revolution, others point to ideological motivations rooted in Enlightenment philosophy. Still others argue that local grievances against British officials played the most significant role. The truth likely involves elements of all three perspectives.",
    question: "The passage is primarily organized by",
    options: [
      "presenting a chronological history of the Revolution",
      "arguing for one interpretation over others",
      "presenting multiple scholarly perspectives on a topic",
      "refuting common misconceptions about history"
    ],
    correctAnswer: 2,
    explanation: "The passage presents three different scholarly perspectives (economic, ideological, and local grievances) without strongly advocating for any single view. The phrase 'The truth likely involves elements of all three' shows the author is synthesizing multiple viewpoints rather than arguing for one position.",
    skill: "Recognizing balanced presentation of views",
    tip: "Words like 'some... others... still others' indicate multiple perspectives are being presented."
  },

  // Cross-Text Connections
  {
    id: "cs-ctc-1",
    category: "craft-and-structure",
    subcategory: "Cross-Text Connections",
    difficulty: "medium",
    passage: "Text 1: Remote work has revolutionized the modern workplace, offering employees unprecedented flexibility and eliminating lengthy commutes. Studies show that many workers report higher job satisfaction and improved work-life balance when working from home.\n\nText 2: The shift to remote work, while convenient, has created significant challenges for workplace culture and collaboration. Research indicates that spontaneous interactions and informal mentoring opportunities have declined sharply, potentially affecting innovation and employee development.",
    question: "Which choice best describes the relationship between the two texts?",
    options: [
      "Text 2 provides evidence that supports the claims in Text 1",
      "Text 2 presents challenges that complicate the positive view in Text 1",
      "Text 2 completely contradicts the findings mentioned in Text 1",
      "Text 2 discusses a different topic than Text 1"
    ],
    correctAnswer: 1,
    explanation: "Text 1 presents benefits of remote work (flexibility, satisfaction, work-life balance), while Text 2 acknowledges these benefits ('while convenient') but presents challenges (culture, collaboration, mentoring). Text 2 doesn't completely contradict Text 1 - it complicates the picture by adding concerns.",
    skill: "Analyzing relationships between paired texts",
    tip: "Look for how the second text responds to the first - does it support, complicate, or contradict?"
  },
  {
    id: "cs-ctc-2",
    category: "craft-and-structure",
    subcategory: "Cross-Text Connections",
    difficulty: "hard",
    passage: "Text 1: Dr. Sarah Chen argues that artificial intelligence will fundamentally transform healthcare by enabling earlier disease detection and personalized treatment plans. She believes that AI will enhance, rather than replace, the role of physicians.\n\nText 2: In response to optimistic predictions about AI in medicine, Dr. Michael Torres cautions that current AI systems are trained on biased data sets that underrepresent minority populations. He warns that widespread adoption without addressing these biases could worsen existing healthcare disparities.",
    question: "How would Dr. Torres most likely respond to Dr. Chen's argument?",
    options: [
      "By agreeing that AI will improve healthcare for all patients equally",
      "By arguing that AI should completely replace human physicians",
      "By suggesting that AI's benefits depend on addressing data bias issues first",
      "By dismissing AI as having no potential value in healthcare"
    ],
    correctAnswer: 2,
    explanation: "Dr. Torres doesn't reject AI entirely - he 'cautions' about specific problems with bias and disparities. He would likely respond that AI's potential benefits (which Chen describes) depend on first addressing the data bias issues he identifies. This is a nuanced response, not complete agreement or rejection.",
    skill: "Inferring how one author would respond to another",
    tip: "Consider each author's main concern. Torres isn't anti-AI; he's concerned about implementation issues."
  },

  // ===============================
  // PROBLEM SOLVING & DATA ANALYSIS - HIGH PRIORITY
  // ===============================

  // Ratios and Proportions
  {
    id: "psda-ratio-1",
    category: "problem-solving-data-analysis",
    subcategory: "Ratios and Proportions",
    difficulty: "easy",
    question: "A recipe calls for flour and sugar in a ratio of 5:2. If you use 15 cups of flour, how many cups of sugar should you use?",
    options: ["3", "6", "7.5", "10"],
    correctAnswer: 1,
    explanation: "Set up the proportion: 5/2 = 15/x. Cross multiply: 5x = 30, so x = 6 cups of sugar. Alternatively, notice that 15 is 3 times 5, so you need 3 times 2 = 6 cups of sugar.",
    skill: "Setting up and solving proportions",
    tip: "Check your answer: 15:6 = 5:2 (both simplify to 2.5:1)"
  },
  {
    id: "psda-ratio-2",
    category: "problem-solving-data-analysis",
    subcategory: "Ratios and Proportions",
    difficulty: "medium",
    question: "A map has a scale of 1 inch : 25 miles. Two cities are 3.5 inches apart on the map. What is the actual distance between the cities?",
    options: ["71.43 miles", "75 miles", "87.5 miles", "125 miles"],
    correctAnswer: 2,
    explanation: "Use the scale as a ratio: 1 inch/25 miles = 3.5 inches/x miles. Cross multiply: x = 25 × 3.5 = 87.5 miles. The map distance multiplied by the scale factor gives the actual distance.",
    skill: "Applying scale factors",
    tip: "Map scales work like unit rates - multiply the map distance by miles per inch."
  },
  {
    id: "psda-ratio-3",
    category: "problem-solving-data-analysis",
    subcategory: "Ratios and Proportions",
    difficulty: "hard",
    question: "A store sells two sizes of orange juice. A 12-oz bottle costs $2.40 and a 32-oz bottle costs $5.60. Which size is the better value, and by how much per ounce?",
    options: [
      "12-oz is better by $0.025 per oz",
      "32-oz is better by $0.025 per oz",
      "32-oz is better by $0.05 per oz",
      "Both sizes have the same unit price"
    ],
    correctAnswer: 1,
    explanation: "Calculate unit prices: 12-oz: $2.40/12 = $0.20 per oz. 32-oz: $5.60/32 = $0.175 per oz. The 32-oz bottle is cheaper per ounce. Difference: $0.20 - $0.175 = $0.025 per oz savings.",
    skill: "Comparing unit rates",
    tip: "Always calculate the unit price (cost per single unit) to compare values accurately."
  },

  // Percentages
  {
    id: "psda-pct-1",
    category: "problem-solving-data-analysis",
    subcategory: "Percentages",
    difficulty: "easy",
    question: "A shirt originally priced at $45 is on sale for 20% off. What is the sale price?",
    options: ["$9", "$25", "$36", "$54"],
    correctAnswer: 2,
    explanation: "20% of $45 = 0.20 × $45 = $9 discount. Sale price = $45 - $9 = $36. Alternatively, if it's 20% off, you pay 80%: 0.80 × $45 = $36.",
    skill: "Calculating percent discount",
    tip: "Shortcut: Paying after X% off means paying (100-X)% of the original price."
  },
  {
    id: "psda-pct-2",
    category: "problem-solving-data-analysis",
    subcategory: "Percentages",
    difficulty: "medium",
    question: "A population of bacteria increased from 2,000 to 3,500. What was the percent increase?",
    options: ["42.9%", "57.1%", "75%", "175%"],
    correctAnswer: 2,
    explanation: "Percent change = (New - Original)/Original × 100 = (3500 - 2000)/2000 × 100 = 1500/2000 × 100 = 0.75 × 100 = 75% increase.",
    skill: "Calculating percent change",
    tip: "Percent change formula: (change/original) × 100. Always divide by the ORIGINAL value."
  },
  {
    id: "psda-pct-3",
    category: "problem-solving-data-analysis",
    subcategory: "Percentages",
    difficulty: "hard",
    question: "A store increases prices by 25%, then later decreases all prices by 25%. If an item originally cost $80, what is its final price?",
    options: ["$80", "$75", "$70", "$60"],
    correctAnswer: 1,
    explanation: "After 25% increase: $80 × 1.25 = $100. After 25% decrease from $100: $100 × 0.75 = $75. Note: A 25% increase followed by a 25% decrease does NOT return to the original price because the decrease is calculated on a larger amount.",
    skill: "Sequential percent changes",
    tip: "Percent changes don't cancel out. Multiply the factors: 1.25 × 0.75 = 0.9375, so final is 93.75% of original."
  },

  // Statistics and Data
  {
    id: "psda-stat-1",
    category: "problem-solving-data-analysis",
    subcategory: "Statistics",
    difficulty: "easy",
    question: "A student's test scores are: 78, 85, 92, 85, 90. What is the median score?",
    options: ["84", "85", "86", "90"],
    correctAnswer: 1,
    explanation: "First, order the scores: 78, 85, 85, 90, 92. The median is the middle value. With 5 scores, the middle (3rd) value is 85. Note: If there were an even number of scores, you'd average the two middle values.",
    skill: "Finding the median",
    tip: "Always order the data first! The median is the middle value, not the average."
  },
  {
    id: "psda-stat-2",
    category: "problem-solving-data-analysis",
    subcategory: "Statistics",
    difficulty: "medium",
    question: "A data set has a mean of 50 and a standard deviation of 10. A value of 75 is how many standard deviations above the mean?",
    options: ["1.5", "2", "2.5", "7.5"],
    correctAnswer: 2,
    explanation: "To find how many standard deviations from the mean: (value - mean)/standard deviation = (75 - 50)/10 = 25/10 = 2.5. The value 75 is 2.5 standard deviations above the mean.",
    skill: "Understanding standard deviation",
    tip: "Distance from mean in standard deviations = (value - mean) ÷ standard deviation"
  },
  {
    id: "psda-stat-3",
    category: "problem-solving-data-analysis",
    subcategory: "Statistics",
    difficulty: "hard",
    question: "In a survey, the margin of error is ±3% at a 95% confidence level. If 52% of respondents support a proposal, which statement is most accurate?",
    options: [
      "Exactly 52% of the population supports the proposal",
      "We are 95% confident that 49% to 55% of the population supports the proposal",
      "95% of the population supports the proposal",
      "The survey is unreliable due to the margin of error"
    ],
    correctAnswer: 1,
    explanation: "A margin of error of ±3% means the true population value likely falls within 3 percentage points of the sample result. 52% ± 3% gives a range of 49% to 55%. The 95% confidence level means we're 95% confident the true value is in this range.",
    skill: "Interpreting margin of error",
    tip: "Margin of error creates a range. '95% confidence' refers to how sure we are, not the percentage who agree."
  },

  // Probability
  {
    id: "psda-prob-1",
    category: "problem-solving-data-analysis",
    subcategory: "Probability",
    difficulty: "easy",
    question: "A bag contains 4 red marbles, 3 blue marbles, and 5 green marbles. If one marble is selected at random, what is the probability of selecting a blue marble?",
    options: ["1/4", "3/12", "1/3", "3/7"],
    correctAnswer: 1,
    explanation: "Total marbles = 4 + 3 + 5 = 12. Blue marbles = 3. Probability = favorable outcomes/total outcomes = 3/12 = 1/4. Note: 3/12 and 1/4 are equivalent, but 1/4 is simplified.",
    skill: "Basic probability",
    tip: "Probability = (what you want) ÷ (total possibilities)"
  },
  {
    id: "psda-prob-2",
    category: "problem-solving-data-analysis",
    subcategory: "Probability",
    difficulty: "medium",
    question: "A survey found that 60% of students play sports. Of those who play sports, 40% also participate in music. What percentage of all students both play sports AND participate in music?",
    options: ["20%", "24%", "40%", "100%"],
    correctAnswer: 1,
    explanation: "This is a compound probability. 40% of the 60% who play sports also do music. Multiply: 0.40 × 0.60 = 0.24 = 24% of all students do both activities.",
    skill: "Conditional probability",
    tip: "For 'A and B' when B depends on A: multiply P(A) × P(B given A)"
  },

  // ===============================
  // INFORMATION AND IDEAS
  // ===============================
  {
    id: "ii-ci-1",
    category: "information-and-ideas",
    subcategory: "Central Ideas",
    difficulty: "medium",
    passage: "Urban beekeeping has surged in popularity as cities recognize the crucial role bees play in pollinating community gardens and green spaces. Unlike their rural counterparts, urban beekeepers face unique challenges, including limited foraging areas and concerns from neighbors about stings. However, studies show that urban bees often produce more honey than rural bees due to the diversity of flowering plants in cities and the longer growing seasons created by urban heat islands.",
    question: "Which statement best expresses the central idea of the passage?",
    options: [
      "Urban beekeeping is dangerous and should be discouraged",
      "Rural beekeeping is more productive than urban beekeeping",
      "Urban beekeeping has grown despite challenges and offers surprising benefits",
      "Cities should ban beekeeping due to neighbor complaints"
    ],
    correctAnswer: 2,
    explanation: "The passage describes both challenges ('limited foraging,' 'concerns from neighbors') and benefits ('more honey,' 'diversity of plants'). The central idea captures both aspects: urban beekeeping has grown despite challenges and has unexpected advantages. Options A, B, and D contradict information in the passage.",
    skill: "Identifying the main idea",
    tip: "The central idea should account for the whole passage, not just one part of it."
  },
  {
    id: "ii-evi-1",
    category: "information-and-ideas",
    subcategory: "Command of Evidence",
    difficulty: "medium",
    passage: "The introduction of wolves to Yellowstone National Park in 1995 triggered a remarkable ecological transformation. The wolves preyed on elk, which had been overgrazing vegetation along riverbanks. As elk populations declined and their behavior changed, willows and aspens began to recover. This regrowth stabilized riverbanks and even altered the course of rivers.",
    question: "Which finding, if true, would most directly support the passage's claim about ecological transformation?",
    options: [
      "Tourist visits to Yellowstone increased after 1995",
      "Wolves in Yellowstone travel an average of 30 miles per day",
      "Satellite images show significantly more riverside vegetation in 2010 than in 1990",
      "Elk meat is a preferred food source for wolves"
    ],
    correctAnswer: 2,
    explanation: "The passage claims that wolf introduction led to vegetation recovery. Satellite images showing more vegetation after wolves were introduced would directly support this claim. The other options, while possibly true, don't directly support the ecological transformation claim.",
    skill: "Evaluating supporting evidence",
    tip: "Ask: Does this evidence directly support the specific claim being made?"
  },

  // ===============================
  // EXPRESSION OF IDEAS
  // ===============================
  {
    id: "eoi-trans-1",
    category: "expression-of-ideas",
    subcategory: "Transitions",
    difficulty: "easy",
    question: "The new policy was expected to reduce costs. _______, expenses increased by 15% in the first quarter.",
    options: ["Therefore", "However", "Furthermore", "Similarly"],
    correctAnswer: 1,
    explanation: "'However' signals a contrast between what was expected (reduced costs) and what happened (increased expenses). 'Therefore' shows cause-effect, 'Furthermore' adds similar information, and 'Similarly' shows comparison - none of which fit this contrast.",
    skill: "Choosing appropriate transitions",
    tip: "Contrast transitions (however, but, yet) connect opposing ideas. Continuation transitions (furthermore, moreover) add similar ideas."
  },
  {
    id: "eoi-trans-2",
    category: "expression-of-ideas",
    subcategory: "Transitions",
    difficulty: "medium",
    question: "The study found that exercise improves memory. _______, participants who exercised regularly scored 20% higher on recall tests.",
    options: ["Nevertheless", "Specifically", "Conversely", "Instead"],
    correctAnswer: 1,
    explanation: "'Specifically' introduces a specific example or detail that illustrates the general claim. The second sentence gives specific evidence (20% higher scores) supporting the general claim (exercise improves memory). 'Nevertheless' and 'Conversely' signal contrast, which doesn't fit.",
    skill: "Using transitions to introduce examples",
    tip: "Transitions like 'specifically,' 'for example,' and 'in particular' introduce supporting details."
  },

  // ===============================
  // STANDARD ENGLISH CONVENTIONS
  // ===============================
  {
    id: "sec-bound-1",
    category: "standard-english-conventions",
    subcategory: "Sentence Boundaries",
    difficulty: "easy",
    question: "Which version correctly punctuates the sentence?",
    options: [
      "The museum was closed, we decided to visit the park instead.",
      "The museum was closed; we decided to visit the park instead.",
      "The museum was closed we decided to visit the park instead.",
      "The museum, was closed we decided, to visit the park instead."
    ],
    correctAnswer: 1,
    explanation: "Two independent clauses ('The museum was closed' and 'we decided to visit the park instead') must be joined with a semicolon, a period, or a comma + coordinating conjunction. Option A is a comma splice (error). Option C is a run-on. Option D has misplaced commas.",
    skill: "Correcting comma splices and run-ons",
    tip: "If both parts could stand alone as sentences, use a semicolon or period - not just a comma."
  },
  {
    id: "sec-verb-1",
    category: "standard-english-conventions",
    subcategory: "Subject-Verb Agreement",
    difficulty: "medium",
    question: "Which sentence demonstrates correct subject-verb agreement?",
    options: [
      "The group of students are taking the exam tomorrow.",
      "The group of students is taking the exam tomorrow.",
      "The group of students were taking the exam tomorrow.",
      "The group of students be taking the exam tomorrow."
    ],
    correctAnswer: 1,
    explanation: "The subject is 'group' (singular), not 'students.' A collective noun like 'group' takes a singular verb when acting as one unit. Therefore, 'is taking' is correct. Don't be distracted by the plural noun 'students' in the prepositional phrase.",
    skill: "Subject-verb agreement with collective nouns",
    tip: "Find the true subject. Ignore prepositional phrases like 'of students' when determining the verb."
  },
  {
    id: "sec-pron-1",
    category: "standard-english-conventions",
    subcategory: "Pronoun Agreement",
    difficulty: "medium",
    question: "Which sentence uses pronouns correctly?",
    options: [
      "Each of the players brought their own equipment.",
      "Each of the players brought his or her own equipment.",
      "Each of the players brought its own equipment.",
      "Each of the players brought our own equipment."
    ],
    correctAnswer: 1,
    explanation: "'Each' is singular and requires a singular pronoun. 'His or her' correctly agrees with 'each.' Note: While 'their' is increasingly accepted in informal usage for singular antecedents, the SAT traditionally tests formal agreement where 'each' takes 'his or her.'",
    skill: "Pronoun-antecedent agreement",
    tip: "Words like 'each,' 'every,' 'everyone,' and 'nobody' are singular and need singular pronouns."
  },

  // More Craft and Structure questions for comprehensive practice
  {
    id: "cs-wic-6",
    category: "craft-and-structure",
    subcategory: "Words in Context",
    difficulty: "medium",
    passage: "The artist's latest exhibition challenged conventional aesthetics, presenting works that many viewers found provocative rather than beautiful. Critics were divided, with some praising her bold departure from tradition while others dismissed the pieces as gratuitously shocking.",
    question: "As used in the passage, 'provocative' most nearly means",
    options: [
      "beautiful and appealing",
      "intentionally stimulating strong reactions",
      "poorly executed",
      "traditional and familiar"
    ],
    correctAnswer: 1,
    explanation: "'Provocative' means intended to provoke or stimulate strong reactions or emotions. The context shows the work 'challenged conventional aesthetics' and caused divided reactions - some saw it as 'bold,' others as 'shocking.' This confirms the word refers to something that intentionally creates strong responses.",
    skill: "Understanding evaluative vocabulary",
    tip: "Look at the range of reactions described. 'Provocative' art creates strong responses, whether positive or negative."
  },
  {
    id: "cs-wic-7",
    category: "craft-and-structure",
    subcategory: "Words in Context",
    difficulty: "hard",
    passage: "The senator's rhetoric became increasingly strident as the debate progressed, her voice rising and her accusations growing sharper. While her supporters cheered her passionate advocacy, neutral observers worried that her aggressive tone might alienate undecided voters.",
    question: "As used in the passage, 'strident' most nearly means",
    options: [
      "quiet and subdued",
      "harsh and forcefully assertive",
      "logical and well-reasoned",
      "humorous and lighthearted"
    ],
    correctAnswer: 1,
    explanation: "'Strident' describes something harsh, grating, or aggressively assertive. Context clues include 'voice rising,' 'accusations growing sharper,' and 'aggressive tone.' These all indicate forceful, harsh communication rather than calm or reasoned discourse.",
    skill: "Using multiple context clues",
    tip: "Multiple clues point the same direction: 'rising voice,' 'sharper accusations,' and 'aggressive tone' all suggest harshness."
  },

  // More Problem Solving and Data Analysis
  {
    id: "psda-ratio-4",
    category: "problem-solving-data-analysis",
    subcategory: "Ratios and Proportions",
    difficulty: "hard",
    question: "A car travels 280 miles on 8 gallons of gas. At this rate, how many gallons would be needed to travel 455 miles?",
    options: ["11 gallons", "13 gallons", "15 gallons", "17 gallons"],
    correctAnswer: 1,
    explanation: "First find the rate: 280 miles ÷ 8 gallons = 35 miles per gallon. Then calculate gallons needed: 455 miles ÷ 35 mpg = 13 gallons. Alternatively, set up proportion: 280/8 = 455/x, cross multiply: 280x = 3640, x = 13.",
    skill: "Using unit rates in real-world problems",
    tip: "Finding the unit rate first (miles per gallon) makes the calculation straightforward."
  },
  {
    id: "psda-pct-4",
    category: "problem-solving-data-analysis",
    subcategory: "Percentages",
    difficulty: "hard",
    question: "After a 15% discount, a laptop costs $680. What was the original price?",
    options: ["$578", "$750", "$782", "$800"],
    correctAnswer: 3,
    explanation: "If the discount is 15%, the customer pays 85% of the original price. Let x = original price. 0.85x = $680. x = $680 ÷ 0.85 = $800. Check: 15% of $800 = $120 discount. $800 - $120 = $680.",
    skill: "Working backwards from a percentage",
    tip: "If you know the final price after a discount, divide by the percentage paid (not the discount percentage)."
  },
  {
    id: "psda-stat-4",
    category: "problem-solving-data-analysis",
    subcategory: "Statistics",
    difficulty: "medium",
    question: "A data set has the following values: 12, 15, 18, 22, 23. If the value 22 is changed to 42, which measure of central tendency will change the most?",
    options: ["Mean", "Median", "Mode", "Range is not a measure of central tendency"],
    correctAnswer: 0,
    explanation: "Original mean: (12+15+18+22+23)/5 = 90/5 = 18. New mean: (12+15+18+42+23)/5 = 110/5 = 22. The mean increased by 4. The median stays at 18 (middle value unchanged). There's no mode in either case. The mean is most affected by extreme values.",
    skill: "Understanding how measures respond to changes",
    tip: "The mean is sensitive to outliers/extreme values. The median is resistant to outliers."
  },
  {
    id: "psda-prob-3",
    category: "problem-solving-data-analysis",
    subcategory: "Probability",
    difficulty: "hard",
    question: "In a class of 30 students, 18 play basketball, 15 play soccer, and 8 play both sports. What is the probability that a randomly selected student plays basketball OR soccer (or both)?",
    options: ["11/30", "25/30", "33/30", "41/30"],
    correctAnswer: 1,
    explanation: "Use the inclusion-exclusion principle: P(A or B) = P(A) + P(B) - P(A and B). Students playing at least one sport = 18 + 15 - 8 = 25. (We subtract 8 because those students were counted twice.) Probability = 25/30 = 5/6.",
    skill: "Using the addition rule for probability",
    tip: "For 'or' probability with overlap, add the individual probabilities and subtract the overlap to avoid double-counting."
  },

  // Additional Reading & Writing questions
  {
    id: "ii-inf-1",
    category: "information-and-ideas",
    subcategory: "Inferences",
    difficulty: "hard",
    passage: "Dr. Martinez's research team spent three years studying communication patterns among dolphins in the Pacific. They documented over 2,000 distinct vocalizations and noticed that dolphins from different pods used slightly different 'dialects.' When dolphins from separate pods encountered each other, they often appeared to adjust their vocalizations, seemingly to facilitate communication.",
    question: "Based on the passage, which inference is most strongly supported?",
    options: [
      "Dolphins are more intelligent than other marine mammals",
      "Dolphins may have the ability to adapt their communication to different social contexts",
      "Dolphin communication is identical to human language",
      "Dr. Martinez's research methods were flawed"
    ],
    correctAnswer: 1,
    explanation: "The passage describes dolphins adjusting their vocalizations when meeting dolphins from other pods with different 'dialects.' This directly supports the inference that dolphins can adapt their communication based on social context. The passage doesn't compare intelligence to other mammals, claim human-like language, or suggest flawed methods.",
    skill: "Drawing logical inferences from evidence",
    tip: "Strong inferences stay close to the text. Avoid answers that go too far beyond what's stated."
  },
  {
    id: "eoi-synth-1",
    category: "expression-of-ideas",
    subcategory: "Rhetorical Synthesis",
    difficulty: "medium",
    passage: "Notes for a presentation about renewable energy:\n- Solar panel costs have dropped 89% since 2010\n- Wind power is now cheaper than coal in most markets\n- Renewable energy employs 12 million people globally\n- Energy storage technology is rapidly improving",
    question: "A student wants to emphasize the economic benefits of renewable energy. Which choice most effectively uses the notes to accomplish this goal?",
    options: [
      "Renewable energy is good for the environment and reduces pollution.",
      "With solar costs down 89% and wind power cheaper than coal, plus 12 million jobs created globally, renewable energy offers significant economic advantages.",
      "Energy storage technology is rapidly improving, which will help renewable energy.",
      "Solar panels and wind turbines are common sights in many countries today."
    ],
    correctAnswer: 1,
    explanation: "The question asks for economic benefits. Option B directly addresses economics: cost reduction (89% drop, cheaper than coal) and employment (12 million jobs). Options A (environment), C (technology), and D (prevalence) don't focus on economic benefits.",
    skill: "Synthesizing information for a specific purpose",
    tip: "Match your answer to the specific goal stated in the question. Here, focus on economic information."
  },
  {
    id: "sec-mod-1",
    category: "standard-english-conventions",
    subcategory: "Modifiers",
    difficulty: "hard",
    question: "Which sentence correctly places the modifying phrase?",
    options: [
      "Walking through the museum, the paintings impressed the visitors.",
      "The paintings impressed the visitors walking through the museum.",
      "Walking through the museum, the visitors were impressed by the paintings.",
      "The visitors walking through the museum, the paintings impressed them."
    ],
    correctAnswer: 2,
    explanation: "A modifying phrase should be placed next to what it modifies. 'Walking through the museum' describes the visitors, not the paintings. In option C, 'Walking through the museum' is correctly placed next to 'the visitors.' Option A creates a dangling modifier (paintings can't walk).",
    skill: "Correcting misplaced and dangling modifiers",
    tip: "Ask: Who or what is doing the action in the modifying phrase? Place the phrase next to that noun."
  }
];

export function getQuestionsByCategory(categoryId: string): Question[] {
  return questions.filter(q => q.category === categoryId);
}

export function getQuestionsByDifficulty(difficulty: 'easy' | 'medium' | 'hard'): Question[] {
  return questions.filter(q => q.difficulty === difficulty);
}

export function shuffleQuestions(qs: Question[]): Question[] {
  const shuffled = [...qs];
  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
  }
  return shuffled;
}
