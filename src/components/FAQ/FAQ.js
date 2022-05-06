import React from 'react';

const FAQ = () => {
    return (
        <div>

            <div className="bg-red-100 shadow overflow-hispanen sm:rounded-lg">
                <div className="px-4 py-5 sm:px-6">
                    <h3 className="text-lg leading-6 font-medium text-gray-900">FAQ</h3>
                    <p className="mt-1 max-w-2xl text-sm text-gray-500">Pick some general questions</p>
                </div>
                <div className="border-t border-gray-200">
                    <div className="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                        <span className="text-sm font-medium text-gray-500">When will my order arrive?</span>
                        <span className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">We do our best to insure all orders are delivered within 48 hours of receiving payment, but please allow up  to 5days for delivery.

                            Exceptions : Pre-orders,Back-orders and Trade orders etc.</span>
                    </div>
                    <div className="bg-white px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                        <span className="text-sm font-medium text-gray-500">What are your payment options ?</span>
                        <span className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">We accept the following forms of payment:
                            <br />
                            <span> -- PayPal  </span>
                            <br />
                            <span> -- Debit /Credit Card</span>
                            <br />
                            <span> -- Cash</span>
                            <br />
                            <span> -- Bank transfer</span>
                            <br />
                            <span> -- All orders must be paid in full before fulfillment and delivery.</span>
                            <br />
                        </span>






                    </div>













                </div>
                <div className="border-t border-gray-200">
                    <div className="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                        <span className="text-sm font-medium text-gray-500">Can I pick up my online purchases in person to save on delivery fees?</span>
                        <span className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">This option is available to our trade customers only .

                        </span>
                    </div>
                    <div className="bg-white px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                        <span className="text-sm font-medium text-gray-500">Returns ? ?</span>
                        <span className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">If you are not completely satisfied with your purchase..simply return in its original condition with the receipt within 14 days of purchase. We will issue a refund asap


                            When  do items need to be returned by?


                            Items must be returned within 14 days of purchase.


                            Where do items need to be returned to ?

                            20 Western Parkway Business Centre Ballymount Dublin 12

                            How do customers return items?


                            Items must be returned in the condition in which they were received and in original packaging. Also it is recommended the item is returned by registered post as the customer is fully responsible for the item until it reaches our location.The return cost is customers responsibilty only. We will not accept returns if there is evidence the item has been used.


                            Shipping  for returns?


                            Shipping for returns is paid by the customer. In the case where an item is agreed to be defective or not the item ordered by the customer a new item will be issued in replacement, at cost to Gymless

                            In the case where an item is defective a replacement item will be issued. If the customer wishes they may receive a full refund.

                            . </span>
                    </div>













                </div>
            </div>

        </div >
    );
};

export default FAQ;