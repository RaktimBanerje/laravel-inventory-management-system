require('./bootstrap');

import React from 'react'
import { render } from 'react-dom'
import { createInertiaApp } from '@inertiajs/inertia-react'
import { InertiaProgress } from '@inertiajs/progress'
import 'react-toastify/dist/ReactToastify.css';
import "flatpickr/dist/flatpickr.css";
import "flatpickr/dist/themes/material_red.css";

createInertiaApp({
  resolve: name => require(`./Pages/${name}`),
  setup({ el, App, props }) {
    render(<App {...props} />, el)
  },
})

InertiaProgress.init({ color: '#4B5563' });