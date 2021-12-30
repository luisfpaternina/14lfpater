# -*- coding: utf-8 -*-
from odoo import models, fields, api, _
from odoo.exceptions import ValidationError

class ProjectTaskCategUdn(models.Model):
    _name = 'project.task.categ.udn'
    _inherit = 'mail.thread'
    _description = 'Category Udn OT'

    name = fields.Char(string="Name",tracking=True)
    code = fields.Char(string="Code",tracking=True)
    description = fields.Char(
        string="Description",
        tracking=True)
    

    @api.onchange('name')
    def _upper_name(self):        
        self.name = self.name.upper() if self.name else False