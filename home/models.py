from django.db import models

# Create your models here.
class Job(models.Model):
    """Model for jobs"""
    title = models.CharField(max_length=200, null=True)
    image = models.ImageField(upload_to='images/')
    live_url = models.URLField()
    github_url = models.URLField()
    tech = models.CharField(max_length=200)

    def __str__(self):
        return f"{self.title} ({self.tech})"
    