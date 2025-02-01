from django.shortcuts import render
from rest_framework import viewsets
from .serializers import TodoSerializer
from .models import Todo
from django.views.decorators.csrf import csrf_exempt
from django.http import HttpResponse
import time, json
import smtplib, ssl
from email.mime.text import MIMEText
from email.mime.multipart import MIMEMultipart
import ssl
ssl._create_default_https_context = ssl._create_unverified_context

# Create your views here.

class TodoView(viewsets.ModelViewSet):
    serializer_class = TodoSerializer
    queryset = Todo.objects.all()

def home(request):
    data = json.loads(request.body.decode('utf-8'))
    print(data)

@csrf_exempt
def sendEmail(request):
    print(request)
    data = json.loads(request.body.decode('utf-8'))
    print(data)
    contact_name = data["name"]
    email = data["email"]
    emailMessage = data["comment"]
    perspective = data["dropDownSelect"]

    sender_email = "concordat1166@gmail.com"
    receiver_email = "Info@revenue3.net"
    # receiver_email = "cofax48@aol.com"
    password = "wsavytoraooobvbn"

    message = MIMEMultipart("alternative")
    message["Subject"] = f"{contact_name} is looking for {perspective} from Revenue3"
    message["From"] = sender_email
    message["To"] = receiver_email

    # Create the plain-text and HTML version of your message
    html = f"<html><body><p>Hi Josh,<br><br> {contact_name} has gotten in touch<br><br>They have shared their email: {email} <br><br>They are looking for: {perspective} <br><br>And have passed this note along: {emailMessage} <br></p></body></html>"
    print(html)
    # Turn these into plain/html MIMEText objects
    part2 = MIMEText(html, "html")

    # Add HTML/plain-text parts to MIMEMultipart message
    # The email client will try to render the last part first
    message.attach(part2)

    # Create secure connection with server and send email
    context = ssl.create_default_context()
    with smtplib.SMTP_SSL("smtp.gmail.com", 465, context=context) as server:
        server.login(sender_email, password)
        server.sendmail(
            sender_email, receiver_email, message.as_string()
        )

    # pollId = data["pollId"]
    return HttpResponse(status=200)