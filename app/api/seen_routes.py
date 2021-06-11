from flask import Blueprint, request
from flask_login import login_required, current_user
from app.models import User
from app.models import db

seen_routes = Blueprint('seen', __name__)

@seen_routes.route('/', methods = ['POST'])
@login_required
def addUsersToSwiped():
    print('seen request.json();', request.json["id"])
    leftSwipesCurrentUser = User.query.get(current_user.id)
    leftSwipedOn = User.query.get(request.json["id"])
    leftSwipesCurrentUser.usersSwipedLeftOn.append(leftSwipedOn)
    db.session.commit()
    return {"user": leftSwipedOn.id}
