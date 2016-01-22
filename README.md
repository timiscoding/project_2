# CLEAN THE BATHROOM BITCH !

## Housemates are dirty people and no one wants to take responsibility for cleaning tasks.

## The Solution:

Building a flatmates tasks manager mobile App with notifications, reviews and score traking system. App created with rails and backbone. 

## Code
__Routes:__ 
Only the user sign in/up  have been built with rails routes. The other ones with Backbone routes.
__schema:__
6 tables organise the database.

## Sore Bits:
- The syntax for the views. With 35 backbone views, establishing a syntax that makes sense for everyone was complicated.
- The multiple use depending Id ( foreign keys ) have been difficult to track.
- The jQuery ajax requests stopped to work for no logical reason so we had to switch to a Backbone ajax request.
- The notification and feedback features have been painful...
- The zombie views (When we bind objects together through events but we don’t bother unbinding them):
``` 
event.stopPropagation();
event.stopImmediatePropagation() 
```
  That perfectly makes that this code is for stopping a zombie invasion...
- Code working perfectly the day before and not working anymore the day after without having interfered with it. Probably the push/pull on Github is doing that.
- Dreaming in code...

## Cool Beans:
- Working in team. 
- Clearly the time we spent on establishing a good syntax for the views was good because when we had to work with the views someone else did, it was relatively easy to find what code we needed.
- Making our project expendable. Multiple extra features that could be added if we had the time.
- Having a much better understanding of backbone
- Establishing a Trello Board. 
- Seeing our app growing.
- loving/hating the app.

## With more time?
- Facebook share as "Wall of shame"...
- A graph on the user_group_score evolution.
- A desktop interface.




