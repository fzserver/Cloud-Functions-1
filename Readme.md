# Cloud Functions
This function fetches the data from cloud firestore & sends the notification using Firebase Cloud Messaging.

## Requirements for using a Firebase Cloud Function

* Install node.js => [https://goo.gl/pQGB2Y](https://goo.gl/pQGB2Y)
```
brew install node
node --version
```
* npm => Its the node package manager
```
npm --version
```
* Install Firebase CLI
```
npm install -g firebase-tools
firebase --version
```
**Run with sudo if needed**
```
sudo npm install -g firebase-tools
firebase --version
```
* Install a code editor (VSCode) => [https://goo.gl/uAAR2o](https://goo.gl/uAAR2o)


## Setup a Firebase

**For first time users**
```
firebase login
– sudo firebase login
```

## Initialize Firebase Cloud Functions

```
firebase init
– sudo firebase init
=> Choose the Firebase feature you want to use. (For this project select **Functions**)
=> Select a default Firebase project for this directory. (For this project can create one or use any existing)
=> What language would you like to use to write Cloud Functions? (For this project select **TypeScript**)
=> Do you want to use TSLint to catch probable bugs and enforce style? (Type **Y** then press **Enter**)
=> Do you want to install dependencies with npm now? (Type **Y** then press **Enter**)
```

## 💰 Donations

This project needs you! If you would like to support this project's further upgradations, the creator of this project or the continuous maintenance of this project, feel free to donate. Your donation is highly appreciated (and I love food, coffee and beer). Thank you!

**Paypal**

**For All Developers**

* **[Donate $5](https://www.paypal.me/frazile/USD5)**: Thank's for creating this project, here's a coffee or juice or beer for you!
* **[Donate $10](https://www.paypal.me/frazile/USD10)**: Wow, I am stunned. Let me take you to the movies.
* **[Donate $15](https://www.paypal.me/frazile/USD15)**: I really appreciate your work, let's grab some lunch!
* **[Donate $20](https://www.paypal.me/frazile/USD20)**: That's some awesome stuff you did right there, Pizza/Burger is on me!
* **[Donate $25](https://www.paypal.me/frazile/USD25)**: Thank's for the code, get a Firebase Flame Plan for your next project.
* **[Donate $30](https://www.paypal.me/frazile/USD30)**: I really really want to support this project, great job!
* **[Donate $35](https://www.paypal.me/frazile/USD35)**: You are the man! This project saved me hours (if not days) of struggle and hard work, simply awesome!
* **[Donate $40](https://www.paypal.me/frazile/USD40)**: I want to learn more let's connect, Dinner is on me!
* **[Donate $45](https://www.paypal.me/frazile/USD45)**: Many many thanks for the flutter project in dart language.
* **[Donate $50](https://www.paypal.me/frazile/USD50)**: Thanks to tell the working of Firebase Cloud Functions in JavaScript/TypeScript & using of Nodejs & Firebase CLI!
* **[Donate $60](https://www.paypal.me/frazile/USD60)**: Let me buy u some Storage Server, about say 100 GB!
* **[Donate $70](https://www.paypal.me/frazile/USD70)**: Thank's for creating this plugin/package/code, here's some bugs for Domain Name with SSL, Storage Server(150 GB)!
* **[Donate $80](https://www.paypal.me/frazile/USD80)**: Thank's for creating this plugin/package/code, here's some bugs for Domain Name with SSL, Storage Server(150 GB), Lights billings!
* **[Donate $90](https://www.paypal.me/frazile/USD90)**: Thank's for creating this plugin/package/code, here's some bugs for Domain Name with SSL, Storage Server(150 GB), Lights & Internet billings!
* **[Donate $100](https://www.paypal.me/frazile/USD100)**: Thank's for creating the best plugin/package/code, here's a 2TB HDD for your Storage Server is on me!
* **[Donate $299](https://www.paypal.me/frazile/USD299)**: Thank's buddy for the awesome plugin/package/app/game developed, buy Apple TV 4K for yourself!
* **[Donate $799](https://www.paypal.me/frazile/USD799)**: Thank's buddy for the awesome plugin/package/app/game developed, buy Apple Watch for yourself!
* **[Donate $1500](https://www.paypal.me/frazile/USD1500)**: Thank's buddy for the awesome plugin/package/app/game developed, buy Apple iPhone for yourself!
* **[Donate $2000](https://www.paypal.me/frazile/USD2000)**: Thank's buddy for the awesome plugin/package/app/game developed, buy Apple iPad for yourself!
* **[Donate $2500](https://www.paypal.me/frazile/USD2500)**: Thank's buddy for the awesome plugin/package/app/game developed, buy Apple Mac Mini & Storage Server for yourself!
* **[Donate $3000](https://www.paypal.me/frazile/USD3000)**: Thank's buddy for the awesome plugin/package/app/game developed, buy Apple MacBook Pro for yourself!
* **[Donate $7000](https://www.paypal.me/frazile/USD7000)**: Thank's buddy for the awesome plugin/package/app/game developed, buy Apple iMac Pro 5K for yourself!

**For UK Developers**

* **[Donate £5](https://www.paypal.me/frazile/GBP5)**: Thank's for creating this project, here's a coffee or juice or beer for you!
* **[Donate £10](https://www.paypal.me/frazile/GBP10)**: Wow, I am stunned. Let me take you to the movies.
* **[Donate £15](https://www.paypal.me/frazile/GBP15)**: I really appreciate your work, let's grab some lunch!
* **[Donate £20](https://www.paypal.me/frazile/GBP20)**: That's some awesome stuff you did right there, Pizza/Burger is on me!
* **[Donate £25](https://www.paypal.me/frazile/GBP25)**: Thank's for the code, get a Firebase Flame Plan for your next project.
* **[Donate £30](https://www.paypal.me/frazile/GBP30)**: I really really want to support this project, great job!
* **[Donate £35](https://www.paypal.me/frazile/GBP35)**: You are the man! This project saved me hours (if not days) of struggle and hard work, simply awesome!
* **[Donate £40](https://www.paypal.me/frazile/GBP40)**: I want to learn more let's connect, Dinner is on me!
* **[Donate £45](https://www.paypal.me/frazile/GBP45)**: Many many thanks for the flutter project in dart language.
* **[Donate £50](https://www.paypal.me/frazile/GBP50)**: Thanks to tell the working of Firebase Cloud Functions in JavaScript/TypeScript & using of Nodejs & Firebase CLI!
* **[Donate £60](https://www.paypal.me/frazile/GBP60)**: Let me buy u some Storage Server, about say 100 GB!
* **[Donate £70](https://www.paypal.me/frazile/GBP70)**: Thank's for creating this plugin/package/code, here's some bugs for Domain Name with SSL, Storage Server(150 GB)!
* **[Donate £80](https://www.paypal.me/frazile/GBP80)**: Thank's for creating this plugin/package/code, here's some bugs for Domain Name with SSL, Storage Server(150 GB), Lights billings!
* **[Donate £90](https://www.paypal.me/frazile/GBP90)**: Thank's for creating this plugin/package/code, here's some bugs for Domain Name with SSL, Storage Server(150 GB), Lights & Internet billings!
* **[Donate £100](https://www.paypal.me/frazile/GBP100)**: Thank's for creating the best plugin/package/code, here's a 2TB HDD for your Storage Server is on me!
* **[Donate £299](https://www.paypal.me/frazile/GBP299)**: Thank's buddy for the awesome plugin/package/app/game developed, buy Apple TV 4K for yourself!
* **[Donate £799](https://www.paypal.me/frazile/GBP799)**: Thank's buddy for the awesome plugin/package/app/game developed, buy Apple Watch for yourself!
* **[Donate £1500](https://www.paypal.me/frazile/GBP1500)**: Thank's buddy for the awesome plugin/package/app/game developed, buy Apple iPhone for yourself!
* **[Donate £2000](https://www.paypal.me/frazile/GBP2000)**: Thank's buddy for the awesome plugin/package/app/game developed, buy Apple iPad for yourself!
* **[Donate £2500](https://www.paypal.me/frazile/GBP2500)**: Thank's buddy for the awesome plugin/package/app/game developed, buy Apple Mac Mini & Storage Server for yourself!
* **[Donate £3000](https://www.paypal.me/frazile/GBP3000)**: Thank's buddy for the awesome plugin/package/app/game developed, buy Apple MacBook Pro for yourself!
* **[Donate £7000](https://www.paypal.me/frazile/GBP7000)**: Thank's buddy for the awesome plugin/package/app/game developed, buy Apple iMac Pro 5K for yourself!

Of course, you can also choose what you want to donate, all donations are awesome!

## Developed By

```
Parth Aggarwal CEO & Developer of Frazile Inc.
```