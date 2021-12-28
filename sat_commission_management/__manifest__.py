{
    'name': 'sat commission management',

    'version': '14.0.1',

    'author': "Process Control",

    'contributors': ['Luis Felipe Paternina'],

    'website': "https://www.processcontrol.es/",

    'category': 'commission',

    'depends': [

        'sale_management',
        'base',

    ],

    'data': [
       
        'security/security.xml',
        'security/ir.model.access.csv',
        'views/commissions_view.xml',
                   
    ],
    'installable': True
}
