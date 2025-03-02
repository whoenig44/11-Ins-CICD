interface AdvertisementProps {
  companyName: string;
  productDescription: string;
  price: string;
};

function Advertisement(props: AdvertisementProps) {
  return (
    <div className="advertisement">
      <p>{props.companyName}</p>
      <p>{props.productDescription}</p>
      <p>{props.price}</p>
      <p>Coding is testing your code</p>
    </div>
  );
}

export default Advertisement;
