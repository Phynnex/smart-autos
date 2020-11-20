import CheckCircleIcon from '@material-ui/icons/CheckCircle';

const ChooseSmartAutos = () => {
  return (
    <>
      <section className="flex justify-between">
        <div className="pr-16">
          <h1 className="text-3xl font-extrabold pt-10 pb-4">Why Choose Smart Autos</h1>
          <div className="flex pt-4">
            <CheckCircleIcon />
            <p className="pl-4 text-lg pb-2">
              From uploading your car to selling of your cars, Smart Autos make the whole process
              seemless and enjoyable.
            </p>
          </div>
          <div className="flex pt-4">
            <CheckCircleIcon />
            <p className="pl-4 text-lg pb-2">
              We have got your back - 24/7 dedicated support to ensure everything runs smoothly.
            </p>
          </div>
          <div className="flex pt-4">
            <CheckCircleIcon />
            <p className="pl-4 text-lg pb-2">
              You are in full control over how you decide to list.
            </p>
          </div>
          <div className="flex pt-4">
            <CheckCircleIcon />
            <p className="pl-4 text-lg pb-2">
              We put your listings in front of a wide range of interested buys.
            </p>
          </div>
        </div>
        <div>
          <h1 className="text-3xl font-extrabold pt-10 pb-4">Pricing and Commision</h1>
          <h5 className="text-2xl font-medium pb-1">Charge what you want</h5>
          <div>
            <div className="flex">
              <CheckCircleIcon />
              <p className="pl-4 text-lg pb-2">
                Our pricing structure allows you pick your price. This way you can list your
                properties competitively and get more requests.
              </p>
            </div>
            <h5 className="text-2xl font-medium pb-1">Commissions</h5>
            <div className="flex">
              <CheckCircleIcon />
              <p className="pl-4 text-lg pb-2">
                There is no cost for signin up, but listing a car generally attracts a 5% fee.
              </p>
            </div>
            <h5 className="text-2xl font-medium pb-1">Get paid after every Successful transaction</h5>
            <div className="flex">
              <CheckCircleIcon />
              <p className="pl-4 text-lg pb-2">
                Once a transaction is successful, we can send your money by bank transfer, direct
                deposit, or other available methods.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
export default ChooseSmartAutos;
