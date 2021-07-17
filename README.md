![Python](https://img.shields.io/badge/Python-3776AB?style=for-the-badge&logo=python&logoColor=white) ![Flask](https://img.shields.io/badge/Flask-000000?style=for-the-badge&logo=flask&logoColor=white) ![Nodejs](https://img.shields.io/badge/Node.js-43853D?style=for-the-badge&logo=node.js&logoColor=white) ![React](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB) ![Redux](https://img.shields.io/badge/Redux-593D88?style=for-the-badge&logo=redux&logoColor=white)
![PostgreSQL](https://img.shields.io/badge/postgres-%23316192.svg?style=for-the-badge&logo=postgresql&logoColor=white) ![Docker](https://img.shields.io/badge/Docker-2CA5E0?style=for-the-badge&logo=docker&logoColor=white) ![Heroku](https://img.shields.io/badge/Heroku-430098?style=for-the-badge&logo=heroku&logoColor=white)

# Thread, another dating app
### Live Link: [thread](https://project-second-degree.herokuapp.com/)
Thread is a dating app designed around that fact that humans meet people through _other people_, most typically their friends. 
So, _Thread_. Thread was developed around this _thread_ of connection, no pun intended, so people could meet people in a way that was more relational, conscious, and in harmony with the human experience of relationships. Cause we all know _relationships_ are a blast. But when done well, they could seriously alter the trajectory and quality of your life. 
How does Thread do this?
We only allow people who are second degree friends to you to be on the app. That way you can cultivate your social circle with care, moving your social circle outward, and upping the quality of your relationships.
Dates are always fun!
Thread allows you to reach out to people whom you match with via the app or through phone call.
Ultimately.
Thread seeks to enhance your relationships and more importantly, enhance the experience of your life as a human.

Thread is inspired by [Tinder](tinder.com).

<p align="center">
  <a href="#technologies">Technologies</a> 
  · 
  <a href="#Code Highlights/ Challenges">Code Highlights</a> 
  · 
  <a href="#wiki-pages">Wiki Pages</a> 
  ·
  <a href="#future-implementations">Future Implementations</a> 
  · 
  <a href="contributors">Contributors</a>
</p>

<img src="https://media.giphy.com/media/qfpcAEHDJUglvFt2Gi/giphy.gif" width=750px height=480px>

## Technologies
#### Frontend
- JavaScript
- React / Redux
- [material-ui](https://material-ui.com/)
- CSS
- WebSockets.io
- Hosted on Heroku and Cloudinary

#### Backend
- Python
- Flask
- PostgreSQL database
- SQLAlchemy

## Code Highlights/ Challenges

Here, we set up a relationship between the user and the users he/she swipes left on. This relationship is important to set up and track because we don't want the users we swiped left on, or right on, to appear in the feed again. These backdooor relationships helped set the prescedent for the current user not to see repeats in the user feed.

```Javascript
  usersSwipedLeftOn = db.relationship(
                                      "User",
                                      secondary=leftSwipes,
                                      primaryjoin=(leftSwipes.c.user_id == id),
                                      secondaryjoin=(leftSwipes.c.left_swipes_id == id),
                                      lazy="dynamic"
  )
  usersSwipedOn = db.relationship(
                                  "User",
                                  secondary="matches",
                                  primaryjoin=(id==Match.match_a),
                                  secondaryjoin=(id==Match.match_b),
                                  lazy="dynamic")
```

React tinder cards[https://www.npmjs.com/package/react-tinder-card] made the tinder card swiping technology possible.

```Javascript
<div className='tinderCards__cardContainer'>
                {filteredUsers?.map((person, idx) => (
                    <TinderCard
                        className='swipe'
                        key={idx}
                        preventSwipe={['up', 'down']}
                        onSwipe={(dir) => onSwipe(dir, person.id)}
                    >
                        <div
                            style={{ backgroundImage: `url(${person.profile_pic})` }}
                            className='card'
                        >
                            <h3>{person.username}</h3>
                        </div>
                    </TinderCard>
                ))}
</div>
```

These cards were added with an onSwipe() function which tracked whether cards were swiped left or right. This technology was valuable because it gauged matches and who else swiped right on you, as well as for filtering for users you already swiped through, as stated above.

## Future Implementations
- Search Matches
- Connect to Facebook or host on AWS

[@vmeduri1](https://github.com/vmeduri1) 🏄🏾 No Rights Reserved.
