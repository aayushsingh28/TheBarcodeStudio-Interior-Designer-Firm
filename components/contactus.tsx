import Map from './map';
import { Heading } from '@chakra-ui/core';
const Page = () => {
  const address = 'F, 1/22, Kotla Rd, near Veera Devi Jain Charitable Dispensary, Pocket 1, Sector 11, Rohini, New Delhi, Delhi, 110089';
  return (
    <div>
      <Heading>Locate Us</Heading>
      <Map address={address} />
    </div>
  );
};
export default Page;