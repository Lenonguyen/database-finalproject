from django.conf.urls import url, include
from rest_framework import routers
from tutorial.quickstart import views

router = routers.DefaultRouter()
router.register(r'users', views.UserViewSet)
router.register(r'groups', views.GroupViewSet)
router.register(r'courses', views.CourseViewSet)
router.register(r'curriculums', views.CurriculumViewSet)
router.register(r'degreeprograms', views.DegreeprogramViewSet)
router.register(r'implementations', views.ImplementationViewSet)
router.register(r'rooms', views.RoomViewSet)
router.register(r'roomimps', views.RoomImpViewSet)
router.register(r'teachers', views.TeacherViewSet)
router.register(r'teacherimps', views.TeacherImpViewSet)
router.register(r'teacherdegreeprograms', views.TeacherDegreeprogramViewSet)
router.register(r'subgroups', views.SubgroupViewSet)
router.register(r'subgroupimps', views.SubgroupImpViewSet)

# Wire up our API using automatic URL routing.
# Additionally, we include login URLs for the browsable API.
urlpatterns = [
    url(r'^', include(router.urls)),
    url(r'^api-auth/', include('rest_framework.urls', namespace='rest_framework'))
]