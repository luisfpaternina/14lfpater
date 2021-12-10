# -*- coding: utf-8 -*-
{
    'name': 'POS Customer Extend',

    'summary': "Customer in POS",

    'description': 'Customer in POS',

    'author': 'Coondev',

    'contributors': ['Luis Felipe Paternina'],

    'website': 'www.coondev.co',

    "support": "",

    'category': 'Point of Sale',

    'version': '13.0.0.1.0',

    'depends': ['point_of_sale','partner_ext'],

    'data': [
        'views/assets.xml',
        'views/pos_config_view.xml',
    ],
    'qweb': ['static/src/xml/*.xml'],

    'license': "OPL-1",

    'installable': True,
    
    'application': True,

}
