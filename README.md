# README

Tweeter is a simple web application that allows you to add a twwet that will render on the  page. Also you can post a comment on any specific tweet on the tweet show and you can view that allow  comment on that specific tweet.

#Installation
The backend repo can be found at https://github.com/Naomi-Rhames/tweeter_backend .
After cloning both the frontend and backend repositories, There are sepreate commands for the frontend and the backend.

Run the following commands on the backend repo:

```
bundle install
rake db:migrate
rake db:seed
rails s
```

On the frontend repo, run the following command:

```
npm start
```

Go to this link http://localhost:3000/tweets to make sure that seed data has populated

When you run ```npm start``` it should lead you a page on the chrome broswer the fontend already generated.



#How to Use
Sign up as a new user by clicking the signup button below the login form if you already don't have a login information.

Once you signed up, you should see a form where you post a tweet, a navagation and all the posts that was already posted from previous users. All posts will have a comment button where it allows you to comment on that specific post and you can view other comments from other users from under that specific posts.


#Features For Future Versions
. Edit a Tweet
. Delete a Tweet
. More CSS

#Contributing
Bug reports and pull request are welcome on Github at https://github.com/Naomi-Rhames/tweeter_frontend . This project is intended to be a safe, welcoming space for collaboration, and contributors are expected to adhere to the Contributor Covenant code of conduct.

#License
The gem is available as open source under the terms of the MIT License.