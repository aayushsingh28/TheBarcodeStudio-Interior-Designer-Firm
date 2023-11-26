import { Loader } from '@googlemaps/js-api-loader';

const loader = new Loader({
    apiKey: 'AIzaSyB5LeRzOIrqgWroQYQAvvtMUtEiwzd-UHs',
    version: 'weekly',
    libraries: ['places'],
  });
  export default loader;