import Head from 'next/head';

export default function BookingPage() {
  return (
    <>
      <Head>
        <script
          type="text/javascript"
          src="https://assets.calendly.com/assets/external/widget.js"
          async
        ></script>
      </Head>
      <div
        className="calendly-inline-widget"
        data-url="https://calendly.com/devtechfusion"
        style={{ minWidth: '320px', height: '700px' }}
      ></div>
    </>
  );
}
