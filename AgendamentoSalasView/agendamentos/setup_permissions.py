
from django.contrib.auth.models import Group, Permission
from django.contrib.contenttypes.models import ContentType

# Primeiro, obtenha ou crie o grupo "Coordenadores"
group, created = Group.objects.get_or_create(name='Coordenadores')

# Em seguida, atribua as permissões necessárias a esse grupo
content_type = ContentType.objects.get_for_model()  # Substitua SeuModelo pelo modelo relevante
permission = Permission.objects.get(content_type=content_type, codename='pode_acessar_disponibilidade')  # Substitua 'pode_acessar_disponibilidade' pela permissão relevante
group.permissions.add(permission)
