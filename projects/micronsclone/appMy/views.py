from django.shortcuts import render
from .models import *

# Create your views here.


def index(request):
    context={}
    
    category_se = Category.objects.get(title="Sell")
    projects_se = Project.objects.filter(category=category_se)
    category_so = Category.objects.get(title="Sold")
    projects_so = Project.objects.filter(category=category_so)

    context.update({
        "projects_se": projects_se,
        "projects_so": projects_so,
    })
    return render(request, 'index.html', context)

def allProjects(request):
    context={"title": "All Projects"}
    
    category_se = Category.objects.get(title="Sell")
    projects_se = Project.objects.filter(category=category_se)
    category_so = Category.objects.get(title="Sold")
    projects_so = Project.objects.filter(category=category_so)

    context.update({
        "projects_se": projects_se,
        "projects_so": projects_so,
    })
    return render(request, 'projects.html', context)