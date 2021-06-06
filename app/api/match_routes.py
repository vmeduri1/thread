from flask import Blueprint, request
from flask_login import login_required, current_user
from app.models import Match
from app.models import db

match_routes = Blueprint('matches', __name__)

@match_routes.route('/')
@login_required
def matches():
    matches = Match.query.all()
    return {"matches": [match.to_dict() for match in matches]}

@match_routes.route('/', methods = ['POST'])
@login_required
def addMatch():
    print('AALDSFLASDFJOSIJOF;SADIJOFAISJDOFAS;FIJAS;', request.json["id"])
    match = Match(match_a=current_user.id, match_b=request.json["id"])
    db.session.add(match)
    db.session.commit()
    matches = Match.query.all()
    return {"matches": [match.to_dict() for match in matches]}
