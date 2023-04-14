# -*- coding: utf-8 -*-
# Generated by Django 3.2.3 on 2021-08-10 23:04
from __future__ import unicode_literals


import collections
from django.db import migrations, models
import jsonfield.fields
import uuid


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='CustomerData',
            fields=[
                ('id', models.UUIDField(default=uuid.uuid4, editable=False, primary_key=True, serialize=False)),
                ('data', jsonfield.fields.JSONField(blank=True, load_kwargs={'object_pairs_hook': collections.OrderedDict}, null=True)),
            ],
        ),
    ]