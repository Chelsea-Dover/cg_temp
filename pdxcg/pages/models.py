from django.db import models
from django.utils.text import slugify


def img_upload_handler(instance, filename):
    return "{name}/img/{file}".format(name=slugify(instance.name), file=slugify(filename))


class Team(models.Model):
    img = models.ImageField(upload_to=img_upload_handler)
    name = models.CharField(max_length=255)
    optional_tag_under_name = models.CharField(max_length=255, blank=True)
    title = models.CharField(max_length=255)
    email = models.EmailField(blank=True)
    facebook = models.URLField(blank=True)
    twitter = models.URLField(blank=True)
    github = models.URLField(blank=True)
    company_name = models.CharField(max_length=255, blank=True)
    company_url = models.URLField(blank=True)
    bio = models.TextField()

    def __str__(self):
        return self.name


class Advisors(models.Model):
    img = models.ImageField(upload_to=img_upload_handler)
    name = models.CharField(max_length=255)
    optional_tag_under_name = models.CharField(max_length=255, blank=True)
    title = models.CharField(max_length=255)
    email = models.EmailField(blank=True)
    facebook = models.URLField(blank=True)
    twitter = models.URLField(blank=True)
    github = models.URLField(blank=True)
    company_name = models.CharField(max_length=255, blank=True)
    company_url = models.URLField(blank=True)
    bio = models.TextField()

    def __str__(self):
        return self.name
