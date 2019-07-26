from django.db import models
from django.utils import timezone


class Post(models.Model):
    author = models.ForeignKey('auth.User', on_delete=models.CASCADE)
    title = models.CharField(max_length=200)
    text = models.TextField()
    created_date = models.DateTimeField(
            default=timezone.now)
    published_date = models.DateTimeField(
            blank=True, null=True)

    def publish(self):
        self.published_date = timezone.now()
        self.save()

    def __str__(self):
        return self.title

class CommentModel(models.Model):
    author = models.ForeignKey('auth.User', on_delete=models.CASCADE)
    target_post = models.ForeignKey(Post, on_delete=models.SET_NULL, null=True)
    comment = models.TextField(blank=True, null=True)
    published_date = models.DateTimeField(auto_now_add=True)

"""
class Article(models.Model):
    title = models.CharField(max_length=300, blank=True, null=True)
    cotents_text = models.TextField(blank=True, null=True)
    pubdate = models.DateTimeField(auto_now_add=True)
"""
"""
class Post(models.Model):
    author = models.ForeignKey(User, on_delete=models.CASCADE)
    title = models.CharField(max_length=50)
    body = models.TextField()
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)

    def __str__(self):
        return self.title
"""
