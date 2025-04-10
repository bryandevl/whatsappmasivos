import axios from 'axios';

import { SchemaDto } from './dtos/excel.dto';
import dayjs from 'dayjs';

export const convertRows = (schema: SchemaDto[]) => {
	const newData = [];

	schema.forEach(e => {
		const dd = {};
		for (const key in e) {
			if (Object.prototype.hasOwnProperty.call(e, key)) {
				if (key === 'value') {
					dd[key] = d => d[e[key]];
					continue;
				}

				if (key === 'type') {
					switch (e[key]) {
						case 'string':
							dd[key] = String;
							break;
							case 'date':
    dd[key] = Date; // Cambiado a Date
    // Aquí agregamos una columna para la hora, minuto y segundo con dayjs
    dd['time'] = d => {
      const date = dayjs(d); // Usamos dayjs para manejar la fecha
      return `${date.hour()}:${date.minute()}:${date.second()}`;
    };
								break;
						case 'number':
							dd[key] = Number;
							break;
						case 'boolean':
							dd[key] = Boolean;
							break;
						default:
							dd[key] = String;
							break;
					}
				} else {
					dd[key] = e[key];
				}
			}
		}
		newData.push(dd);
	});

	return newData;
};






export const Headagentelog = [


	
	  {
		column: 'LLAMADAS',
		type: 'number',
		format: '',
		value: 'LLAMADAS',
		width: 10,
	  },
	
	  {
		column: 'CD',
		type: 'number',
		format: '',
		value: 'CD',
		width: 10,
	  },
	  {
		column: 'PDP',
		type: 'number',
		format: '',
		value: 'PDP',
		width: 10,
	  },
	  {
		column: '%CONV',
		type: 'string',
		format: '',
		value: '%CONV',
		width: 12,
	  },
	  {
		column: 'TIEMPO LOGUEO',
		type: 'time',
		format: 'HH:mm:ss',
		value: 'Tiempo_Logueo',
		width: 15,
	  },
	  {
		column: 'Wait',
		type: 'time',
		format: 'HH:mm:ss',
		value: 'Wait',
		width: 12,
	  },
	  {
		column: '%WAIT',
		type: 'string',
		format: '',
		value: '%Wait',
		width: 12,
	  },
	  {
		column: 'Talk',
		type: 'time',
		format: 'HH:mm:ss',
		value: 'Talk',
		width: 12,
	  },
	  {
		column: '%Talk',
		type: 'string',
		format: '',
		value: '%Talk',
		width: 12,
	  },
	  {
		column: 'ACW',
		type: 'time',
		format: 'HH:mm:ss',
		value: 'ACW',
		width: 12,
	  },
	  {
		column: '%ACW',
		type: 'string',
		format: '',
		value: '%ACW',
		width: 12,
	  },
	  {
		column: 'Pausa',
		type: 'time',
		format: 'HH:mm:ss',
		value: 'Pausa',
		width: 12,
	  },
	  {
		column: '%Pausa',
		type: 'string',
		format: '',
		value: '%Pausa',
		width: 12,
	  },
	  {
		column: 'Dead_Call',
		type: 'time',
		format: 'HH:mm:ss',
		value: 'Dead_Call',
		width: 12,
	  },
	  {
		column: '%Dead_Call',
		type: 'string',
		format: '',
		value: '%Dead_Call',
		width: 12,
	  },
	  {
		column: 'Avg_Talk',
		type: 'time',
		format: 'HH:mm:ss',
		value: 'Avg_Talk',
		width: 12,
	  },
	  {
		column: 'Avg_ACW',
		type: 'time',
		format: 'HH:mm:ss',
		value: 'Avg_ACW',
		width: 12,
	  },
	  {
		column: 'Avg_Wait',
		type: 'time',
		format: 'HH:mm:ss',
		value: 'Avg_Wait',
		width: 12,
	  },
	  {
		column: 'undefined',
		type: 'time',
		format: 'HH:mm:ss',
		value: 'undefined',
		width: 12,
	  },
	  {
		column: 'ANDIAL',
		type: 'time',
		format: 'HH:mm:ss',
		value: 'ANDIAL',
		width: 12,
	  },
	  {
		column: 'BREAK',
		type: 'time',
		format: 'HH:mm:ss',
		value: 'BREAK',
		width: 12,
	  },
	  {
		column: 'CAPA',
		type: 'time',
		format: 'HH:mm:ss',
		value: 'CAPA',
		width: 12,
	  },
	  {
		column: 'GES_M',
		type: 'time',
		format: 'HH:mm:ss',
		value: 'GES_M',
		width: 12,
	  },
	  {
		column: 'LAGGED',
		type: 'time',
		format: 'HH:mm:ss',
		value: 'LAGGED',
		width: 12,
	  },
	  {
		column: 'LOGIN',
		type: 'time',
		format: 'HH:mm:ss',
		value: 'LOGIN',
		width: 12,
	  },
	  {
		column: 'NXDIAL',
		type: 'time',
		format: 'HH:mm:ss',
		value: 'NXDIAL',
		width: 12,
	  },
	  {
		column: 'OMNI',
		type: 'time',
		format: 'HH:mm:ss',
		value: 'OMNI',
		width: 12,
	  },
	  {
		column: 'RRHH',
		type: 'time',
		format: 'HH:mm:ss',
		value: 'RRHH',
		width: 12,
	  },
	  {
		column: 'SOPO',
		type: 'time',
		format: 'HH:mm:ss',
		value: 'SOPO',
		width: 12,
	  },
	  {
		column: 'SSHH',
		type: 'time',
		format: 'HH:mm:ss',
		value: 'SSHH',
		width: 12,
	  },



]

export const Headuserlog =[

	{
		column: 'USUARIO',
		type: 'string',
		format: '',
		value: 'USUARIO',
		width: 50,
	  },
	  {
		column: 'IDENTIFICADOR',
		type: 'string',
		format: '',
		value: 'IDENTIFICADOR',
		width: 15,
	  },
	  {
		column: 'CAMPAÑA',
		type: 'string',
		format: '',
		value: 'CAMPAÑA',
		width: 9,
	  },
	  {
		column: 'Accesos',
		type: 'string',
		format: '',
		value: 'Accesos',
		width: 3,
	  },
	  {
		column: 'Expulsado',
		type: 'string',
		format: '',
		value: 'Expulsado',
		width: 3,
	  },
	  {
		column: 'Inicio_Logueo',
		type: 'string',
		format: '',
		value: 'Inicio_Logueo',
		width: 10,
	  },
	  {
		column: 'FIN_Logueo',
		type: 'string',
		format: '',
		value: 'FIN_Logueo',
		width: 10,
	  },



]









