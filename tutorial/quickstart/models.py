# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.db import models

# Create your models here.
class Job(models.Model):
	name = models.CharField(max_length=45)
	company = models.CharField(max_length=45)
	address = models.CharField(max_length=45)

	def __str__(self):
		return self.name

class Book(models.Model):
	title = models.CharField(max_length=45)
	author = models.CharField(max_length=45)
	

	def __str__(self):
		return self.title