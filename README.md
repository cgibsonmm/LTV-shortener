# Bijective Function

After a night or two of searching for a possible solution to this problem I kept coming back to
[This Stack Overflow](https://stackoverflow.com/questions/742013/how-do-i-create-a-url-shortener).
I figured that there would be many ways that I would be able to solve this problem but after noticing the `CHARACTERS` array in the short_url model I figured this approach had to be the right way.

My code is influenced by the [This Stack Overflow](https://stackoverflow.com/questions/742013/how-do-i-create-a-url-shortener) and [This Medium](https://medium.com/@harpermaddox/how-to-build-a-custom-url-shortener-5e8b454c58ae) article.


### Questions I still have
 After the create I return the whole short_url in JSON, would it have been better just to return something like `{url: mysite.com/abc}`?

 Also, there seems to be a lot of debate on what on how to validate a URL, I would love to hear more insight into the method I used vs other approaches.

 If there is any further question please feel free to reach out *Thank You!*


# Intial Setup

    docker-compose build
    docker-compose up mariadb
    # Once mariadb says it's ready for connections, you can use ctrl + c to stop it
    docker-compose run short-app rails db:migrate
    docker-compose -f docker-compose-test.yml build

# To run migrations

    docker-compose run short-app rails db:migrate
    docker-compose -f docker-compose-test.yml run short-app-rspec rails db:test:prepare

# To run the specs

    docker-compose -f docker-compose-test.yml run short-app-rspec

# Run the web server

    docker-compose up

# Adding a URL

    curl -X POST -d "full_url=https://google.com" http://localhost:3000/short_urls.json

# Getting the top 100

    curl localhost:3000

# Checking your short URL redirect

    curl -I localhost:3000/abc
