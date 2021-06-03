from .db import db

class Match(db.Model):
    __tablename__ = 'matches'

    id = db.Column(db.Integer, primary_key=True)
    match_a = db.Column(db.Integer, db.ForeignKey("users.id"))
    match_b = db.Column(db.Integer, db.ForeignKey("users.id"))
    isSeen = db.Column(db.Boolean)

    users_a = db.relationship("User", foreign_keys=[match_a], back_populates="matches_a")
    users_b = db.relationship("User", foreign_keys=[match_b], back_populates="matches_b")

    def to_dict(self):
        return {
            "id": self.id,
            "users_a": self.match_a,
            "users_b": self.match_b,
            "isSeen": self.isSeen
        }
