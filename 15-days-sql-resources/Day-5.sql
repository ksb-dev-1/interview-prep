SELECT 
  product_name,
  SUM(quantity_sold * price_per_unit) AS total_revenue
FROM sales
GROUP BY product_name
ORDER BY total_revenue DESC 
LIMIT 1

-- ===================================

SELECT 
  film_id,
  ROUND(((rental_rate / replacement_cost) * 100), 2) AS percentage
FROM film
WHERE ((rental_rate / replacement_cost) * 100) < 4
ORDER BY percentage ASC;

-- ===================================

SELECT 
 order_id,
 product_id,
 quantity,
 unit_price,
 CASE 
   WHEN quantity > 1 THEN (quantity * unit_price * 0.90) + shipping_fee
   ELSE (quantity * unit_price) + shipping_fee
 END AS total_price  
FROM sales_orders;

-- ===================================

SELECT
    COUNT(*) AS total_tickets,
    CASE
      WHEN total_amount < 20000 THEN 'low price ticket'
      WHEN total_amount < 150000 THEN 'mid price ticket'
      ELSE 'high price ticket'
    END AS ticket_price
FROM bookings
GROUP BY ticket_price
ORDER BY total_tickets DESC;

-- ===================================

SELECT 
  COUNT(*) AS flights,
  CASE
    WHEN EXTRACT(month from scheduled_departure) IN (12, 01, 02) THEN 'Winter'
    WHEN EXTRACT(month from scheduled_departure) IN (03, 04, 05) THEN 'Spring'
    WHEN EXTRACT(month from scheduled_departure) IN (06, 07, 08) THEN 'Summer'
    WHEN EXTRACT(month from scheduled_departure) IN (09, 10, 11) THEN 'Fall'
  END AS season
FROM flights  
GROUP BY season;

-- Alternate approach
SELECT 
COUNT(*) as flights,
  CASE
    WHEN EXTRACT(month from scheduled_departure) IN (12,1,2) THEN 'Winter'
    WHEN EXTRACT (month from scheduled_departure) <= 5 THEN 'Spring'
    WHEN EXTRACT (month from scheduled_departure) <= 8 THEN 'Summer'
  ELSE 'Fall' 
END as season
FROM flights
GROUP BY season

-- ===================================

-- Recommended
SELECT
    title,
    CASE
      WHEN rating IN ('PG', 'PG-13') OR length > 210 THEN 'Great rating or long (tier 1)'
      WHEN description LIKE '%Drama%' AND length > 90 THEN 'Long drama (tier 2)'
      WHEN description LIKE '%Drama%' THEN 'Short drama (tier 3)'
      WHEN rental_rate < 1 THEN 'Very cheap (tier 4)'
    END AS category
FROM film
WHERE
    rating IN ('PG', 'PG-13')
    OR length > 210
    OR (description LIKE '%Drama%' AND length > 90)
    OR (description LIKE '%Drama%' AND length < 90)
    OR rental_rate < 1;

 -- Alternate approach
 SELECT
    title,
    CASE
        WHEN rating IN ('PG', 'PG-13') OR length > 210 THEN 'Great rating or long (tier 1)'
        WHEN description LIKE '%Drama%' AND length > 90 THEN 'Long drama (tier 2)'
        WHEN description LIKE '%Drama%' AND length < 90 THEN 'Short drama (tier 3)'
        WHEN rental_rate < 1 THEN 'Very cheap (tier 4)'
    END AS category
FROM film
WHERE
  CASE
  WHEN rating IN ('PG', 'PG-13') OR length > 210 THEN 'Great rating or long (tier 1)'
  WHEN description LIKE '%Drama%' AND length > 90 THEN 'Long drama (tier 2)'
  WHEN description LIKE '%Drama%' AND length < 90 THEN 'Short drama (tier 3)'
  WHEN rental_rate < 1 THEN 'Very cheap (tier 4)'
  END IS NOT NULL;     

-- ===================================

SELECT
    SUM(
      CASE 
        WHEN rating = 'G' THEN 1 
        ELSE 0 
      END
    ) AS "G",

    SUM(
      CASE 
        WHEN rating = 'PG' THEN 1 
        ELSE 0 
      END
    ) AS "PG",

    SUM(
      CASE 
        WHEN rating = 'PG-13' THEN 1 
        ELSE 0 
      END
    ) AS "PG-13",

    SUM(
      CASE 
        WHEN rating = 'R' THEN 1 
        ELSE 0 
      END
    ) AS "R",

    SUM(
      CASE 
        WHEN rating = 'NC-17' THEN 1 
        ELSE 0 
      END
    ) AS "NC-17"
FROM film;

-- ===================================

SELECT
    SUM(
        CASE
            WHEN category = 'Income' THEN amount
            ELSE 0
        END
    ) AS TotalIncome,

    SUM(
        CASE
            WHEN category = 'Expense' THEN amount
            ELSE 0
        END
    ) AS TotalExpenses,

    SUM(
        CASE
            WHEN category = 'Income' THEN amount
            ELSE 0
        END
    ) -
    SUM(
        CASE
            WHEN category = 'Expense' THEN amount
            ELSE 0
        END
    ) AS NetIncome
FROM transactions; 

-- ===================================

SELECT 
    transaction_id,
    account_id,
    transaction_type,
    amount,
    COALESCE (description, 'Not Provided') AS description
FROM transactions
ORDER BY transaction_id;

-- ===================================

SELECT
    rental_date,
  COALESCE(CAST(return_date AS VARCHAR), 'Not Returned') AS return_date
FROM rental
WHERE return_date IS NULL;

-- ===================================

SELECT
    CAST(REPLACE(flight_no, 'PG', '') AS INT)
FROM flights;

