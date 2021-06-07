from flask_wtf import FlaskForm
from wtforms import StringField
from wtforms.validators import DataRequired, Email, ValidationError
from flask_login import current_user

class UpdateForm(FlaskForm):
    username = StringField('username', validators=[DataRequired()])
    email = StringField('email', validators=[DataRequired()])
    password = StringField('password')
    f_name = StringField('f_name', validators=[DataRequired()])
    l_name = StringField('l_name')
    phone_number = StringField('phone_number')
    profile_pic = StringField('profile_pic')
