from django.urls import path
from . import views
from .views import PostList, PostDetail

urlpatterns = [
    #path('', views.post_list, name='post_list'),
    #path('post/<int:pk>/', views.post_detail, name='post_detail'),
    #path('post/new', views.post_new, name='post_new'),
    path('<int:pk>/', PostDetail.as_view()),
    path('', PostList.as_view()),
]
