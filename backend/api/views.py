from django.shortcuts import render
from django.http import HttpResponse

# Create your views here.
def home(request):
    return HttpResponse("this is home page")

def about(request):
    return HttpResponse("this is about page")

def create(request):
    return HttpResponse("this is create page")