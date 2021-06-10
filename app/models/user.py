from .db import db
from werkzeug.security import generate_password_hash, check_password_hash
from flask_login import UserMixin
from .match import Match
from .message import Message

class User(db.Model, UserMixin):
  __tablename__ = 'users'

  id = db.Column(db.Integer, primary_key = True)
  f_name = db.Column(db.String(255), nullable = False)
  l_name = db.Column(db.String(255))
  username = db.Column(db.String(40), nullable = False, unique = True)
  profile_pic = db.Column(db.String(300))
  phone_number = db.Column(db.Integer())
  email = db.Column(db.String(255), nullable = False, unique = True)
  hashed_password = db.Column(db.String(255))

  matches_a = db.relationship("Match", back_populates="users_a", primaryjoin=(id==Match.match_a))
  matches_b = db.relationship("Match", back_populates="users_b", primaryjoin=(id==Match.match_b))

  usersSwipedOn = db.relationship(
                                  "User",
                                  secondary="matches",
                                  primaryjoin=(id==Match.match_a),
                                  secondaryjoin=(id==Match.match_b),
                                  # backref=db.backref("swipedOnCurrentUser", lazy="dynamic"),
                                  lazy="dynamic")

  swipedOnCurrentUser = db.relationship(
                                    "User",
                                    secondary="matches",
                                    primaryjoin=(id==Match.match_b),
                                    secondaryjoin=(id==Match.match_a),
                                    # backref=db.backref("swipedOnCurrentUser", lazy="dynamic"),
                                    lazy="dynamic")

  user_senders = db.relationship("Message", back_populates="senders", primaryjoin=(id==Message.sender_id))
  user_recipients = db.relationship("Message", back_populates="recipients", primaryjoin=(id==Message.recipient_id))

  @property
  def password(self):
    return self.hashed_password


  @password.setter
  def password(self, password):
    self.hashed_password = generate_password_hash(password)


  def check_password(self, password):
    return check_password_hash(self.password, password)


  def to_dict(self):
    return {
      "id": self.id,
      "f_name": self.f_name,
      "l_name": self.l_name,
      "username": self.username,
      "profile_pic": self.profile_pic,
      "phone_number": float(self.phone_number) if self.phone_number else 0,
      "email": self.email,
      "usersSwipedOn": [user.id for user in self.usersSwipedOn],
      "swipedOnCurrentUser": [user.id for user in self.swipedOnCurrentUser]
    }
