from werkzeug.security import generate_password_hash
from app.models import db, User

# Adds a demo user, you can add other users here if you want
def seed_users():

    demo = User(username='Demo', email='demo@aa.io', f_name='Demo',
                hashed_password=generate_password_hash('hotdog'), phone_number=1)

    db.session.add(demo)

    demo1 = User(username='Demo1', email='demo1@aa.io', f_name="Demo1", hashed_password=generate_password_hash('hotdog'), phone_number=1)

    db.session.add(demo1)

    markZuckerberg = User(username='marky', email='mark@facebook.com', f_name='Mark', hashed_password=generate_password_hash('hotdog'),
                        profile_pic='https://thumbor.forbes.com/thumbor/fit-in/416x416/filters%3Aformat%28jpg%29/https%3A%2F%2Fspecials-images.forbesimg.com%2Fimageserve%2F5c76b7d331358e35dd2773a9%2F0x0.jpg%3Fbackground%3D000000%26cropX1%3D0%26cropX2%3D4401%26cropY1%3D0%26cropY2%3D4401', phone_number=1)

    db.session.add(markZuckerberg)

    hieu = User(username='hieu', email='hieu@hieu.com', f_name='Hieu', password='hotdog',
                profile_pic='https://res.cloudinary.com/dn2tap8j5/image/upload/v1622679361/second_degree/Screen_Shot_2021-06-02_at_7.14.04_PM_ia4p4w.png', phone_number=1)

    db.session.add(hieu)

    steveJobs = User(username='Jobs', email='steve@apple.com', f_name='Steve', password='hotdog',
                    profile_pic='https://battleinvestmentgroup.com/wp-content/uploads/2020/10/Steve_Jobs.jpg', phone_number=1)

    db.session.add(steveJobs)

    whitneyHouston = User(username='Whitney', email='whitney@gmail.com', f_name='Whitney', password='hotdog',
                        profile_pic='https://dazedimg-dazedgroup.netdna-ssl.com/2435/azure/dazed-prod/1290/8/1298649.jpg', phone_number=1)

    db.session.add(whitneyHouston)

    billieEilish = User(username='Billie', email='billie@gmail.com', f_name='Billie', password='hotdog',
                        profile_pic='https://static.billboard.com/files/media/Billie-Eilish-press-photo-2017-billboard-1548-768x433.jpg', phone_number=1)

    db.session.add(billieEilish)

    duaLipa = User(username='Dua', email='dualipa@gmail.com', f_name='Dua', password='hotdog',
                profile_pic='https://yt3.ggpht.com/ytc/AAUvwnhDZXpXUoc7YNL7h7j6Y4o6lZnEPuWDy2lbuBO4NQ=s900-c-k-c0x00ffffff-no-rj', phone_number=1)

    db.session.add(duaLipa)

    camilaCabello = User(username='Camila', email="camila@gmail.com", f_name='Camila', password='hotdog',
                    profile_pic='https://static.billboard.com/files/media/Camila-Cabello-press-by-Amanda-Charchian-2020-billboard-1548-compressed.jpg', phone_number=1)

    db.session.add(camilaCabello)

    barackObama = User(username='Barack', email='barack@whitehouse.gov', f_name='Barry-O', password='hotdog',
                    profile_pic='https://static01.nyt.com/images/2021/06/03/opinion/03klein-lead/03klein-lead-jumbo-v2.jpg?quality=90&auto=webp', phone_number=1)

    db.session.add(barackObama)

    sia = User(username='sia', email='sia@music.com', f_name='Sia', password='hotdog',
            profile_pic='https://images.toofab.com/image/07/o/2020/01/13/0718feb83731518da4892d3dcba227fb_md.jpg', phone_number=1)

    db.session.add(sia)

    elon = User(username='elon', email='elon@spacex.com', f_name='Elon', hashed_password=generate_password_hash('hotdog'),
                profile_pic='https://upload.wikimedia.org/wikipedia/commons/8/85/Elon_Musk_Royal_Society_%28crop1%29.jpg', phone_number=1)
    db.session.add(elon)

    b = User(username='b', email='b@salinas.com', f_name='b', password='hotdog',
            profile_pic='https://res.cloudinary.com/dn2tap8j5/image/upload/v1623188778/second_degree/Screen_Shot_2021-06-08_at_4.45.44_PM_hnunoi.png', phone_number=1)
    db.session.add(b)

    db.session.commit()

# Uses a raw SQL query to TRUNCATE the users table.
# SQLAlchemy doesn't have a built in function to do this
# TRUNCATE Removes all the data from the table, and resets
# the auto incrementing primary key
def undo_users():
    db.session.execute('TRUNCATE users RESTART IDENTITY CASCADE;')
    db.session.commit()
