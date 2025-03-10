CREATE TABLE `building`
(
  	`id` INT(11) PRIMARY KEY NOT NULL AUTO_INCREMENT,
    `name` VARCHAR(255) NOT NULL
);

CREATE TABLE `building_floor`
(
  	`id` INT(11) PRIMARY KEY NOT NULL AUTO_INCREMENT,
    `building_id` INT(11) NOT NULL,
    `floor_number` INT(11) NOT NULL
);

ALTER TABLE `building_floor` ADD FOREIGN KEY (`building_id`) REFERENCES `building` (`id`);
CREATE UNIQUE INDEX `building_floor_number_index` ON `building_floor` (`building_id`, `floor_number`);

CREATE TABLE `building_floor_space`
(
  	`id` INT(11) PRIMARY KEY NOT NULL AUTO_INCREMENT,
    `building_floor_id` INT(11) NOT NULL,
    `parking_type` ENUM ('RESIDENT', 'CARS', 'MOTORCYCLE') NOT NULL,
    `spaces` INT(11) NOT NULL DEFAULT 0
);

ALTER TABLE `building_floor_space` ADD FOREIGN KEY (`building_floor_id`) REFERENCES `building_floor` (`id`);
CREATE UNIQUE INDEX `building_floor_space_type__index` ON `building_floor_space` (`building_floor_id`, `parking_type`);


CREATE TABLE `building_parking_price`
(
  	`id` INT(11) PRIMARY KEY NOT NULL AUTO_INCREMENT,
    `building_id` INT(11) NOT NULL,
    `parking_type` ENUM ('RESIDENT', 'CARS', 'MOTORCYCLE') NOT NULL,
    `price` INT(11) NOT NULL
);

ALTER TABLE `building_parking_price` ADD FOREIGN KEY (`building_id`) REFERENCES `building` (`id`);
CREATE UNIQUE INDEX `building_parking_type_price_index` ON `building_parking_price` (`building_id`, `parking_type`);

CREATE TABLE `building_spaces`
(
  	`id` INT(11) PRIMARY KEY NOT NULL AUTO_INCREMENT,
    `building_id` INT(11) NOT NULL,
    `session` VARCHAR(36) NOT NULL default (UUID()),
    `parking_type` ENUM ('RESIDENT', 'CARS', 'MOTORCYCLE') NOT NULL,
    `started_at` datetime NOT NULL DEFAULT current_timestamp,
    `ended_at` datetime DEFAULT NULL
);

ALTER TABLE `building_spaces` ADD FOREIGN KEY (`building_id`) REFERENCES `building` (`id`);
