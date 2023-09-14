export const createCafe = `CREATE TABLE cafe( 
    id VARCHAR(50)  NOT NULL, 
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
    gender VARCHAR(10) NOT NULL
)`;

export const createEmployeeCafe = `CREATE TABLE employee_cafe (
    employee_id VARCHAR(10) REFERENCES Employee(id),
    cafe_id VARCHAR(50) REFERENCES Cafe(id),
    start_date DATE NOT NULL,
    PRIMARY KEY (employee_id),
    CONSTRAINT emp_cafe_unq Unique(cafe_id, employee_id)    
)`;

//---------------------
// Cafe SQLs
export const insertCafeSQL =
  "INSERT INTO cafe (id, name, description, location) VALUES ?";
export const updateCafeSQL = "";

export const deleteCafeSQL = "DELETE FROM Employee WHERE ?";
export const dropCafeSQL = "DROP TABLE IF EXISTS cafe";

//---------------------
// Employee SQLs
export const insertEmployeeDQL =
  "INSERT INTO employee (id, name, email_address, phone_number, gender) VALUES ?";
export const updateEmployee =
  "UPDATE employee SET email_address = ? WHERE id = ? ";

export const deleteEmployeeSQL = "DELETE FROM employee WHERE ?";
export const dropEmployeeSQL = "DROP TABLE IF EXISTS employee";

//---------------------
// Employee Cafe SQLs
export const insertEmployeeCafeSQL =
  "INSERT INTO employee_cafe (employee_id, cafe_id, start_date) VALUES ?";
export const updateEmployeeCafeSQL =
  "UPDATE employee_cafe SET cafe_id = ? WHERE employee_id = ? ";

export const deleteEmployeeCafeSQL =
  "DELETE FROM employee_cafe WHERE employee_id = ?";
export const dropEmployeeCafeSQL = "DROP TABLE IF EXISTS employee_cafe";

//---------------------
