function vacation(number_of_people, type, day) 
{
    `use strict`

    let price_total = 0

    if (type === "Students") 
    {
        if (day === "Friday") 
        {
           price_total += 8.45 * number_of_people     
        }
        else if (day === "Saturday") 
        {
            price_total += 9.80 * number_of_people
        }
        else if (day === "Sunday") 
        {
            price_total += 10.46 * number_of_people
        }   

        if (number_of_people >= 30) 
        {
            price_total -= price_total * 0.15
        }
    }
    else if (type === "Business") 
    {
        if (number_of_people >= 100) {
            number_of_people -= 10
        }

        if (day === "Friday") 
        {
            price_total += 10.90 * number_of_people
        }
        else if (day === "Saturday") 
        {
            price_total += 15.60 * number_of_people
        }
        else if (day === "Sunday") 
        {
            price_total += 16 * number_of_people
        }       
    }
    else if (type === "Regular") 
    {
        if (day === "Friday") 
        {
            price_total += 15 * number_of_people
        }
        else if (day === "Saturday") 
        {
            price_total += 20 * number_of_people
        }
        else if (day === "Sunday") 
        {
            price_total += 22.50 * number_of_people
        } 
        
        if (number_of_people >= 10 && number_of_people <= 20)
        {
            price_total -= price_total * 0.05
        }
    }
    console.log(`Total price: ${price_total.toFixed(2)}`)
}

vacation(30, "Students", "Sunday")
vacation(40, "Regular", "Saturday")

