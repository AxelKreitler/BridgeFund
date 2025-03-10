INSERT INTO
  `building` (`name`)
VALUES
  ('Shopping Mall Parking');
  
INSERT INTO
  `building_parking_price` (`building_id`, `parking_type`, `price`)
VALUES
  (1, 'RESIDENT', 0);
INSERT INTO
  `building_parking_price` (`building_id`, `parking_type`, `price`)
VALUES
  (1, 'CARS', 5);
INSERT INTO
  `building_parking_price` (`building_id`, `parking_type`, `price`)
VALUES
  (1, 'MOTORCYCLE', 3);
  
INSERT INTO
  `building_floor` (`building_id`, `floor_number`)
VALUES
  (1, 1);
INSERT INTO
  `building_floor` (`building_id`, `floor_number`)
VALUES
  (1, 2);
  
INSERT INTO
  `building_floor_space` (`building_floor_id`, `parking_type`, `spaces`)
VALUES
  (1, 'RESIDENT', 50);
INSERT INTO
  `building_floor_space` (`building_floor_id`, `parking_type`, `spaces`)
VALUES
  (1, 'CARS', 25);
INSERT INTO
  `building_floor_space` (`building_floor_id`, `parking_type`, `spaces`)
VALUES
  (2, 'CARS', 55);
INSERT INTO
  `building_floor_space` (`building_floor_id`, `parking_type`, `spaces`)
VALUES
  (2, 'MOTORCYCLE', 20);