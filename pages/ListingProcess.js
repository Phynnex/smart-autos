const ListingProcess = () => {
  return (
    <>
      <div>
        <h1 className="flex justify-center text-3xl font-extrabold pt-16">How Listing Works</h1>
        <p className="flex justify-center text-lg">
          Become a dealer and start selling your cars with Smart Auto in just 3 simple steps.
        </p>
      </div>
      <section className="flex justify-around mt-10 pb-16">
        <div>
          <div className="flex justify-center">
            <img src="https://i.imgur.com/zDE4wFQ.png" alt="Human sitting" />
          </div>
          <div>
            <h3 className="text-center text-xl font-semibold pt-10 pb-2">Sign up for Free</h3>
            <p className="text-center pl-10 pr-10">
              Once a transaction is successful, we can send your money by bank transfer, direct
              deposit, or other available methods.
            </p>
          </div>
        </div>
        <div>
          <div className="flex justify-center">
            <img src="https://i.imgur.com/GuPiTdf.png" alt="Human sitting" />
          </div>
          <div>
            <h3 className="text-center text-xl font-semibold pt-12 pb-2">Upload Car</h3>
            <p className="text-center pl-10 pr-10">
              Once a transaction is successful, we can send your money by bank transfer, direct
              deposit, or other available methods.
            </p>
          </div>
        </div>
        <div>
          <div className="flex justify-center">
            <img src="https://i.imgur.com/qUvKjJj.png" alt="Human sitting" />
          </div>
          <div>
            <h3 className="text-center text-xl font-semibold pt-12 pb-2">Get offers from Buyers</h3>
            <p className="text-center pl-10 pr-10">
              Once a transaction is successful, we can send your money by bank transfer, direct
              deposit, or other available methods.
            </p>
          </div>
        </div>
      </section>
    </>
  );
};
export default ListingProcess;
