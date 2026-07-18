SELECT
  review_id,
  review_text,
  LENGTH(review_text) AS review_length
FROM
  customer_reviews
WHERE
  product_id = 101
  AND LOWER(review_text) LIKE '%great%'
ORDER BY
  review_text ASC 

-- =================================== 

SELECT
  LOWER(first_name),
  LOWER(last_name),
  LOWER(email)
FROM
  customer
WHERE
  LENGTH(first_name) > 10
  OR LENGTH(last_name) > 10 

-- ===================================

SELECT
  LEFT(RIGHT(email, 4), 1)
FROM
  customer 

-- ===================================

SELECT
  (name || ' - ' || category || ': ' || '$' || price) AS product_summary
FROM
  products
ORDER BY
  name ASC;

-- ===================================

SELECT
  LEFT(email, 1) || '***' || RIGHT(email, 19) AS anonymized_email
FROM
  customer;

-- ===================================

SELECT
  last_name || ', ' || LEFT(email, POSITION('.' IN email) - 1)
FROM
  customer;

-- ===================================

SELECT
  LEFT(email, 1) || '***.' || SUBSTRING(
    email
    from
      POSITION('.' IN email) + 1 for 1
  ) || '***' || SUBSTRING(
    email
    from
      POSITION('@' IN email)
  )
FROM
  customer;

-- ===================================

SELECT
  '***' || SUBSTRING(
    email
    from
      POSITION('.' IN email) - 1 for 3
  ) || '***' || SUBSTRING(
    email
    from
      POSITION('@' IN email)
  )
FROM
  customer;

-- ===================================

SELECT
  EXTRACT(month from payment_date) AS month,
  SUM(amount) AS total_payment_amount
FROM
  payment
GROUP BY
  month
ORDER BY
  total_payment_amount DESC;

-- ===================================

SELECT
  EXTRACT(dow from payment_date) AS day_of_week,
  SUM(amount) AS total_payment_amount
FROM
  payment
GROUP BY
  day_of_week
ORDER BY
  total_payment_amount DESC;

-- ===================================

SELECT
  EXTRACT(week from payment_date) AS week,
  customer_id,
  SUM(amount) AS total_payment_amount
FROM
  payment
GROUP BY
  week,
  customer_id
ORDER BY
  total_payment_amount DESC;

-- ===================================

SELECT
  SUM(amount) AS total_amount,
  TO_CHAR(payment_date, 'Dy, DD/MM/YYYY') AS "day"
FROM
  payment
GROUP BY
  "day"
ORDER BY
  total_amount DESC;

-- ===================================

SELECT
  SUM(amount) AS total_amount,
  TO_CHAR(payment_date, 'Mon, YYYY') AS month_year
FROM
  payment
GROUP BY
  month_year
ORDER BY
  total_amount DESC;

-- ===================================

SELECT
  SUM(amount) AS total_amount,
  TO_CHAR(payment_date, 'Dy, HH:MI') AS day_time
FROM
  payment
GROUP BY
  day_time
ORDER BY
  total_amount DESC;

-- ===================================

SELECT
  customer_id,
  return_date - rental_date AS rental_duration
FROM
  rental
WHERE
  customer_id = 35;

-- ===================================

SELECT
  customer_id,
  AVG(return_date - rental_date) AS avg_rental_duration
FROM
  rental
GROUP BY
  customer_id
ORDER BY
  avg_rental_duration DESC