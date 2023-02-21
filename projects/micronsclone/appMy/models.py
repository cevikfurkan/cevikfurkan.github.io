from django.db import models
from django.contrib.auth.models import User

# Create your models here.

class Category(models.Model):
    title = models.CharField(("Sell or Sold"), max_length=50)
    
    def __str__(self):
        return self.title

class Project(models.Model):
    category = models.ForeignKey(Category, verbose_name=("Sell or Sold"), on_delete=models.CASCADE, null=True)
    title = models.CharField(("Proje Başlığı"), max_length=50)
    text = models.TextField(("Proje Özellikleri"), max_length=500)
    text2 = models.TextField(("Yıllık Geliri"), max_length=50)
    text3 = models.TextField(("Kullanıcı Sayısı"), max_length=50)
    text4 = models.TextField(("Kategorisi"), max_length=50)
    text5 = models.TextField(("Proje Tarihi"), max_length=50)
    text6 = models.TextField(("Kapanış Fiyatı"), max_length=50)
    image = models.FileField(("Proje Fotoğrafı"), upload_to='', max_length=100, null=True)
    
    def __str__(self):
        return self.title