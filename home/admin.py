from django.contrib import admin

# Register your models here.
from .models import Job


@admin.register(Job)
class WebpageContentAdmin(admin.ModelAdmin):
    list_display = ('title', 'live_url', 'github_url', 'tech')
    search_fields = ('title', 'github_url', 'tech')
    