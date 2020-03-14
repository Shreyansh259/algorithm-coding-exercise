const getDepartmentData = () => {
  return {
    name: "ADP",
    budget: 15000000000,
    departments: [
      {
        name: "Lifion",
        budget: 100000000,
        departments: [
          {
            name: "Platform",
            budget: 30000000,
            departments: [
              {
                name: "Metadata",
                budget: 10000000
              },
              {
                name: "Persistence",
                budget: 5000000
              }
            ]
          },
          {
            name: "Product",
            budget: "30000000",
            departments: [
              {
                name: "Payroll",
                budget: 20000000
              }
            ]
          },
          {
            name: "Facilities",
            budget: 30000000
          }
        ]
      },
      {
        name: "Redbox",
        budget: 20000000,
        departments: [
          {
            name: "Frontend",
            budget: 5000000
          },
          {
            name: "Backend",
            budget: 10000000
          }
        ]
      },
      {
        name: "WFN",
        budget: 35000000
      }
    ]
  };
};

class DepartmentInfo {
  constructor(name, dept) {
    this.name = name;
    this.subDepartment = dept;
  }
}

const printDepartmentReport = () => {
  const departmentDetails = getDepartmentData();
  console.log(departmentDetails.name + "-" + departmentDetails.budget);
  let node = [];
  let parent = departmentDetails.name;
  node.push(new DepartmentInfo(parent, departmentDetails.departments));
  while (node.length > 0) {
    let current = node.shift();
    current.subDepartment.forEach(dept => {
      let name = current.name + "-" + dept.name;
      console.log(name + "-" + dept.budget);
      if (dept.departments) {
        node.push(new DepartmentInfo(name, dept.departments));
      }
    });
  }
};
