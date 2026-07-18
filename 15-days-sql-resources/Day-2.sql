SELECT COUNT(*)
FROM payment
WHERE customer_id = 100;

-- ===================================

SELECT first_name, last_name
FROM customer
WHERE first_name = 'ERICA'

-- ===================================

SELECT COUNT(*)
FROM rental
WHERE return_date IS NULL;

-- ===================================

SELECT COUNT(*)
FROM rental
WHERE return_date IS NOT NULL;

-- ===================================

SELECT payment_id, amount
FROM payment
WHERE amount <= 2;

-- ===================================

SELECT *
FROM payment
WHERE 
  (customer_id = 322  OR customer_id = 346 OR customer_id = 354)
AND 
  (amount < 2 OR amount > 10)
ORDER BY customer_id ASC, amount DESC;

-- ===================================

SELECT COUNT(*)
FROM payment
WHERE 
  (payment_date BETWEEN '2020-01-26' AND '2020-01-27 23:59')
AND
  (amount BETWEEN 1.99 AND 3.99);

-- ===================================

SELECT COUNT(*)
FROM payment
WHERE 
  customer_id IN(12, 25, 67, 93, 124, 234)
AND
  amount IN(4.99, 7.99, 9.99)
AND
  payment_date BETWEEN '2020-01-01' AND '2020-01-31 23:59';

-- ===================================

SELECT COUNT(*)
FROM customer
WHERE 
  first_name LIKE '___'
AND
  (last_name LIKE '%X' OR last_name LIKE '%Y')  


-- ===================================  

SELECT COUNT(*)
FROM film
WHERE 
  description LIKE '%Documentary%' 

-- ===================================   

SELECT COUNT(*) AS no_of_movies
FROM film
WHERE 
  description LIKE '%Saga%'
AND
  (title LIKE 'A%' OR title LIKE '%R')

-- ===================================

SELECT *
FROM customer
WHERE 
  first_name LIKE '%ER%' AND first_name LIKE '_A%'
ORDER BY last_name DESC;  

-- ===================================

SELECT COUNT(*)
FROM payment
WHERE 
  (amount = 0 OR amount BETWEEN 3.99 AND 7.99)
AND
  payment_date BETWEEN '2020-05-01' AND '2020-05-02'

