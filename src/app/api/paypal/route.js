import paypal from "@paypal/checkout-server-sdk";
import { calculateTotalCost, getNodesInfo } from "@/lib/appwrite/paymentFunctions";

// 🔹 Configure PayPal environment
const environment = new paypal.core.SandboxEnvironment( // use LiveEnvironment in production
    // "AbRyAGAwVctsD1myC-vRS_1owpHv8w8Rg2grzlcPmnv9OgFFL9M_UD48RCzR_WmC7yCcTgcvgL4nJRBJ",// client id
    process.env.NEXT_PUBLIC_PAYPAL_CLIENTID,
    process.env.NEXT_PUBLIC_PAYPAL_SECRET //paypal secret
  );
  const client = new paypal.core.PayPalHttpClient(environment);

export async function POST(req) {
    try {
        const body = await req.json(); // Parse the request body correctly
        // console.log('BOYD>>>>',body);
        
        // CHECK IF quantity is NOT ABOVE 10
        if(body.quantity < 1 || body.quantity > 10) {
            return new Response(JSON.stringify({ error: "Quantitiy must be between 1-10." }), {
                status: 500,
                headers: { "Content-Type": "application/json" },
            }); 
        }
        // const nodesInfo = await getNodesInfo();
        // const totalCost = calculateTotalCost(nodesInfo,body.quantity);

        // 🔹 Create PayPal order request
        const request = new paypal.orders.OrdersCreateRequest();
        request.requestBody({
        intent: "CAPTURE",
        purchase_units: [
            {
            amount: {
                currency_code: "USD",
                value: body.totalCost, 
                // value: totalCost.toFixed(2),
            },
            },
        ],
        });

        // 🔹 Execute PayPal order request
        const order = await client.execute(request);

        return new Response(JSON.stringify({ orderID: order.result.id }), {
            status: 200,
            headers: { "Content-Type": "application/json" },
        });
    } catch (error) {
        console.log(error);
        
        return new Response(JSON.stringify({error:"Internal Server Error!" }), {
            status: 500,
            headers: { "Content-Type": "application/json" },
        });
    }
}
