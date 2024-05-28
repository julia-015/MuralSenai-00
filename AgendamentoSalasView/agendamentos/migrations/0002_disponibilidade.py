# Generated by Django 5.0.6 on 2024-05-28 11:11

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('agendamentos', '0001_initial'),
    ]

    operations = [
        migrations.CreateModel(
            name='disponibilidade',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('tipo', models.CharField(max_length=15)),
                ('disponibilidade', models.IntegerField()),
                ('descricao', models.TextField(max_length=255)),
                ('foto_sala', models.ImageField(upload_to='Foto_Quarto/')),
            ],
        ),
    ]
