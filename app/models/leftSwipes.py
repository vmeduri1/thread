from .db import db

leftSwipes = db.Table(
    "left_swipes",
    db.Column(
        "user_id",
        db.Integer,
        db.ForeignKey("users.id"),
        primary_key=True
    ),
    db.Column(
        "left_swipes_id",
        db.Integer,
        db.ForeignKey("users.id"),
        primary_key=True
    )
)
