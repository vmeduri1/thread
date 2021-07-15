from flask_socketio import SocketIO, emit
import os
from .models import db, Message


# configure cors_allowed_origins
if os.environ.get('FLASK_ENV') == 'production':
    origins = [
        'http://actual-app-url.herokuapp.com',
        'https://actual-app-url.herokuapp.com'
    ]
else:
    origins = "*"

# initialize your socket instance
socketio = SocketIO(cors_allowed_origins=origins)


# handle chat messages
# @socketio.on("chat")
# def handle_chat(data):
#     emit("chat", data, broadcast=True)

#handle chat
@socketio.on("chat")
def handle_chat(data):
    # print(data["channel_id"])
    print('HIT THE ROUTE', data)
    new_message = Message(
        sender_id=data['sender_id'],
        recipient_id=data['recipient_id'],
        content=data['content']
        # created_at=data['created_at'],
        # updated_at=data['updated_at']
    )
    db.session.add(new_message)
    db.session.commit()
    # messages = Message.query.filter(Message.sender_id == data['sender_id'], Message.recipient_id == data['recipient_id']).all()
    # ourMsg = messages[len(messages) - 1]
    # data['id'] = ourMsg.id
    # input: sender_id and recipient_id
    # output: 'sender_id_recipient_id' or 'recipient_id_sender_id'
    if new_message.sender_id < new_message.recipient_id:
        channel_id = f'{new_message.sender_id}_{new_message.recipient_id}'
    else:
        channel_id = f'{new_message.recipient_id}_{new_message.sender_id}'
    print(channel_id, 'BACKEND CHANNEL_ID')
    emit(channel_id, new_message.to_dict(), broadcast=True)
