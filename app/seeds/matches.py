from werkzeug.security import generate_password_hash
from app.models import db, User, Match

def seed_matches():
    # demo = User.query.filter_by(username="Demo")
    # markZ = User.query.filter_by(username="marky")
    # hieu = User.query.filter_by(username="hieu")
    # steveJ = User.query.filter_by(username="Jobs")

    demo_mark = Match(match_a=1, match_b=2)
    db.session.add(demo_mark)

    mark_demo = Match(match_a=2, match_b=1)
    db.session.add(mark_demo)



    demo_hieu = Match(match_a=1, match_b=3)
    db.session.add(demo_hieu)

    demo_jobs = Match(match_a=1, match_b=4)
    db.session.add(demo_jobs)

    demo_whitney = Match(match_a=1, match_b=5)
    # whitney_demo = Match(match_a=5, match_b=1)
    # db.session.add(whitney_demo)
    db.session.add(demo_whitney)

    elon_b = Match(match_a=12, match_b=13)
    db.session.add(elon_b)

    db.session.commit()

def undo_matches():
    db.session.execute('TRUNCATE matches RESTART IDENTITY CASCADE;')
    db.session.commit()
