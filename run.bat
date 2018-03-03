echo off
set PATH=%PATH%;Y:\staff\_tka\PortableGit\bin;Y:\staff\_tka\python;Y:\staff\_tka\python\Scripts
python manage.py createsuperuser
python manage.py migrate
python manage.py runserver 0.0.0.0:8000