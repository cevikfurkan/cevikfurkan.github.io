from django.shortcuts import render, redirect
from django.contrib.auth import login, logout, authenticate
from django.contrib.auth.models import User

# Create your views here.


def loginUser(request):
    context = {"title": "Login"}
    if request.method == "POST":
        username = request.POST["username"]
        password = request.POST["password"]
        
        user = authenticate(username = username, password = password)
        if user is not None:
            login(request,user)
            return redirect('/allProjects/')
        else:
            hata = "Kullanıcı adı veya şifre hatalı!"
            context.update({"hata": hata})
            
    return render(request, "users/login.html", context)

def registerUser(request):
    context = {"title": "Sign in"}
    
    if request.method == "POST":
        name = request.POST["name"]
        surname = request.POST["surname"]
        email = request.POST["email"]
        username = request.POST["username"]
        password1 = request.POST["password1"]
        password2 = request.POST["password2"]

        if password1==password2:
            if not User.objects.filter(username=username).exists():
                if not User.objects.filter(email=email).exists():
                    user = User.objects.create_user(first_name=name, last_name=surname, email=email, username=username, password=password1)
                    user.save()
                    return redirect('/login/')
                else:
                    hata = "Bu email adresi bir kullanıcıya ait!"
                    context.update({"hata": hata})
            else:
                hata = "Bu kullanıcı adı zaten kullanılıyor!"
                context.update({"hata": hata})
        else:
            hata = "Şifreler aynı değil!"
            context.update({"hata": hata})
    
    return render(request, 'users/register.html', context)

def logoutUser(request):
    logout(request)
    return redirect('/')