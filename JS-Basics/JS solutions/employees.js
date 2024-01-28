function generateEmployeeList(employeeNames) {
    const employees = {};
  
    const calculatePersonalNumber = (name) => name.length;
  
    employeeNames.forEach((name) => {
      employees[name] = calculatePersonalNumber(name);
    });
  
    for (const name in employees) {
      const personalNum = employees[name];
      console.log(`Name: ${name} -- Personal Number: ${personalNum}`);
    }
  }
  
  const employeeNames = [
    'Silas Butler',
    'Adnaan Buckley',
    'Juan Peterson',
    'Brendan Villarreal'
  ];
  
  generateEmployeeList(employeeNames);
  