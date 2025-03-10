TYPE=TRIGGERS
triggers='CREATE DEFINER=`root`@`%` TRIGGER before_insert_building_spaces\n  BEFORE INSERT ON building_spaces\n  FOR EACH ROW\n  SET new.session = UUID()'
sql_modes=1436549152
definers='root@%'
client_cs_names='utf8mb4'
connection_cl_names='utf8mb4_general_ci'
db_cl_names='latin1_swedish_ci'
created=174164795405
