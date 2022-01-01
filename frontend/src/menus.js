
import { i18n } from 'boot/i18n.js';
import { StorageService } from './services/storage';
let locale = StorageService.getLocale();
if (locale) {
  i18n.locale = locale;
}

export const AppMenus = {
    
	navbarTopRightItems: [],
	navbarTopLeftItems: [],
	navbarSideLeftItems: [
  {
    "path": "/home",
    "label": i18n.t('home'),
    "icon": "las la-globe",
    "iconcolor": "",
    "target": "",
    "submenu": []
  },
  {
    "path": "/users",
    "label": i18n.t('users'),
    "icon": "las la-globe",
    "iconcolor": "",
    "target": "",
    "submenu": []
  },
  {
    "path": "/vessels",
    "label": i18n.t('vessels'),
    "icon": "las la-globe",
    "iconcolor": "",
    "target": "",
    "submenu": []
  }
],
	UsersTableHeaderItems: [
  {
    "label": i18n.t('id'),
    "align": "left",
    "sortable": false,
    "name": "id",
    "field": "id"
  },
  {
    "label": i18n.t('email'),
    "align": "left",
    "sortable": false,
    "name": "email",
    "field": "email"
  },
  {
    "label": i18n.t('username'),
    "align": "left",
    "sortable": false,
    "name": "username",
    "field": "username"
  },
  {
    "label": i18n.t('firstname'),
    "align": "left",
    "sortable": false,
    "name": "firstname",
    "field": "firstname"
  },
  {
    "label": i18n.t('lastname'),
    "align": "left",
    "sortable": false,
    "name": "lastname",
    "field": "lastname"
  },
  {
    "label": i18n.t('action'),
    "align": "right",
    "sortable": false,
    "name": "btnactions",
    "field": ""
  }
],
	emailItems: [    

    ],
	VesselsTableHeaderItems: [
  {
    "label": i18n.t('id'),
    "align": "left",
    "sortable": false,
    "name": "id",
    "field": "id"
  },
  {
    "label": i18n.t('code'),
    "align": "left",
    "sortable": false,
    "name": "code",
    "field": "code"
  },
  {
    "label": i18n.t('name'),
    "align": "left",
    "sortable": false,
    "name": "name",
    "field": "name"
  },
  {
    "label": i18n.t('action'),
    "align": "right",
    "sortable": false,
    "name": "btnactions",
    "field": ""
  }
],

    exportFormats: {
        print: {
			label: 'Print',
			color: 'blue',
            icon: 'las la-print',
            id: 'print',
            ext: '',
        },
        pdf: {
			label: 'Pdf',
			color: 'red',
            icon: 'las la-file-pdf',
            id: 'pdf',
            ext: 'pdf',
        },
        excel: {
			label: 'Excel',
			color: 'green',
            icon: 'las la-file-excel',
            id: 'excel',
            ext: 'xlsx',
        },
        csv: {
			label: 'Csv',
			color: 'teal',
            icon: 'las la-file-csv',
            id: 'csv',
            ext: 'csv',
        },
    },
    locales: {
  "fr": "French",
  "ru": "Russian",
  "zh_CN": "Chinese",
  "en": "English",
  "it": "Italian",
  "hi": "Hindi",
  "pt_PT": "Portuguese",
  "de": "German",
  "es": "Spanish",
  "ar": "Arabic"
}
}