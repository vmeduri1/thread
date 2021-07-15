from .db import db

class Message(db.Model):
    __tablename__ = 'messages'

    id = db.Column(db.Integer, primary_key=True)
    sender_id = db.Column(db.Integer, db.ForeignKey("users.id"))
    recipient_id = db.Column(db.Integer, db.ForeignKey("users.id"))
    content = db.Column(db.String(500))

    senders = db.relationship("User", foreign_keys=[sender_id], back_populates="user_senders")
    recipients = db.relationship("User", foreign_keys=[recipient_id], back_populates="user_recipients")

    def to_dict(self):
        return {
            "id": self.id,
            "senders": self.sender_id,
            "recipients": self.recipient_id,
            "content": self.content,
            "sender_name": self.senders.f_name
        }
