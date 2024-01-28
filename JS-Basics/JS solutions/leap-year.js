function leapYear(year) 
{
    `use strict`;

    let is_leap = false;


    if (year % 4 == 0 && year % 100 !== 0 || year % 400 == 0) {
        is_leap = true;
    }


    if (is_leap) {
        console.log("yes")
    }
    
    else {
        console.log("no")
    }
}

leapYear(1984)

leapYear(2003)
leapYear(4)