/* 
  Given a table name string and an object whose key value pairs represent column names and values for the columns
  return a SQL insert statement string
  Tip: string interpolation (using back ticks, the key to the left of num 1 key) make it easy to add variables into a string or to add quotations without needing to escape them.
  Bonus: after solving it, write a 2nd solution focusing on functional programming using built in methods
*/

const table = "users";
const insertData1 = { first_name: "John", last_name: "Doe" };
const expected1 =
  "INSERT INTO users (first_name, last_name) VALUES ('John', 'Doe');";

// Bonus:
const insertData2 = {
  first_name: "John",
  last_name: "Doe",
  age: 30,
  is_admin: false,
};
const expected2 =
  "INSERT INTO users (first_name, last_name, age, is_admin) VALUES ('John', 'Doe', 30, false);";
// Explanation: no quotes around the int or the bool, technically in SQL the bool would become a 0 or 1, but don't worry about that here.

const sqlInsertStatement = obj => {
    // create string from keys separated by ', '
    const keysStr = Object.keys(obj).join(', ');
    // create string from values separated by ', '
    // put single quotes around value if it's a string
    const valuesStr = Object.values(obj).map(val => typeof val === 'string' ? `'${val}'` : val).join(', ');
    
    // return string
    return `INSERT INTO users (${keysStr}) VALUES (${valuesStr});`;
}

console.log(sqlInsertStatement(insertData1));
console.log(sqlInsertStatement(insertData2));

