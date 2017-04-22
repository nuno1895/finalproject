users
    id
    username
    email
    password_hash

income_frequencies
    id 
    type (once, weekly, bi-weekly, semi-monthly, monthly)    

incomes
    id
    user_id
    income_frequency_id -> required
    income

types
    id
    name

budgets
    id
    user_id
    type_id
    threshold
    date

expenses
    id
    user_id
    type_id
    expenditure
    date

grades
    id
    user_id
    budget_id
    grade
    time_stamp of the grade being inserted into the database - WHEN THE SCRIPT CREATED THE GRADE

cron job
    -> script that grades all the budgets that need budgets
        -> insert a row into the grades table 

    run this cron job every minute

    https://www.npmjs.com/package/node-cron

    http://crontab-generator.org/