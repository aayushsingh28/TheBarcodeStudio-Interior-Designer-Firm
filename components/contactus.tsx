import Map from './map';
import { Heading } from '@chakra-ui/core';
const Page = () => {
  const address = 'F-1 / 22 sector 11 near Shree Balaji Mandir, Rohini, Delhi, 110085';
  return (
    <div>
      <Heading>Locate Us</Heading>
      <Map address={address} />
    </div>
  );
};
export default Page;