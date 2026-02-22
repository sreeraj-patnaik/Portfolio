from django.urls import path
from django.views.generic import TemplateView

urlpatterns = [
    path("", TemplateView.as_view(template_name="index.html"), name="home"),
    path("index.html", TemplateView.as_view(template_name="index.html"), name="index"),
    path("blog.html", TemplateView.as_view(template_name="blog.html"), name="blog"),
    path(
        "Build-a-Working-Computer-in-Minecraft-to-Play-Minecraft-in-Minecraft.html",
        TemplateView.as_view(
            template_name="Build-a-Working-Computer-in-Minecraft-to-Play-Minecraft-in-Minecraft.html"
        ),
        name="minecraft_blog",
    ),
    path(
        "From-Wheels-to-Wings-The-story-of-Clubs-revival-at-Lendi.html",
        TemplateView.as_view(
            template_name="From-Wheels-to-Wings-The-story-of-Clubs-revival-at-Lendi.html"
        ),
        name="wheels_to_wings",
    ),
    path("CodeTech.html", TemplateView.as_view(template_name="CodeTech.html"), name="codetech"),
    path("codetech.html", TemplateView.as_view(template_name="CodeTech.html")),
    path("stories.html", TemplateView.as_view(template_name="stories.html"), name="stories"),
    path("cll.html", TemplateView.as_view(template_name="cll.html"), name="cll"),
    path(
        "googlecae3d3c189b8a388.html",
        TemplateView.as_view(template_name="googlecae3d3c189b8a388.html", content_type="text/html"),
        name="google_verification",
    ),
    path(
        "robots.txt",
        TemplateView.as_view(template_name="robots.txt", content_type="text/plain"),
        name="robots",
    ),
    path(
        "sitemap.xml",
        TemplateView.as_view(template_name="sitemap.xml", content_type="application/xml"),
        name="sitemap",
    ),
]
