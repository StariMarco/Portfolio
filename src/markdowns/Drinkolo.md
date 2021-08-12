# Drinkolo

![Dart](https://img.shields.io/badge/dart-%230175C2.svg?style=for-the-badge&logo=dart&logoColor=white)
![Flutter](https://img.shields.io/badge/Flutter-%2302569B.svg?style=for-the-badge&logo=Flutter&logoColor=white)
![Redux](https://img.shields.io/badge/redux-%23593d88.svg?style=for-the-badge&logo=redux&logoColor=white)
![JavaScript](https://img.shields.io/badge/javascript-%23323330.svg?style=for-the-badge&logo=javascript&logoColor=%23F7DF1E)
![Firebase](https://img.shields.io/badge/firebase-%23039BE5.svg?style=for-the-badge&logo=firebase)

## Contributors

- Marco Stari (developer)
- [StroeAndreX](https://github.com/StroeAndreX) (developer)
- Mattia M. (Designer)

## Technologies Used

- Dart
- Flutter
- Redux
- Javascript
- Firebase
- Google My Business APIs
- Google Maps APIs

## Description

`Drinkolo` is a iOS & Android app that enables bars and clubs to advertise themselves by publishing events and offers which can be accessed by the users in an easy and intuitive way.

The user can choose from a variety of offers published by bars and, if not satisfied, he can also decide to suggest a custom offer to a specific bar.

To browse through the offers and events, the user can also decide to use the map (implemented in the app) to find the nearest bars.

## Features

There are 2 different types of account: Bar and User

### User

- Google Maps to show bars near you
- Leaderboards: the user gains points by consuming offers
- Activate an offer and validate it at the bar before the time runs out
- Follow/Unfollow bars and events
- Customize your profile
- Choose the range in km within which to show offers and events
- Suggest offers to a specific bar
- Share bars, events and offers with friends (Firebase dynamic-links)
- Back-end functions to handle notifications, offer validations and expiration dates

### Bar

- Google My Business to get the bar data (if present)
- Customize your profile
- Create and publish offers
  - the bar can choose to create a new offer or select an old one from the app's suggestions
  - Select the name, category, price, quantity and (optionally) the ingredients
- Create and publish events
  - Hide or show event to the public
  - Repeat the event every week on one (or more) specific day
  - Create special offers for the event
  - Event analytics to see if it was successful
- Bar analytics
  - Custom widgets to graphically show the data
- Built-in Qr Code scanner
- Back-end functions to handle notifications, offer validations and expiration dates
