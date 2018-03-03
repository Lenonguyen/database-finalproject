from django.contrib.auth.models import User, Group
from models import Course, Curriculum, Degreeprogram, Implementation, Room, RoomImp, Teacher, TeacherImp, TeacherDegreeprogram, Subgroup, SubgroupImp
from rest_framework import viewsets
from tutorial.quickstart.serializers import UserSerializer, GroupSerializer, CourseSerializer, CurriculumSerializer, DegreeprogramSerializer, ImplementationSerializer, RoomSerializer, RoomImpSerializer, TeacherSerializer, TeacherImpSerializer, TeacherDegreeprogramSerializer, SubgroupSerializer, SubgroupImpSerializer

class UserViewSet(viewsets.ModelViewSet):
    """ 
    API endpoint that allows users to be viewed or edited.
    """ 
    queryset = User.objects.all().order_by('-date_joined')
    serializer_class = UserSerializer

class GroupViewSet(viewsets.ModelViewSet):
    """ 
    API endpoint that allows groups to be viewed or edited.
    """ 
    queryset = Group.objects.all()
    serializer_class = GroupSerializer

class CourseViewSet(viewsets.ModelViewSet):
    """
    API endpoint that allows jobs to be viewed or edited.
    """
    queryset = Course.objects.all()
    serializer_class = CourseSerializer

class CurriculumViewSet(viewsets.ModelViewSet):
    """
    API endpoint that allows books to be viewed or edited.
    """
    queryset = Curriculum.objects.all()
    serializer_class = CurriculumSerializer

class DegreeprogramViewSet(viewsets.ModelViewSet):
    """
    API endpoint that allows jobs to be viewed or edited.
    """
    queryset = Degreeprogram.objects.all()
    serializer_class = DegreeprogramSerializer

class ImplementationViewSet(viewsets.ModelViewSet):
    """
    API endpoint that allows books to be viewed or edited.
    """
    queryset = Implementation.objects.all()
    serializer_class = ImplementationSerializer

class RoomViewSet(viewsets.ModelViewSet):
    """
    API endpoint that allows jobs to be viewed or edited.
    """
    queryset = Room.objects.all()
    serializer_class = RoomSerializer

class RoomImpViewSet(viewsets.ModelViewSet):
    """
    API endpoint that allows books to be viewed or edited.
    """
    queryset = RoomImp.objects.all()
    serializer_class = RoomImpSerializer

class TeacherViewSet(viewsets.ModelViewSet):
    """
    API endpoint that allows jobs to be viewed or edited.
    """
    queryset = Teacher.objects.all()
    serializer_class = TeacherSerializer

class TeacherImpViewSet(viewsets.ModelViewSet):
    """
    API endpoint that allows books to be viewed or edited.
    """
    queryset = TeacherImp.objects.all()
    serializer_class = TeacherImpSerializer

class TeacherDegreeprogramViewSet(viewsets.ModelViewSet):
    """
    API endpoint that allows books to be viewed or edited.
    """
    queryset = TeacherDegreeprogram.objects.all()
    serializer_class = TeacherDegreeprogramSerializer

class SubgroupViewSet(viewsets.ModelViewSet):
    """
    API endpoint that allows jobs to be viewed or edited.
    """
    queryset = Subgroup.objects.all()
    serializer_class = SubgroupSerializer

class SubgroupImpViewSet(viewsets.ModelViewSet):
    """
    API endpoint that allows books to be viewed or edited.
    """
    queryset = SubgroupImp.objects.all()
    serializer_class = SubgroupImpSerializer