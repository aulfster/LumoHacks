from django.contrib import admin

from .models import MessageTable

class MessageTableAdmin(admin.ModelAdmin):
    list_display = ['userFrom', 'userTo', 'message']

admin.site.register(MessageTable, MessageTableAdmin)