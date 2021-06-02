from .db import db

friends = db.Table(
    "friend",
    db.Column(
        "user_id",
        db.Integer,
        db.ForeignKey("users.id"),
        primary_key=True
    ),
    db.Column(
        "friend_id",
        db.Integer,
        db.ForeignKey("users.id"),
        primary_key=True
    )
)
