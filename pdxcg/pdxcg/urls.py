"""pdxcg URL Configuration

The `urlpatterns` list routes URLs to views. For more information please see:
    https://docs.djangoproject.com/en/1.10/topics/http/urls/
Examples:
Function views
    1. Add an import:  from my_app import views
    2. Add a URL to urlpatterns:  url(r'^$', views.home, name='home')
Class-based views
    1. Add an import:  from other_app.views import Home
    2. Add a URL to urlpatterns:  url(r'^$', Home.as_view(), name='home')
Including another URLconf
    1. Import the include() function: from django.conf.urls import url, include
    2. Add a URL to urlpatterns:  url(r'^blog/', include('blog.urls'))
"""
from django.conf.urls import url
from django.contrib import admin
from django.conf import settings
from django.conf.urls.static import static
from pages.views import home, about, courses, contact, apply, schedule
from blog.views import blog_list


urlpatterns = [
    url(r'^admin/', admin.site.urls),
    url(r'^$', home, name='home'),
    url(r'^about_pdx_code_guild/$', about, name='about'),
    url(r'^pdx_code_guild_courses/$', courses, name='courses'),
    url(r'^code_pdx_guild_blog/$', blog_list, name='blog'),
    url(r'^contact_pdx_code_guild/$', contact, name='contact'),
    url(r'^apply_to_pdx_code_guild/$', apply, name='apply'),
    url(r'^schedule_appointment_pdx_code_guild/$', schedule, name='schedule'),
] + static(settings.STATIC_URL, document_root=settings.STATIC_ROOT) + static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)
