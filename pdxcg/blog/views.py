from django.shortcuts import render


def blog_list(request):
    return render(request, 'blog_list.html', {})