'use strict';

const companies= [
    {name: "Company One", category: "Finance", start: 1981, end: 2004},
    {name: "Company Two", category: "Retail", start: 1992, end: 2008},
    {name: "Company Three", category: "Auto", start: 1999, end: 2007},
    {name: "Company Four", category: "Retail", start: 1989, end: 2010},
    {name: "Company Five", category: "Technology", start: 2009, end: 2014},
    {name: "Company Six", category: "Finance", start: 1987, end: 2010},
    {name: "Company Seven", category: "Auto", start: 1986, end: 1996},
    {name: "Company Eight", category: "Technology", start: 2011, end: 2016},
    {name: "Company Nine", category: "Retail", start: 1981, end: 1989}
  ];

  const ages = [33, 12, 20, 16, 5, 54, 21, 44, 61, 13, 15, 45, 25, 64, 32];

  function writeArray(msg, arr) {
    //Join Method
    let arrString = arr.join(' | ');
    document.write("<b>" + msg + ": </b>" + arrString + "<br><br>");
  }
  
  function writeIt() {
     const weekDays = ["Monday", "Tuesday", "Wednesday", "Thursday","Friday"];
     writeArray("Week-Days", weekDays);
     const weekEnd = new Array();
     //Push Method
     weekEnd.push("Saturday");
     weekEnd.push("Sunday");
     writeArray("WeekEnd", weekEnd);
     //Concat Method
     const week = weekDays.concat([]);
     //Unshift Method
     week.unshift(weekEnd[1]);
     week.push(weekEnd[0]);
     writeArray("Week", week);
     //Slice Method
     const midWeek = week.slice(2,5);
     writeArray("Middle Week", midWeek);
     const sortedWeek = week.sort();
     document.write("<b> Sorted Days: <b><br>");
     for(const dayIndex in sortedWeek) {
      document.write(sortedWeek[dayIndex] + "</br>");
    }
  }
  writeIt();
  //  function writeArray(msg, arr) {
  //   let arrString = arr.join(" | ");
  //   document.write("<b>" + msg + ": </b>" + arrString + "<br><br>");
  // }
  
  // function writeIt() {
  //   let weekDays = ["Monday","Tuesday","Wednesday","Thursday","Friday"];
  //   writeArray("Week Days", weekDays);
  //   let weekEnd = new Array();
  //   weekEnd.push("Saturday");
  //   weekEnd.push("Sunday");
  //   writeArray("WeekEnd", weekEnd)
  //   let week = weekDays.concat([]);
  //   week.unshift(weekEnd[1]);
  //   week.push(weekEnd[0]);
  //   writeArray("Week", week);
  //   let midWeek = week.slice(2,5);
  //   writeArray("Mid Week", midWeek);
  //   let sortedWeek = week.sort();
  //   document.write("<b> Sorted Days: </b></br>");
  //   for(dayIndex in sortedWeek) {
  //       document.write(sortedWeek[dayIndex] + "<br>");
  //   }
  
  // }    
  
  // const agesOfPeople = ages.filter(function(age){
  //   if(age <= 21){
  //      return true;
  //   } else {
  //     return false;
  //   }
  
  // })
  // console.log(agesOfPeople);
  
  // const orderRetailCompany = companies.sort((a,b) => (a.start - b.start) ? 1 : -1);
  //   console.log(orderRetailCompany);
  
  //   for (let i =0; i< companies.length; i++) {
  //       console.log(companies[i]);
  // } 
  
  //////////foreach
  // companies.forEach( function(company) {
  //     console.log(company.name);
  // })
  
  /////////filter
  
  // let canDrink = [];
  // for (let i =0; i < ages.length; i++) {
  //     if(ages[i] >= 21) {
  //         canDrink.push(ages[i]);
  //     }
  // }
  // const canDrink = ages.filter(function(age) {
  //     if(age >= 21) {
  //         return true;
  //     }
  // });
  
  //const canDrink = ages.filter(age => age >= 21);
  
  ////////// filter retail companies
  // const retailCompanies = companies.filter(function(company) {
  //     if(company.category === 'Retail') {
  //         return true;
  //     }
  // });
  
  // const retailCompanies = companies.filter(company => company.category === 'Retail');
  
  /// Get 80s companies
  // const eightiesCompany = companies.filter(company => (company.start >= 
  //     1980 && company.start < 1990))
  
  // const lastedTenYears = companies.filter(company => (company.end - company.start >= 10));
  
  // console.log(lastedTenYears);
  
  ///////////map
  //Create array of company names
  // const companyNames = companies.map(function(company) {
  //     return company.name;
  // });
  
  // const testMap = companies.map(function(company) {
  //     return `${company.name} [${company.start} - ${company.end}]`;
  // })
  
  // const testMap = companies.map(company => `${company.name} 
  // [${company.start} - ${company.end}]`);
  
  // const ageSquare = ages.map(age => Math.sqrt(age));
  // const agesTimeTwo = ages.map(age => age * 2);
  
  ////////////sort
  // const sortedCompanies  = companies.sort(function (c1, c2) {
  //     if(c1.start > c2.start) {
  //         return 1;
  //     } else {
  //         return -1;
  //     }
  // });
  
  // const sortedCompanies = companies.sort((a,b) => (a.start > b.start ? 1 : -1));
  
  //Sort ages 
  // const sortAges = ages.sort((a,b) => a -b);
  
  // console.log(sortAges);
  
  
  ///////////reduce
  // let ageSum  = 0;
  // for (let i =0; i < ages.length; i++) {
  //     ageSum += ages[i];
  // }
  
  // const ageSum  = ages.reduce(function(total, age) {
  //     return total + age;
  // }, 0);
  
  //const ageSum = ages.reduce((total, age) => total + age, 0);
  
  //Get total years for all companies
  
  // const totalYears = companies.reduce(function(total, company) {
  //     return total + (company.end - company.start); 
  // }, 0);
  
  //const totalYears = companies.reduce((total, company) => total + (company.end - company.start), 0)
  
  //console.log(totalYears);
  
  // const combined = ages
  //      .map(age => age* 2)
  //      .filter(age => age >= 40)
  //      .sort((a,b) => a-b)
  //      .reduce((a,b) => a + b, 0)
  
  // console.log(combined);
  
  // const Person = function(firstName, birthYear) {
  //      // Instance properties
  //      this.firstName = firstName;
  //      this.birthYear = birthYear;
  
       // Never do this
      //  this.calcAge = function() {
      //    console.log(2037 - this.birthYear);
      //  }
  //}
  
  // const jonas = new Person('Jonas', 1990);
  // console.log(jonas);
  
  // const matilda = new Person('Matilda', 2017);
  // const jack = new Person('Jack', 1975);
  // console.log(matilda, jack);
  
  // console.log(Person.prototype);
  // //Prototypes
  // Person.prototype.calcAge = function() {
  //   console.log(2037 - this.birthYear)
  // };
  
  // jonas.calcAge();
  
  