---
layout: post
title: my Fall 2020 classes
categories: reflection
---

{{ page.title }}
================

<p class="meta">20 Dec 2020 - Michigan</p>

### *Data Structures & Algorithms*
This class is very well-known for being one of the most important CS classes and one of the hardest ones. The content was definitely challenging, but I think all the hype prepared my mindset. In addition, my Summer internship also let me stay in the coding momentum over break.

#### Lecture/Lab Content
For the first half, we learned about stacks & queues (and deques), complexity analysis, measuring performance & analysis, recursion, arrays & containers, STL, heaps & heapsort, ordered and sorted containers (STL) & sets (union-find and path compression), elementary sorts (bubble, selection, and insertion sort), quicksort, merge sort, and strings & sequences.

For the second half, we learned about hash functions, hash tables and collision resolution, trees (+ tree traversals), graphs, MST (Prim's & Kruskal's algorithms), algorithm families, backtracking & branch-and-bound (+ TSP), dynamic programming (+ knapsack problem), and shortest-path algorithm (Dijkstra's algorithm).

#### Projects
**Project 1: Letterman**

I found this project to be quite straightforward. We had to process a bunch of words to figure out if a specified start word can reach a specified end word by connecting intermediate words. This connection happens if two words are the same if two letters swap, if one letter is inserted/deleted, etc.

We used *stacks* and *queues* to experiment with *depth-first-search* and *breath-first-search*.

It was also one of my first experiences trying to optimize time and memory complexities. For both this project and the rest, I found Piazza to be a helpful resource for optimization tips.

**Project 2: Mine all Mine**

This project was split into two parts: Part A and Part B. Part A was more difficult to comprehend. It was about mining on the map and encountering explosions. And it revolved around *recursion*, multiple *priority queues*, and a *two-dimensional vector* map. It was about mining on the map and encountering explosions. However, despite some messy code, I managed to finish this part pretty fast. 

Part B was implementing three different types of priority queues: unsorted, sorted, and binary. Unsorted and sorted PQs were confusing for me, as I didn't know how to start, but the staff resources helped a lot, and everything became much more straightforward. With the first two done, Binary PQ wasn't bad, though indexing one off was something I had to be careful of.

**Project 3: SillyQL**

This SQL-esque sounding project simulates a database. We can create/remove tables, insert/delete/print rows of data, and join tables together. 

A complicated part was to generate an index on the column, which also affected implementations of other functions. Here, we can generate an *binary search tree* or *hash table* on a column of data to speed things up. This part was challenging for me, because it took me awhile to understand how the index affected other functions.

I had steady progress on the project over some days, and spent a big chunk of time on optimizing, especially with the aforementioned index.

**Project 4: Among Us**

The last project is probably one of the easiest out of the four. I finished most of it in one sitting + a few more optimizations later on. Though when I mean "one sitting", I mean from afternoon to 4am the next morning. It's difficult to stop the coding momentum when it comes.

(Side note: sleeping at consistent times is one of my biggest challenges, so I need to work on that more)

The Among Us project is split into three parts. Part A was Imposter. We had to implement *Prim's algorithm* on a *two-dimensional vector* map to determine the MST between rooms (or vertices). Part B was Fast Ghost. We had to use *heuristics* to calculate a fast solution to find a relatively optimal Hamiltonian path between all the rooms. I used nearest insertion with arbitrary insertion.

Part C was Optimal Ghost. We implemented *branch-and-bound* to find the optimal Hamiltonian path between all the rooms. We had to use the heuristic from Part B to find an initial solution as the *upper bound* and Prim's algorithm from Part A to calculate the estimated *lower bound* for *pruning*.

I found this course to be important in teaching me all the fundamental data structures and algorithms. The projects and lab assignments were very informative.

### *Introduction to Statistics and Data Analysis*

At the start, I learned about summary measures, probabilities, linear regression, and p-values. Then, I learned about concepts and calculations of confidence intervals and hypothesis testing for proportions, differences in proportions, sample means, difference in sample means, and paired data. I also learned about simple and multiple regression models.

R was an interesting and useful language to learn about. It focuses on analyzing data, such as calculating p-values for hypothesis testing. And it's super fast than otherwise manually deriving from formulas and equations, especially if one is dealing with a large amount of data.

Overall, this class let me have a clearer idea on what statistical values means, the complications made with context, and the necessity of statistics as evidence.

### *Introduction to Cognitive Psychology*

For the first half of the course, we learned about history & methodology of cognitive psychology, how to study & desirable difficulties, perception (visual system, pattern recognition from bottom-up and top-down, attention, visual imagery, and visuospatial processing.

For the second half, we learned about different types of memory (working, explicit/implicit, long-term memory), categorization, language comprehension/acquisition, skill acquisition, problem-solving, and future areas of study.

I found many of the lectures to be interesting to connect dots with computer science, especially perception, memory and categorization.

### *Introduction to Psychopathology*
This class was more difficult for me, specifically the exams. Because classes were synchronous and online, the exams were based upon the textbook to accommodate time zone differences. To prevent cheating, the exams had a short time limit and you could not go back once you answered a question.

However, for me, I learn best not by reading the textbook, even though the professor said that that was the most effective study technique. And my preferred test-taking strategy relies heavily on pacing so it does not work well with time pressure and irreversible answering.

One thing I will do moving forward is to space out learning from material. Sometimes I underestimated how much material the textbook had, so I didn't take enough time to pace my learning and fully absorb the knowledge.



### **what's next?**
The courses that I plan for next semester include: Intro to Computer Organization, Calculus III, Intro to Behavioral Psychology, and Contemporary Moral Issues.

Next semester I plan to be more consistent and disciplined in my study and work schedule.
