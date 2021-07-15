from flask import Blueprint, request
from flask_login import login_required, current_user
from app.models import Message
from app.models import db

message_routes = Blueprint('messages', __name__)

@message_routes.route('/<int:id>/')
# @login_required
def messages(id):
    print(id)
    messagesSender = Message.query.filter(Message.recipient_id == id, Message.sender_id == current_user.id).all()
    messagesRecipient = Message.query.filter(Message.recipient_id == current_user.id, Message.sender_id == id).all()
    print(messagesSender, messagesRecipient, 'HEEEEEYEEYYYEY')
    messages = messagesSender + messagesRecipient
    return {"messages": [message.to_dict() for message in messages]}

@message_routes.route('/', methods = ['POST'])
# @login_required
def postMessage():
    message = Message(sender_id=request.json["sender_id"], recipient_id=request.json["recipient_id"], content=request.json["content"])
    db.session.add(message)
    db.session.commit()
    messages = Message.query.all()
    return message.to_dict()
