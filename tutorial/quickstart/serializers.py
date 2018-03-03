from django.contrib.auth.models import User, Group
from models import Course, Curriculum, Degreeprogram, Implementation, Room, RoomImp, Teacher, TeacherImp, TeacherDegreeprogram, Subgroup, SubgroupImp
from rest_framework import serializers

class UserSerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = User
        fields = ('url', 'username', 'email', 'groups')

class GroupSerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = Group
        fields = ('url', 'name')

class CourseSerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = Course
        fields = ('url', 'code', 'name', 'changes', 'languages', 'credit', 'amount', 'p1', 'p2', 'p3', 'p4', 'p5', 'total', 'curriculumid')

class CurriculumSerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = Curriculum
        fields = ('url', 'name', 'degreeprogramid')

class DegreeprogramSerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = Degreeprogram
        fields = ('url', 'code', 'name')

class ImplementationSerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = Implementation
        fields = ('url', 'courseid')

class RoomSerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = Room
        fields = ('url', 'code', 'seats', 'topic')

class RoomImpSerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = RoomImp
        fields = ('url', 'roomid', 'implementationid')

class TeacherSerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = Teacher
        fields = ('url', 'code', 'name')

class TeacherImpSerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = TeacherImp
        fields = ('url', 'name', 'degreeprogramid')

class TeacherDegreeprogramSerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = TeacherDegreeprogram
        fields = ('url', 'teacherid', 'degreeprogramid')

class SubgroupSerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = Subgroup
        fields = ('url', 'code', 'department', 'groupid','degreeprogramid')

class SubgroupImpSerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = SubgroupImp
        fields = ('url', 'subgroupid', 'implementationid')