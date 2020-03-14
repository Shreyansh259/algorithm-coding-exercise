
# Print Department Report

You have given JSON object of departments with budget associated with it. Each department can have sub-departments as well. You need to print all departments associated with budget at same level.

e.g. 
Input:
```json
{
    name: "ADP",
    budget: 15B,
    departments: [{
    name: "Lifion",
    budget: 100000000,
    departments: [{
        name: "Platform",
        budget: 30000000,
        departments: [{
            name: "Metadata",
            budget: 10000000,
            }, {
            name: "Persistence",
            budget: 5000000,
        }]
    }, {
        name: "Product",
        budget: "30000000"
    }]
    }, {
    name: "Redbox",
    budget: 20000000,
    departments: [{
        name: "Frontend",
        budget: 5000000,
    }]
    }, {
    name: "WFN",
    budget: 35000000,
    }]
}
```

Output:
```json
 ADP - 15B
 ADP - Lifion - 100000000
 ADP - Redbox - 20000000
 ADP - WFN - 3500000
 ADP - Lifion - Platform - 3000000
 ADP - Lifion - Product - 3000000
 ADP - Redbox - Frontend - 5000000
 ADP - Lifion - Platform - Metadata - 10000000
 ADP - Lifion - Platform - Persistence - 5000000
 ```
 