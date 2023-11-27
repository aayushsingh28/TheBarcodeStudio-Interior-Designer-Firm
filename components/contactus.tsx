import Map from './map';
import { Heading } from '@chakra-ui/core';
const Page = () => {
  const address = 'The barcode studio';
  return (
    <div>
      <Heading>Locate Us</Heading>
      <Map address={address} />
    </div>
  );
};
export default Page;