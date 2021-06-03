from werkzeug.security import generate_password_hash
from app.models import db, User

# Adds a demo user, you can add other users here if you want
def seed_users():

    demo = User(username='Demo', email='demo@aa.io', f_name='Demo',
                password='password')

    db.session.add(demo)

    markZuckerberg = User(username='marky', email='mark@facebook.com', f_name='Mark',
                        profile_pic='https://thumbor.forbes.com/thumbor/fit-in/416x416/filters%3Aformat%28jpg%29/https%3A%2F%2Fspecials-images.forbesimg.com%2Fimageserve%2F5c76b7d331358e35dd2773a9%2F0x0.jpg%3Fbackground%3D000000%26cropX1%3D0%26cropX2%3D4401%26cropY1%3D0%26cropY2%3D4401')

    db.session.add(markZuckerberg)

    hieu = User(username='hieu', email='hieu@hieu.com', f_name='Hieu',
                profile_pic='https://res.cloudinary.com/dn2tap8j5/image/upload/v1622679361/second_degree/Screen_Shot_2021-06-02_at_7.14.04_PM_ia4p4w.png')

    db.session.add(hieu)

    steveJobs = User(username='Jobs', email='steve@apple.com', f_name='Steve',
                    profile_pic='https://battleinvestmentgroup.com/wp-content/uploads/2020/10/Steve_Jobs.jpg')

    db.session.add(steveJobs)

    db.session.commit()

# Uses a raw SQL query to TRUNCATE the users table.
# SQLAlchemy doesn't have a built in function to do this
# TRUNCATE Removes all the data from the table, and resets
# the auto incrementing primary key
def undo_users():
    db.session.execute('TRUNCATE users RESTART IDENTITY CASCADE;')
    db.session.commit()
