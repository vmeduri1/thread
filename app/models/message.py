from .db import db

class Message(db.Model):
    __tablename__ = 'messages'

    id = db.Column(db.Integer, primary_key=True)
    sender_id = db.Column(db.Integer)
    recipient_id = db.Column(db.Integer)
    content = db.Column(db.String(500))

    senders = db.relationship("User", back_populates="user_senders")
    recipients = db.relationship("User", back_populates="user_recipients")

    def to_dict(self):
        return {
            "id": self.id,
            "senders": self.sender_id,
            "recipients": self.recipient_id,
            "content": self.content
        }
