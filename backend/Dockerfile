# pull official base image
FROM python:3.10

# set work directory
WORKDIR /usr/src/backend/backend

# set environment variables
ENV PYTHONDONTWRITEBYTECODE 1
ENV PYTHONUNBUFFERED 1

# install dependencies
RUN curl https://bootstrap.pypa.io/get-pip.py -o get-pip.py
RUN python3 get-pip.py
COPY requirements.txt /usr/src/backend/backend
RUN pip3 install awscli==1.18.92 # <--- Point of failure
RUN pip3 install -r requirements.txt

# copy project
COPY . .

EXPOSE 8080
# Use 0.0.0 as the listen address vvvvvvv
CMD ["./backend/manage.py", "runserver", "0.0.0.0:8080"]