import { availableSatutes } from '../settings/available-statutes.js';

export const statutes = {
    name: 'statutes',
    label: 'Satuts',
    widget: 'select',
    options: availableSatutes,
    required: true
}