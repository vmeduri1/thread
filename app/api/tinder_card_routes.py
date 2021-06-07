from flask import Blueprint
from flask_login import login_required
from app.models import User

tinder_card_routes = Blueprint('users', __name__)

@tinder_card_routes.route('/')
@login_required
def users():
    users = User.query.all()
    return {"users": [user.to_dict() for user in users]}

