# Generated by Django 2.0.1 on 2018-05-16 03:48

import django.contrib.postgres.fields.jsonb
import django.core.serializers.json
from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('core', '0006_auto_20180301_2112'),
    ]

    operations = [
        migrations.CreateModel(
            name='CspReport',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('created_at', models.DateTimeField(auto_now_add=True)),
                ('updated_at', models.DateTimeField(auto_now=True)),
                ('report', django.contrib.postgres.fields.jsonb.JSONField(encoder=django.core.serializers.json.DjangoJSONEncoder)),
            ],
            options={
                'abstract': False,
            },
        ),
    ]
