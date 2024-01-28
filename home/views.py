from django.shortcuts import render
from .models import Job
# Create your views here.


def index(request):
    """ A view to return the index page """
    jobs = Job.objects.all()
    return render(request, 'home/index.html', {'jobs': jobs})
