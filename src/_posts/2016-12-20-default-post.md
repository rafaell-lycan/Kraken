---
title: 'Heroku and Passenger: focus on the app performance'
tags: heroku
cover: "http://images.darrenknewton.com/heroku.jpg"
author: Rafaell Lycan
updated: 2016-12-22
updated_notes: >
  As of node 4, we're now able to use ES2015 without the need for Babel. However modules are not currently supported so you'll need to use `require()` still. Checkout the <a href="https://nodejs.org/en/docs/es6/">node docs</a> for more info on what's supported. If you'd like module support and to utilise Babel, read on.
  <br> Post updated to use Babel 6.
---

<a href="https://www.heroku.com/">Heroku</a> is an excellent and popular hosting service for web apps. Being a fully hosted service, you will never have to wake up in the morning to blinking lights on your phone, notifying you of text messages and
  missed calls, as well as a lot of mail, all trying to tell you that your server has been down since 3AM. Combined with its ease of use, it is no wonder that Heroku is becoming more and more popular.

<img src="https://addyosmani.com/assets/appshell/appshell-1.jpg" alt="App Shell Separation of HTML, JS and CSS shell and the HTML Content">

<hr class="section-divider" />

<h2 id="savetimeandmoneywithheroku">Save time and money with Heroku</h2>

<a href="https://www.phusionpassenger.com/">Passenger</a> is an excellent addition to Heroku. By running Passenger on Heroku, you will be able to tune your app for optimal performance at the lowest cost. With our full set of tools: <a href="https://www.phusionpassenger.com/enterprise">Passenger</a>,
      <a href="https://blog.phusion.nl/2015/05/26/introducing-the-passenger-status-service-for-heroku/">Passenger Status Service</a> and <a href="https://www.unionstationapp.com/">Union Station</a> we deliver a complete solution for running, monitoring
      and optimising your application.

>Passenger has been working great for us! We haven't had time optimize it, but the initial settings we choose have it running better than Puma. Thank you again!
<br> — <a href="https://www.linkedin.com/in/tomoneill2">Tom O'Neill</a>, <a href="http://periscopedata.com">Periscope Data</a>

In fact, it's pretty hard for me to write down that sentence 'cause I don't know if I should feel proud or ashamed of it. The thing is, 2015 was an exception.

- <strong>January</strong>, started to live together with Carol. The craziest yet most loving little girl in the planet.
- <strong>March</strong>, moved to US for good. A plan I had for a very long time finally became true.
- <strong>April</strong>, rented and furnished my entire home for the first time. Thanks IKEA &lt;3
- <strong>June</strong>, bought my first car. I never liked cars but it's impossible to not have one in LA.
- <strong>November</strong>, <a href="https://twitter.com/zenorocha/status/662673751373287424">got a dog</a>. Which makes me think: "How could I lived without one for such a long time?".

<figure>
  <img class="progressiveMedia-image js-progressiveMedia-image" data-src="https://cdn-images-1.medium.com/max/1500/1*BfnhfIS1vNyeu50yQvIe8A.png" src="https://cdn-images-1.medium.com/max/1500/1*BfnhfIS1vNyeu50yQvIe8A.png">
  <figcaption class="imageCaption">Chave <strong class="markup--strong markup--figure-strong"><em class="markup--em markup--figure-em">publicPath</em></strong> em Dev x&nbsp;Prod</figcaption>
</figure>

After all presentations <em>(and pizza slices)</em>, we got the score sheets from the judges so we could check who were the winners.

<div class="iframe-wrap">
      <iframe src="//www.youtube.com/embed/videoseries?list=PLKb_gn-WO_KrEGD3j40tvjEQqhwh5QA6t">
</iframe>
</div>

For <em>"Best Technical Achievement"</em>, a team who played with hardware by moving a robot, taking photos and uploading it to Twitter, and controlling a light bulb by detecting the level of sound. All this using <a href="https://tessel.io/">Tessel</a>,
      a microcontroller that runs JavaScript.

<blockquote name="23d1" id="23d1" class="graf graf--blockquote graf-after--p">The Virtual DOM concept has been often emphasized for its speedy performance. But there is also an equally important — if not more important — property. The concept makes it possible to represent the UI as a function of its state.</blockquote>

<table>
  <thead>
    <tr>
      <th>Event</th>
      <th>Action</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>Event</td>
      <td>Action</td>
    </tr>
    <tr>
      <td>Install</td>
      <td>Cache application shell and other single page app resources</td>
    </tr>
    <tr>
      <td>Activate</td>
      <td>Clear out old caches</td>
    </tr>
    <tr>
      <td>Fetch</td>
      <td>Serve up single page web app for URL's and use cache for assets and predefined partials, use network for other requests..</td>
    </tr>
  </tbody>
</table>

<h1>Heading 01</h1>
<h2>Heading 02</h2>
<h3>Heading 03</h3>
<h4>Heading 04</h4>