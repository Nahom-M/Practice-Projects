Active virtual environment:
.\venv\Scripts\Activate
python manage.py runserver

--Setup database
python manage.py makemigrations (whenever updating database)
python manage.py migrate

--Admin interface
python manage.py createsuperuser
admin
admin@example.com
1234