from django.shortcuts import render
from .models import Team, Advisors


def home(request):
    return render(request, 'home.html', {})


def about(request):
    team = Team.objects.all()
    advisors = Advisors.objects.all()
    return render(request, 'about_us.html', {'team': team, 'advisors':advisors})


def courses(request):
    return render(request, 'courses.html', {})


def contact(request):
    return render(request, 'contact_us.html', {})


def apply(request):
    return render(request, 'apply.html', {})


def schedule(request):
    return render(request, 'schedule_apt.html', {})