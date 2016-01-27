# Chores app - Project 2
> CLEAN THE BATHROOM B*@$%!
----------

<img src="https://cloud.githubusercontent.com/assets/9711999/12529100/a3ae1120-c200-11e5-92d0-af8f7c153b54.png" alt="Chores-app-screen" width="400">

## Team

* Rob
* Sylvain
* Wataru
* Tim

## Problem

Housemates are dirty people and no one wants to take responsibility for cleaning tasks.

## Solution

Building a flatmates task manager web app with notifications, reviews and score tracking system.

## Features

* create activities - these are like chore categories but it's also where you assign the level of difficulty which will be used to calculate a score on completion. eg. cleaning the bathroom
* create tasks - when you want to assign someone a job, you create a task which specifies the due date and task owner
* task filter - see all tasks for the group or only your tasks
* give feedback - once a member has completed a task, other members are notified and asked to rate their task
* redo a job - if at least 1 feedback is negative, the task owner is notified that they need to redo the task
* leaderboard - ranks the members by score which is calculated based on the number of tasks completed and their difficulty
* avatars! - change your picture or use the default which dynamically generates a robot based on your name
* ability to join/create a group on sign up
* user authentication and authorisation

## Demo

Several user accounts already exist:

user | password
:----|:--------
zippy@email.com | chicken
squiggles@email.com | chicken

[Try it out now](https://calm-escarpment-12505.herokuapp.com/)

## Technologies used:

Front-end:

* [Backbone.js](http://backbonejs.org/)
* [Underscore.js](http://underscorejs.org/)
* [moment.js date/time library](http://momentjs.com/)
* [jQuery](https://jquery.com/)
* [Javascript](https://developer.mozilla.org/en-US/docs/Web/JavaScript)
* [milligram css framework](https://milligram.github.io/)
* [font-awesome](https://fortawesome.github.io/Font-Awesome/)
* [robohash avatar generator](https://robohash.org/)

Back-end:

* [Ruby on Rails](http://rubyonrails.org/)
* [Postgresql](http://postgresapp.com/)

## Code
__Routes:__
Only the user sign in/up  have been built with rails routes. The other ones with Backbone routes.
__schema:__
5 tables organise the database

<img src="https://cloud.githubusercontent.com/assets/9711999/12529047/8b08f88e-c1ff-11e5-93d0-90897d62aa24.png" alt="schema" width="400">

## Configuration:
Install and run the [mac postgresql app](http://postgresapp.com/)
Seed the database if you want some sample account and data
```
rake db:create
rake db:migrate
rake db:seed
```

## Deployment
Run the command line `rails server`

## Bugs
* Feedback notifications is still buggy. Currently only works if you seed the data and check 2 items as done
* No validation for creating a group. You can't create/join a group if you log in, only on sign up.
* Admin routes accessible even without logging in
* logging into 2 accounts on the same browser causes rails session info to get confused. eg. if you log in as zippy, then log in as squiggles and complete a task as zippy, rails thinks you are squiggles. Workaround: use multiple browsers. eg. log in as zippy in chrome, log in as squiggles in firefox.

## Sore Bits:
- The syntax for the views. With 35 backbone views, establishing a naming convention that makes sense for everyone was complicated.
- The multiple use of dependent foreign keys have been difficult to track.
- jQuery ajax requests created problems so we had to switch to a Backbone ajax request.
- The notification and feedback features have been painful to integrate
- The zombie views (When we bind objects together through events but we don’t bother unbinding them):
```
event.stopPropagation();
event.stopImmediatePropagation()
```
  That code is perfect at stopping a zombie invasion...
- Code working perfectly the day before and not working anymore the day after without having interfered with it. Probably the push/pull on Github is doing that.
- Dreaming in code...

## Cool Beans:
- Working in team.
- Establishing a good view naming scheme because when we had to work with someone else's views, it was relatively easy to find what code we needed.
- Project extensibility. Multiple extra features that could be added if we had the time.
- Having a much better understanding of Backbone
- Establishing a Trello Board to assign tasks.
- Seeing our app growing.
- loving the app when it worked, hating the app when it broke.

## With more time?
- "Wall of shame" - share group stats on Facebook to publicly shame underperformers.
- A graph displaying the teammates scores over time.
- A desktop interface.