SELECT properties.title, properties.cost_per_night, avg(property_reviews.rating) as average_property_rating
  FROM properties
  JOIN property_reviews ON properties.id = property_reviews.property_id
  WHERE properties.city LIKE '%ancouve%'
  GROUP BY properties.title, properties.cost_per_night
  HAVING avg(property_reviews.rating) >= 4
  ORDER BY cost_per_night
  LIMIT 10;