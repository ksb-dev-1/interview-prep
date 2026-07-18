SELECT first_name, last_name, email
FROM customer;

-- ===================================

SELECT first_name, last_name
FROM customer
ORDER BY first_name DESC, last_name DESC;

-- ===================================

SELECT first_name, last_name
FROM customer
ORDER BY 1 DESC, 2 DESC;

-- ===================================

SELECT DISTINCT amount
FROM payment
ORDER BY amount DESC;

-- ===================================

SELECT DISTINCT amount
FROM payment
ORDER BY amount DESC
LIMIT 5
OFFSET 0;

-- ===================================

SELECT COUNT(DISTINCT amount)
FROM payment

