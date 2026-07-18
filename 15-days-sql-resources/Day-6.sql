SELECT *
FROM aircrafts_data a
LEFT OUTER JOIN flights f
ON a.aircraft_code = f.aircraft_code
WHERE f.flight_id IS NULL;

-- ===================================

SELECT
    s.seat_no,
    COUNT(b.seat_no) AS bookings
FROM seats s
LEFT JOIN boarding_passes b
ON s.seat_no = b.seat_no
GROUP BY s.seat_no
ORDER BY bookings DESC;

-- ===================================

SELECT 
  s.seat_no
FROM seats s
LEFT JOIN boarding_passes b
ON s.seat_no = b.seat_no
WHERE b.seat_no IS NULL;

-- ===================================

SELECT
    RIGHT(s.seat_no, 1) AS seat_letter,
    COUNT(b.seat_no) AS bookings
FROM seats s
LEFT JOIN boarding_passes b
    ON s.seat_no = b.seat_no
GROUP BY RIGHT(s.seat_no, 1)
ORDER BY bookings DESC;

-- ===================================

SELECT 
  fare_conditions,
  COUNT(*) 
FROM seats s
LEFT JOIN boarding_passes bp
ON s.seat_no = bp.seat_no
GROUP BY fare_conditions
ORDER BY COUNT(*) DESC

-- =================================== For INNER JOIN table order doesn't matter

SELECT 
    first_name,
    last_name,
    phone,
    district    
FROM customer c
INNER JOIN address a
    ON c.address_id = a.address_id
WHERE district = 'Texas';

-- =================================== To preserve NULL move the condition into the ON clause

SELECT
    first_name,
    last_name,
    phone,
    district
FROM customer c
LEFT JOIN address a
    ON c.address_id = a.address_id
   AND a.district = 'Texas';

-- ===================================

SELECT
    a.address_id,
    a.address
FROM address a
LEFT JOIN customer c
    ON a.address_id = c.address_id
WHERE c.customer_id IS NULL
ORDER BY a.address_id ASC;

-- =================================== Join on multiple conditions

SELECT 
    seat_no,
    ROUND(AVG(amount), 2)
FROM boarding_passes b
LEFT JOIN ticket_flights tf
    ON b.ticket_no = tf.ticket_no
    AND b.flight_id = tf.flight_id
GROUP BY seat_no
ORDER BY 2 DESC;

-- ===================================
-- Whenever a question says "tickets sold", "orders placed", or "bookings made", start from the table that records 
-- those events (boarding_passes in this case). Then join to lookup tables (flights, seats) to retrieve additional 
-- information like fare category. This avoids counting items that were available but never sold.

SELECT
    s.fare_conditions AS "Fare Conditions",
    COUNT(*) AS "Count"
FROM boarding_passes bp
INNER JOIN flights f 
    ON bp.flight_id = f.flight_id
INNER JOIN seats s 
    ON f.aircraft_code = s.aircraft_code 
    AND bp.seat_no = s.seat_no
GROUP BY 1
ORDER BY 2 DESC;

-- ===================================

SELECT
    first_name,
    last_name,
    email,
    country
FROM customer cu
LEFT JOIN address a
    ON cu.address_id = a.address_id
LEFT JOIN city ci
    ON a.city_id = ci.city_id
LEFT JOIN country co
    ON ci.country_id = co.country_id
WHERE country = 'Brazil'

-- ===================================

-- ===================================

-- ===================================

-- ===================================

-- ===================================