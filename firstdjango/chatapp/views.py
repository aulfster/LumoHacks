from django.shortcuts import render
from django.http import HttpResponse, Http404

from chatapp.models import MessageTable

# Create your views here.

def index(request):
    return render(request, 'chatapp/index1.html')

#def index(request):
 #   messages = MessageTable.objects.all()
  #  return render(request, 'chatapp/index.html', {
   #     'messages':messages,
    #})
    #return HttpResponse("hey")

def recipes(request):
    return render(request, 'chatapp/recipes.html')

def recipe_submit(request):
    return render(request, 'chatapp/recipe_submit.html')

def user_received_messages(request, userFrom):
    return HttpResponse('<p>User id requested: {0}</p>'.format(userFrom))