export const createCafe = `CREATE TABLE cafe( 
    id BINARY(16) default (UUID_TO_BIN(UUID())) NOT NULL, 
    name VARCHAR(255) NOT NULL, 
    description VARCHAR(500) NOT NULL,
    logo BLOB,
    location VARCHAR(255) NOT NULL,
    PRIMARY KEY (id))`;

export const createEmployee = `CREATE TABLE employee (
    id VARCHAR(10) PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    email_address VARCHAR(255) NOT NULL,
    phone_number CHAR(8),
    gender VARCHAR(10) NOT NULL)`;

export const createEmployeeCafe = `CREATE TABLE employee_cafe (
    employee_id VARCHAR(10) REFERENCES Employee(id) ON DELETE CASCADE,
    cafe_id BINARY(16) REFERENCES Cafe(id) ON DELETE CASCADE,
    start_date DATE DEFAULT (CURRENT_DATE) ,
    PRIMARY KEY (employee_id),
    CONSTRAINT emp_cafe_unq Unique(cafe_id, employee_id))`;

//---------------------
// Cafe SQLs
export const insertCafeSQL =
  "INSERT INTO cafe (name, description, location) VALUES ?";
export const dropCafeSQL = "DROP TABLE IF EXISTS cafe;";
export const selectAllCafeIDs = "SELECT BIN_TO_UUID(id) as uuid_id FROM cafe;";
//---------------------
// Employee SQLs

export const insertEmployeeSQL =
  "INSERT INTO employee (id, name, email_address, phone_number, gender) VALUES ?";
export const dropEmployeeSQL = "DROP TABLE IF EXISTS employee;";

//---------------------
// Employee Cafe SQLs
export const insertEmployeeCafeSQL =
  "INSERT INTO employee_cafe (employee_id, start_date) VALUES ?";
export const dropEmployeeCafeSQL = "DROP TABLE IF EXISTS employee_cafe";
export const updateTop3EmployeeCafe = `
UPDATE employee_cafe
SET cafe_id = UUID_TO_BIN(?)
LIMIT 3;
`;
export const updateRestEmployeeCafe = `
UPDATE employee_cafe
SET cafe_id = UUID_TO_BIN(?)
WHERE cafe_id IS NULL;`;

//---------------------
