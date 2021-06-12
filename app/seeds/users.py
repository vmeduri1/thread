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

    hieu = User(username='hieu', email='hieu@hieu.com', f_name='Hieu', hashed_password=generate_password_hash('hotdog'),
                profile_pic='https://res.cloudinary.com/dn2tap8j5/image/upload/v1622679361/second_degree/Screen_Shot_2021-06-02_at_7.14.04_PM_ia4p4w.png', phone_number=1)
    db.session.add(hieu)

    steveJobs = User(username='Jobs', email='steve@apple.com', f_name='Steve', hashed_password=generate_password_hash('hotdog'),
                    profile_pic='https://battleinvestmentgroup.com/wp-content/uploads/2020/10/Steve_Jobs.jpg', phone_number=1)
    db.session.add(steveJobs)

    whitneyHouston = User(username='Whitney', email='whitney@gmail.com', f_name='Whitney', hashed_password=generate_password_hash('hotdog'),
                        profile_pic='https://dazedimg-dazedgroup.netdna-ssl.com/2435/azure/dazed-prod/1290/8/1298649.jpg', phone_number=1)
    db.session.add(whitneyHouston)

    billieEilish = User(username='Billie', email='billie@gmail.com', f_name='Billie', hashed_password=generate_password_hash('hotdog'),
                        profile_pic='https://static.billboard.com/files/media/Billie-Eilish-press-photo-2017-billboard-1548-768x433.jpg', phone_number=1)
    db.session.add(billieEilish)

    duaLipa = User(username='Dua', email='dualipa@gmail.com', f_name='Dua', hashed_password=generate_password_hash('hotdog'),
                profile_pic='https://yt3.ggpht.com/ytc/AAUvwnhDZXpXUoc7YNL7h7j6Y4o6lZnEPuWDy2lbuBO4NQ=s900-c-k-c0x00ffffff-no-rj', phone_number=1)
    db.session.add(duaLipa)

    camilaCabello = User(username='Camila', email="camila@gmail.com", f_name='Camila', hashed_password=generate_password_hash('hotdog'),
                    profile_pic='https://static.billboard.com/files/media/Camila-Cabello-press-by-Amanda-Charchian-2020-billboard-1548-compressed.jpg', phone_number=1)
    db.session.add(camilaCabello)

    barackObama = User(username='Barack', email='barack@whitehouse.gov', f_name='Barry-O', hashed_password=generate_password_hash('hotdog'),
                    profile_pic='https://static01.nyt.com/images/2021/06/03/opinion/03klein-lead/03klein-lead-jumbo-v2.jpg?quality=90&auto=webp', phone_number=1)
    db.session.add(barackObama)

    sia = User(username='sia', email='sia@music.com', f_name='Sia', hashed_password=generate_password_hash('hotdog'),
            profile_pic='https://images.toofab.com/image/07/o/2020/01/13/0718feb83731518da4892d3dcba227fb_md.jpg', phone_number=1)
    db.session.add(sia)

    elon = User(username='elon', email='elon@spacex.com', f_name='Elon', hashed_password=generate_password_hash('hotdog'),
                profile_pic='https://upload.wikimedia.org/wikipedia/commons/8/85/Elon_Musk_Royal_Society_%28crop1%29.jpg', phone_number=1)
    db.session.add(elon)

    b = User(username='b', email='b@salinas.com', f_name='b', hashed_password=generate_password_hash('hotdog'),
            profile_pic='https://res.cloudinary.com/dn2tap8j5/image/upload/v1623188778/second_degree/Screen_Shot_2021-06-08_at_4.45.44_PM_hnunoi.png', phone_number=1)
    db.session.add(b)

    christian = User(username='christian', email='christian@christian.com', f_name="Christian", hashed_password=generate_password_hash('hotdog'),
                profile_pic='https://avatars.githubusercontent.com/u/70053396?v=4')
    db.session.add(christian)

    jonathan = User(username='jonathan', email='jonathan@chan.com', f_name="Jonathan", hashed_password=generate_password_hash('hotdog'),
                profile_pic='https://avatars.githubusercontent.com/u/70030725?v=4')
    db.session.add(jonathan)

    schuler = User(username='schulerusa', email='schulerusa@gmail.com', f_name="Schuler", hashed_password=generate_password_hash('hotdog'),
                profile_pic='https://res.cloudinary.com/dn2tap8j5/image/upload/v1623362087/second_degree/122599574_1058601091220333_7459480928284465933_n_unsnru.jpg')
    db.session.add(schuler)

    jeffBezos = User(username='jeff', email='jeff@amazon.com', f_name="Jeff", hashed_password=generate_password_hash('hotdog'),
                profile_pic='https://cdn.cnn.com/cnnnext/dam/assets/210406172926-jeff-bezos-file-exlarge-169.jpg')
    db.session.add(jeffBezos)

    curtis = User(username='curtis', email='curtis@appacademy.com', f_name="Curtis", hashed_password=generate_password_hash('hotdog'),
                profile_pic='https://res.cloudinary.com/dn2tap8j5/image/upload/v1623525858/Screen_Shot_2021-06-12_at_2.23.27_PM_x35utj.png')
    db.session.add(curtis)

    pharrell = User(username='pharrell', email='pharrell@music.com', f_name="Pharrell", hashed_password=generate_password_hash('hotdog'),
                profile_pic='https://pbs.twimg.com/profile_images/1312106962193190912/UcEFcC6H.jpg')
    db.session.add(pharrell)

    kanyeWest = User(username='kanye', email='kanye@music.com', f_name="Kanye", hashed_password=generate_password_hash('hotdog'),
                profile_pic='https://thumbor.forbes.com/thumbor/fit-in/416x416/filters%3Aformat%28jpg%29/https%3A%2F%2Fspecials-images.forbesimg.com%2Fimageserve%2F5ed00f17d4a99d0006d2e738%2F0x0.jpg%3Fbackground%3D000000%26cropX1%3D154%26cropX2%3D4820%26cropY1%3D651%26cropY2%3D5314')
    db.session.add(kanyeWest)

    jessicaAlba = User(username='jessica', email='jessica@alba.com', f_name="Jessica", hashed_password=generate_password_hash('hotdog'),
                profile_pic='https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/gettyimages-1206310272.jpg?crop=1xw:0.7746212121212122xh;center,top&resize=640:*')
    db.session.add(jessicaAlba)

    shakira = User(username='shakira', email='shakira@hipsdontlie.com', f_name="Shakira", hashed_password=generate_password_hash('hotdog'),
                profile_pic='https://upload.wikimedia.org/wikipedia/commons/thumb/7/7f/Shakira.JPG/1200px-Shakira.JPG')
    db.session.add(shakira)

    meganFox = User(username='meganfox', email='megan@fox.com', f_name="Megan", hashed_password=generate_password_hash('hotdog'),
                profile_pic='https://images.hindustantimes.com/rf/image_size_630x354/HT/p2/2020/05/08/Pictures/_2a8f5960-90fb-11ea-b24e-c3981487abe8.jpg')
    db.session.add(meganFox)

    michaelJordan = User(username='jordan', email='michael@NBA.com', f_name="Michael", hashed_password=generate_password_hash('hotdog'),
                profile_pic='https://www.biography.com/.image/ar_1:1%2Cc_fill%2Ccs_srgb%2Cfl_progressive%2Cq_auto:good%2Cw_1200/MTY2Njc5NDYzOTQ4NDYxNDA4/michael-jordan.jpg')
    db.session.add(michaelJordan)

    stephCurry = User(username='steph', email='steph@NBA.com', f_name="Steph", hashed_password=generate_password_hash('hotdog'),
                profile_pic='https://i.guim.co.uk/img/media/fed6b1c830765b6dd4ac3a1c4be20d6fbfa52fd4/0_242_4567_2740/master/4567.jpg?width=1200&height=1200&quality=85&auto=format&fit=crop&s=9d02d1c8083d0b39240b1893ef8ccb77')
    db.session.add(stephCurry)

    jkRowling = User(username='jkRowling', email='jk@rowling.com', f_name="JK", hashed_password=generate_password_hash('hotdog'),
                profile_pic='https://i.guim.co.uk/img/media/d2069d0b781d083dae0f10d1093dc4a7b9531009/0_166_4487_2692/master/4487.jpg?width=1200&height=1200&quality=85&auto=format&fit=crop&s=31331830a8d4a7e0d34b1d30ecc09420')
    db.session.add(jkRowling)

    grimes = User(username='Grimes', email='grimes@music.com', f_name="Grimes", hashed_password=generate_password_hash('hotdog'),
                profile_pic='https://pyxis.nymag.com/v1/imgs/98f/141/097650b94d387b4f411a2da379b8ac7663-20-grimes.rsquare.w1200.jpg')
    db.session.add(grimes)

    marilynmanson = User(username='Marilyn', email='marilynmanson@music.com', f_name="Marilyn", hashed_password=generate_password_hash('hotdog'),
                profile_pic='https://deadline.com/wp-content/uploads/2021/02/AP21043694526843-e1613739718827.jpg')
    db.session.add(marilynmanson)

    jonstewart = User(username='Jon', email='jon@comedy.com', f_name="Jon", hashed_password=generate_password_hash('hotdog'),
                profile_pic='https://static.hollywoodreporter.com/sites/default/files/2020/01/jon_stewart-compressed.jpg')
    db.session.add(jonstewart)

    davechappelle = User(username='Dave', email='davechappelle@comedy.com', f_name="Dave", hashed_password=generate_password_hash('hotdog'),
                profile_pic='https://thumbor.forbes.com/thumbor/fit-in/1200x0/filters%3Aformat%28jpg%29/https%3A%2F%2Fspecials-images.forbesimg.com%2Fimageserve%2F5f9c6597fd97742aebc8b769%2F0x0.jpg')
    db.session.add(davechappelle)

    larryPage = User(username='Larry', email='larry@google.com', f_name="Larry", hashed_password=generate_password_hash('hotdog'),
                profile_pic='https://upload.wikimedia.org/wikipedia/commons/e/ec/Larry_Page_in_the_European_Parliament%2C_17.06.2009_%28cropped%29.jpg')
    db.session.add(larryPage)

    aubreyPlaza = User(username='aubrey', email='aubreyplaza@gmail.com', f_name="Aubrey", hashed_password=generate_password_hash('hotdog'),
                profile_pic='https://static.independent.co.uk/2021/04/20/17/newFile-5.jpg?width=982&height=726&auto=webp&quality=75')
    db.session.add(aubreyPlaza)

    alexMorgan = User(username='alex', email='alexmorgan@gmail.com', f_name="Alex", hashed_password=generate_password_hash('hotdog'),
                profile_pic='https://static.onecms.io/wp-content/uploads/sites/20/2021/02/22/alex-morgan-2000.jpg')
    db.session.add(alexMorgan)

    jenniferAniston = User(username='jennifer', email='jenniferaniston@gmail.com', f_name="Jennifer", hashed_password=generate_password_hash('hotdog'),
                profile_pic='https://m.media-amazon.com/images/M/MV5BNjk1MjIxNjUxNF5BMl5BanBnXkFtZTcwODk2NzM4Mg@@._V1_UY1200_CR103,0,630,1200_AL_.jpg')
    db.session.add(jenniferAniston)

    alisamelekhina = User(username='alisa', email='alisamelekhina@gmail.com', f_name="Alisa", hashed_password=generate_password_hash('hotdog'),
                profile_pic='https://upload.wikimedia.org/wikipedia/commons/8/88/FM_Alisa_Melekhina_L.jpg')
    db.session.add(alisamelekhina)

    kosteniuk = User(username='kosteniuk', email='alexandra@gmail.com', f_name="Alexandra", hashed_password=generate_password_hash('hotdog'),
                profile_pic='https://images.chesscomfiles.com/uploads/v1/images_users/tiny_mce/SARA_SA/phpVJJkb8.jpeg')
    db.session.add(kosteniuk)

    helenowen = User(username='helen', email='helenowen@gmail.com', f_name="Helen", hashed_password=generate_password_hash('hotdog'),
                profile_pic='https://www.byrdie.com/thmb/Z02w1bImeMO9IT8xBUmRnU4ADGc=/1200x900/filters:fill(auto,1)/promo5-e50600da94914424abff76f4db57828d.jpg')
    db.session.add(helenowen)

    helenmirren = User(username='helenm', email='helenmirren@gmail.com', f_name="Helen", hashed_password=generate_password_hash('hotdog'),
                profile_pic='https://m.media-amazon.com/images/M/MV5BMjA4MzY2ODU2MV5BMl5BanBnXkFtZTcwOTQ3ODY4OQ@@._V1_.jpg')
    db.session.add(helenmirren)

    kristinscottthomas = User(username='kristin', email='kristenthomas@gmail.com', f_name="Kristin", hashed_password=generate_password_hash('hotdog'),
                profile_pic='https://upload.wikimedia.org/wikipedia/commons/c/cd/Kristin_Scott_Thomas_Cabourg_2013.jpg')
    db.session.add(kristinscottthomas)

    emmawatson = User(username='emma', email='emma@watson.com', f_name="Emma", hashed_password=generate_password_hash('hotdog'),
                profile_pic='https://m.economictimes.com/thumb/height-450,width-600,imgsize-364466,msid-68885634/emmawatson.jpg')
    db.session.add(emmawatson)

    kristenstewart =  User(username='kristen', email='kristen@stewart.com', f_name="Kristen", hashed_password=generate_password_hash('hotdog'),
                profile_pic='https://media.vanityfair.com/photos/5f6b7629ffc33aecb21a23df/9:16/w_746,h_1327,c_limit/kristen.jpg')
    db.session.add(kristenstewart)

    frankocean =  User(username='frankocean', email='frank@ocean.com', f_name="Frank", hashed_password=generate_password_hash('hotdog'),
                profile_pic='https://dazedimg-dazedgroup.netdna-ssl.com/3000/azure/dazed-prod/1240/0/1240523.jpg')
    db.session.add(frankocean)

    tylerTheCreator =  User(username='tyler', email='tyler@creator.com', f_name="Tyler", hashed_password=generate_password_hash('hotdog'),
                profile_pic='https://images.complex.com/complex/images/c_fill,dpr_auto,f_auto,q_auto,w_1400/fl_lossy,pg_1/rq29ayh88lmv28nrslwt/tyler-the-creator?fimg-ssr-default')
    db.session.add(tylerTheCreator)

    asapRocky =  User(username='asapRocky', email='rocky@asap.com', f_name="ASAP", hashed_password=generate_password_hash('hotdog'),
                profile_pic='https://compote.slate.com/images/2503cf5f-09a1-4ec1-a0fa-5d941010544c.jpeg?width=780&height=520&rect=6000x4000&offset=0x0')
    db.session.add(asapRocky)

    laurynHill =  User(username='Ms. Lauryn Hill', email='lauryn@rocks.com', f_name="Lauryn", hashed_password=generate_password_hash('hotdog'),
                profile_pic='https://media.newyorker.com/photos/5acd1fe7cd7220727ab340e1/16:9/w_3664,h_2061,c_limit/St-Felix-Lauren-Hill.jpg')
    db.session.add(laurynHill)

    erykahBadu =  User(username='Erykah Badu', email='erykah@rocks.com', f_name="Erykah", hashed_password=generate_password_hash('hotdog'),
                profile_pic='https://media.npr.org/assets/img/2018/08/14/erykah-image_tonykrash_wide-6622594af14765da2c48d0365cc102e421d7f1f7.jpeg')
    db.session.add(erykahBadu)

    bobDylan =  User(username='Bob Dylan', email='bob@dylan.com', f_name="Bob", hashed_password=generate_password_hash('hotdog'),
                profile_pic='https://www.newstatesman.com/sites/default/files/styles/cropped_article_image/public/blogs_2014/11/2639080.jpg?itok=LnP-rBEe')
    db.session.add(bobDylan)

    hallieBerry =  User(username='Hallie Berry', email='hallie@berry.com', f_name="Hallie", hashed_password=generate_password_hash('hotdog'),
                profile_pic='https://upload.wikimedia.org/wikipedia/commons/6/67/Halle_Berry_%2835954866642%29_%28cropped%29.jpg')
    db.session.add(hallieBerry)

    niaLong =  User(username='Nia Long', email='nia@long.com', f_name="Nia", hashed_password=generate_password_hash('hotdog'),
                profile_pic='https://i.insider.com/5f11f5a25af6cc2b233fbd87?width=700')
    db.session.add(niaLong)

    zendaya =  User(username='Zendaya', email='zendaya@gmail.com', f_name="Zendaya", hashed_password=generate_password_hash('hotdog'),
                profile_pic='https://assets.teenvogue.com/photos/5b6a05a40128e376b7a79299/4:3/w_2792,h_2094,c_limit/tout-zendaya.jpg')
    db.session.add(zendaya)

    emrata =  User(username='emrata', email='emrata@gmail.com', f_name="Emily", hashed_password=generate_password_hash('hotdog'),
                profile_pic='https://assets.vogue.com/photos/60b93c7fdeeade9d50fa679b/master/w_2000,h_3000,c_limit/emrata.jpg')
    db.session.add(emrata)

    db.session.commit()

# Uses a raw SQL query to TRUNCATE the users table.
# SQLAlchemy doesn't have a built in function to do this
# TRUNCATE Removes all the data from the table, and resets
# the auto incrementing primary key
def undo_users():
    db.session.execute('TRUNCATE users RESTART IDENTITY CASCADE;')
    db.session.commit()
