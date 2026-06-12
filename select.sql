-- 🟢 Level 1 — Basic SELECT, WHERE, ORDER BY, LIMIT

-- 1. Get all users from Bangalore, sorted by created_at newest first.

SELECT * 
FROM users 
WHERE city = 'Bangalore'
ORDER BY created_at DESC

-- 2. Get top 5 highest paying jobs.

SELECT *
FROM jobs
ORDER BY salary DESC
LIMIT 5	

-- 3. Get distinct cities where users are located.

SELECT DISTINCT city
FROM users

-- 4. Get jobs posted in the last 30 days, ordered by salary descending.

SELECT *
FROM jobs
WHERE posted_at >= CURDATE() - INTERVAL 30 DAY
ORDER BY salary DESC;

-- 5. Fetch 10 most recently applied applications.

SELECT *
FROM applications
ORDER BY applied_at DESC
LIMIT 10;

-- 🟡 Level 2 — GROUP BY & HAVING

-- 6. Count how many users are there in each city.
SELECT city, COUNT(*) as user_count
FROM users
GROUP BY city

-- 7. Find cities having more than 5 users.
SELECT city, COUNT(*) as user_count
FROM users
GROUP BY city
HAVING COUNT(id) > 5

-- 8.Count how many applications each job has received.
SELECT job_id, COUNT(*) as application_count
FROM applications
GROUP BY job_id

-- 9.Find jobs that received more than 10 applications.
SELECT job_id, COUNT(*) AS application_count
FROM applications
GROUP BY job_id
HAVING COUNT(*) > 10

-- 10.Find companies that posted more than 3 jobs.
SELECT company_id, COUNT(*) AS job_count
FROM jobs
GROUP BY company_id
HAVING COUNT(*) > 3

-- 🟠 Level 3 — INNER JOIN

-- 11. Get all applications with user name and job title.

-- 12. Get all users who applied for "Frontend Developer" jobs.

-- 13. Get total applications per user (show user name + count).

-- 14. Get highest salary job each user applied to.

-- 15. Find users who were hired.

-- 🔵 Level 4 — LEFT JOIN / FULL OUTER JOIN

-- 16. List all users and how many jobs they applied to (include users with 0 applications).

-- 17. List all jobs and number of applications received (include jobs with 0 applications).

-- 18. Find users who never applied to any job.

-- 19. Find jobs that received no applications.

-- 20. Using FULL OUTER JOIN, list all users and jobs even if no relationship exists.

-- 🟣 Level 5 — CROSS JOIN

-- 21. Generate all possible combinations of users and jobs.

-- 22. Generate all combinations of companies and industries.

-- -- 🔴 Level 6 — UNION / INTERSECT / EXCEPT

-- 23. Get all users from Bangalore and Mumbai (use UNION).

-- 24. Find users who applied for job A and job B (use INTERSECT).

-- 25. Find users who applied but were never hired (use EXCEPT).

-- 26. Find jobs that were posted this year OR have salary > 15 LPA (use UNION).

-- ⚫ Level 7 — Advanced Combination (Interview Level)

-- 27. Find top 3 companies with highest number of hired candidates.(Must use JOIN + GROUP BY + ORDER BY + LIMIT)

-- 28. Find users who applied to more than 3 jobs but never got

-- ⚫ Level 7 — Advanced Combination (continued)

-- 28. Find users who applied to more than 3 jobs but were never hired.

-- 29. Find the top 5 users who applied to the highest total salary worth of jobs.

-- 30. Find companies that have posted jobs but received zero applications.

-- 31. Find users who applied to every job posted by a specific company (e.g., “Google”).

-- 32. Find the second highest salary job (without using LIMIT 1 OFFSET 1).

-- 33. For each city, find the user who applied to the maximum number of jobs.

-- 34. Find jobs where the number of hired candidates is greater than the average hired count across all jobs.

-- 35. Find users who applied only to jobs in Bangalore and nowhere else.

-- 36. Find companies whose average job salary is greater than the overall average salary.

-- 37. Find duplicate emails in the users table.

-- 38. Delete duplicate users but keep the latest created one.

-- 🔥 Level 9 — Extreme (System Design SQL Thinking)

-- 39. Return top 3 cities with the highest hiring rate.

-- 40. Find users who were hired in less than 7 days after applying.

-- 41. Find month-over-month growth in number of job postings.

-- 42. Find the company with the fastest hiring cycle (average days between posted_at and hired_at).

-- 43. Find users who applied to jobs with salary greater than the average salary of their city.

-- 🏆 Final Boss Question

-- 44. Design a query to detect suspicious behavior: Find users who applied to more than 50 jobs in 1 day.