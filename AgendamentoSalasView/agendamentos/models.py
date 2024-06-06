from django.db import models

class agendamentos(models.Model):
    titulo = models.CharField(max_length=50)
    descricao = models.TextField(max_length=500)
    logo = models.ImageField(upload_to="logo/")

    def __str__(self):
        return self.titulo
    

class disponibilidadeC(models.Model):
    tipo = models.CharField(max_length=15)
    disponibilidade = models.IntegerField()
    descricao = models.TextField(max_length=255)
    foto_sala = models.ImageField(upload_to="Foto_Sala/")
    # data_reserva = models.DateTimeField(default=datetime.datetime.now)

    def __str__(self):
        return self.tipo

class usuario(models.Model):
    nome = models.CharField(max_length=20)
    sobrenome = models.CharField(max_length=20)
    email = models.CharField(max_length=50)
    sala = models.CharField(max_length=4)
    data = models.CharField(max_length=10)

    def __str__(self):
        return self.nome
    
class cadastro(models.Model):
    nome = models.CharField(max_length=100)
    sobrenome = models.CharField(max_length=100)
    usuario = models.CharField(max_length=100)
    email = models.EmailField(max_length=50)
    senha = models.CharField(max_length=50)

    
    def __str__(self):
        return self.nome
    
# class user(models.Model):
#     nome = models.CharField(max_length=15)
#     sobrenome= models.IntegerField()
#     email = models.FloatField(max_length=4)

# class listaReserva(models.Model):
#     tipo = models.CharField(max_length=15)
#     disponibilidade = models.IntegerField()
#     descricao = models.TextField(max_length=255)
#     foto_sala = models.ImageField(upload_to="Foto_Quarto/")