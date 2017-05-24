# -*- coding: utf-8 -*-
# Generated by Django 1.10.6 on 2017-04-18 13:52
from __future__ import unicode_literals

from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='Divisions',
            fields=[
                ('Id', models.AutoField(primary_key=True, serialize=False)),
                ('DivisionName', models.TextField()),
                ('IsHidden', models.BooleanField(default=False)),
            ],
        ),
    ]