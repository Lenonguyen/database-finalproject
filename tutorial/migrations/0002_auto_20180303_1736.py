# -*- coding: utf-8 -*-
# Generated by Django 1.11.8 on 2018-03-03 15:36
from __future__ import unicode_literals

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('tutorial', '0001_initial'),
    ]

    operations = [
        migrations.CreateModel(
            name='Course',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('code', models.CharField(db_column='Code', max_length=255)),
                ('name', models.CharField(blank=True, db_column='Name', max_length=255, null=True)),
                ('changes', models.CharField(blank=True, db_column='Changes', max_length=255, null=True)),
                ('languages', models.CharField(blank=True, db_column='Languages', max_length=255, null=True)),
                ('credit', models.IntegerField(blank=True, db_column='Credit', null=True)),
                ('amount', models.IntegerField(blank=True, db_column='Amount', null=True)),
                ('p1', models.IntegerField(blank=True, db_column='P1', null=True)),
                ('p2', models.IntegerField(blank=True, db_column='P2', null=True)),
                ('p3', models.IntegerField(blank=True, db_column='P3', null=True)),
                ('p4', models.IntegerField(blank=True, db_column='P4', null=True)),
                ('p5', models.IntegerField(blank=True, db_column='P5', null=True)),
                ('total', models.IntegerField(blank=True, db_column='Total', null=True)),
                ('curriculumid', models.IntegerField(db_column='Curriculumid')),
            ],
            options={
                'db_table': 'Course',
                'managed': False,
            },
        ),
        migrations.CreateModel(
            name='Curriculum',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('name', models.CharField(blank=True, db_column='Name', max_length=255, null=True)),
                ('degreeprogramid', models.IntegerField(db_column='Degreeprogramid')),
            ],
            options={
                'db_table': 'Curriculum',
                'managed': False,
            },
        ),
        migrations.CreateModel(
            name='Degreeprogram',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('code', models.CharField(db_column='Code', max_length=255, unique=True)),
                ('name', models.CharField(blank=True, db_column='Name', max_length=255, null=True)),
            ],
            options={
                'db_table': 'Degreeprogram',
                'managed': False,
            },
        ),
        migrations.CreateModel(
            name='Implementation',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('courseid', models.IntegerField(db_column='Courseid')),
            ],
            options={
                'db_table': 'Implementation',
                'managed': False,
            },
        ),
        migrations.CreateModel(
            name='Room',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('code', models.CharField(db_column='Code', max_length=255, unique=True)),
                ('seats', models.IntegerField(blank=True, db_column='Seats', null=True)),
                ('topic', models.CharField(blank=True, db_column='Topic', max_length=255, null=True)),
            ],
            options={
                'db_table': 'Room',
                'managed': False,
            },
        ),
        migrations.CreateModel(
            name='RoomImp',
            fields=[
                ('roomid', models.IntegerField(db_column='Roomid', primary_key=True, serialize=False)),
                ('implementationid', models.IntegerField(db_column='Implementationid')),
            ],
            options={
                'db_table': 'Room_imp',
                'managed': False,
            },
        ),
        migrations.CreateModel(
            name='Subgroup',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('code', models.CharField(db_column='Code', max_length=255, unique=True)),
                ('department', models.IntegerField(blank=True, db_column='Department', null=True)),
                ('groupid', models.IntegerField(db_column='Groupid')),
                ('degreeprogramid', models.IntegerField(db_column='Degreeprogramid')),
            ],
            options={
                'db_table': 'subGroup',
                'managed': False,
            },
        ),
        migrations.CreateModel(
            name='SubgroupImp',
            fields=[
                ('subgroupid', models.IntegerField(db_column='subGroupid', primary_key=True, serialize=False)),
                ('implementationid', models.IntegerField(db_column='Implementationid')),
            ],
            options={
                'db_table': 'subGroup_imp',
                'managed': False,
            },
        ),
        migrations.CreateModel(
            name='Teacher',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('code', models.CharField(db_column='Code', max_length=255, unique=True)),
                ('name', models.CharField(blank=True, db_column='Name', max_length=255, null=True)),
            ],
            options={
                'db_table': 'Teacher',
                'managed': False,
            },
        ),
        migrations.CreateModel(
            name='TeacherDegreeprogram',
            fields=[
                ('teacherid', models.IntegerField(db_column='Teacherid', primary_key=True, serialize=False)),
                ('degreeprogramid', models.IntegerField(db_column='Degreeprogramid')),
            ],
            options={
                'db_table': 'Teacher_degreeprogram',
                'managed': False,
            },
        ),
        migrations.CreateModel(
            name='TeacherImp',
            fields=[
                ('teacherid', models.IntegerField(db_column='Teacherid', primary_key=True, serialize=False)),
                ('implementationid', models.IntegerField(db_column='Implementationid')),
            ],
            options={
                'db_table': 'Teacher_Imp',
                'managed': False,
            },
        ),
        migrations.DeleteModel(
            name='Book',
        ),
        migrations.DeleteModel(
            name='Job',
        ),
    ]
