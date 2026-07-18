SELECT 
  MIN(replacement_cost),
  MAX(replacement_cost),
  ROUND(AVG(replacement_cost), 2),
  SUM(replacement_cost)
FROM film

-- ===================================  

SELECT 
  staff_id,
  SUM(amount),
  COUNT(*)
FROM payment
WHERE amount != 0
GROUP BY staff_id
ORDER BY SUM(amount) DESC

-- =================================== 

SELECT DISTINCT
    customer_id,
    email,
    country
FROM purchases
WHERE
    purchase_date >= CURRENT_DATE - INTERVAL '30 days'
    AND country IN ('Germany', 'France')
    AND email LIKE '%@gmail.com';

-- =================================== 

SELECT 
  customer_id,
  DATE(payment_date),
  ROUND(AVG(amount), 2) as average_amount,
  COUNT(*)
FROM payment 
WHERE DATE(payment_date) IN('2020-04-28', '2020-04-29', '2020-04-30')
GROUP BY customer_id, DATE(payment_date)
HAVING COUNT(*) > 1
ORDER BY 3


