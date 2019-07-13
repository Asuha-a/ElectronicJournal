from rest_framework import serializers
from .models import *
from rest_framework.serializers import SerializerMethodField
#from .api.serializers import *

class PostSerializer(serializers.ModelSerializer):

    class Meta:
        fields = ('id', 'author', 'title', 'text', 'created_date', 'published_date', )
        model = Post

class CommentSerializer(serializers.ModelSerializer):
    class Meta:
        fields = ('id', 'author', 'target_post', 'comment', 'published_date', )
        model = CommentModel

class CommentChildSerializer(serializers.ModelSerializer):
    class Meta:
        model = CommentModel
        fields = [
            'id',
            'author',
            'target_post',
            'comment',
            'published_date',
        ]



class PostDetailSerializer(serializers.ModelSerializer):
    comments = SerializerMethodField() #このフィールドを加えると下記のように出力する値を操作できます。
    class Meta:
        model = Post
        fields = [
            'id',
            'author',
            'title',
            'text',
            'created_date',
            'published_date',
            'comments', #モデルには存在しない追加する新フィールド
        ]

    def get_comments(self, obj):
        try:
            comment_abstruct_contents = CommentChildSerializer(Comment.objects.all().filter(target_post = Post.objects.get(id=obj.id)), many=True).data
            #↑ここを"Comment.objects.all().filter(target_article = Article.objects.get(id=obj.id)"
            #とだけにすると、"Item is not JSON serializable"というエラーが出ますので
            #Serializer(出力させたいもの).data　という処理が必要です。
            return comment_abstruct_contents
        except:
            comment_abstruct_contents = None
            return comment_abstruct_contents
