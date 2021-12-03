from odoo import models, fields, api, _
from odoo.exceptions import ValidationError
import logging
import re

class ResPartner(models.Model):
    _inherit = 'res.partner'

    @api.constrains('phone')
    def validate_phone(self):
        for rec in self:
            if rec.phone:
                if len(rec.phone) < 6 or re.match(r"^[a-zA-Z][ a-zA-Z]*", rec.phone):
                    raise ValidationError('El número de télefono no puede contener letras')


    @api.constrains('email')
    def validate_email(self):
        for rec in self:
            if rec.email:
                if not re.match("^.+\\@(\\[?)[a-zA-Z0-9\\-\\.]+\\.([a-zA-Z]{2,3}|[0-9]{1,3})(\\]?)$", rec.email):
                    raise ValidationError('Error en formato del correo')
