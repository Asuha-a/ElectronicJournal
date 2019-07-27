from django.urls import path, re_path
from . import views
from .views import *
from django.views.generic import TemplateView

urlpatterns = [
    #path('', views.post_list, name='post_list'),
    #path('post/<int:pk>/', views.post_detail, name='post_detail'),
    #path('post/new', views.post_new, name='post_new'),
    path('comment/', CommentAPIView.as_view(), name='comment'),
    path('<int:pk>/', PostDetail.as_view()),
    path('', PostList.as_view()),
    path('detail/<int:pk>/', PostDetailAPIView.as_view(), name='detail'),
    #re_path('.*', TemplateView.as_view(template_name='index.html'))
]
