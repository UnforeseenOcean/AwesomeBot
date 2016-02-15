AwesomeBot
==========

The best Discord bot!
---------------------

*Hello, I'm AwesomeBot. I add tons of cool stuff to any Discord server, providing external content, acting as a mod, and talking to members*

That's right! AwesomeBot is an all-in-one Discord bot packed with features, written in NodeJS and using the Discord.JS third-party API. Here are some of the things he can get from around the web:

 - Giphy links
 - Google Image Search
 - YouTube search
 - Reddit integration
 - Customizable RSS feeds
 - Full Wikipedia articles
 - Stock fetching
 - Google Play Store links
 
 In addition, he has many built-in utility functions:
 
  - Natural language unit conversion
  - Random number generator
  - Discord user profile
  - Reminders via PM
  - Year countdown

And finally, AwesomeBot can conduct **in-chat polls** and offers a fun **live trivia game**. He is fully configurable via PM, and can be controlled independently between servers. New servers can be added simply by private messaging the bot, and admins are automatically detected.

About
-----

This repository provides the source for the already-running `@AwesomeBot` instance. You are free to use this code as a base for your own bot, so long as you follow the following terms as well as the license:

1. If you modify the promotional message when the bot starts, you *must* add `-UNOFFICIAL` to the verison number on line 4
2. You may **not** remove the credit to @anandroiduser in the help section. If you wish, you may rephrase this along the lines of: `based on AwesomeBot <version> by @anandroiduser`
3. Join our private server if you are modifying the code in any way: [Join BotMakers, Inc.](https://discord.gg/0pRFCTcG2aIY53Jk)

Note that I am very busy with work, so this repository will only be updated for milestone releases and development may cease at any time. Also, I know this project is *very* poorly written; keep in mind that I have spent embarrassingly little time on this.

Setup
-----

1. Create a new Discord account for the bot
2. Make sure you have at least one mutual server with the bot's account
3. Clone this repository or download ZIP
4. Fill `auth.json` with your credentials. The first two items are for the bot's Discord account. The Google API key is used for YouTube and Image Search queries, and can be found [here](https://console.developers.google.com/). Make sure to add the YouTube Data API to your account and create a [custom search engine](https://cse.google.com/cse/create/new) that is configured to emulated Google Image Search. The final two items are self-explanatory. You do not need a redirect URL for the Imgur API, and your Client ID can be anonymous.
5. In `config.json`, provide your *personal* Discord ID for `maintainer` and the URL of your application if you are using cloud hosting or a static IP
6. Get [NodeJS](https://nodejs.org/en/) and NPM if you need to
7. Run `npm install` in the bot's directory to install the dependencies and then `node start.js` to get started!

You can PM the bot `config <server name>` to access the admin console for the bot in any server where you are the admin.

Contribute
----------

Please feel free to make pull requests or open an issue on this repository. Any help is appreciated!