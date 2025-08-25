# Wankers Ecommerce Starter (Next.js + Amplify-ready)

Minimal direct-to-consumer storefront with 3 products and hosted checkout links (Stripe Payment Links or Amazon Pay).

## Quickstart
1. **Install**  
   ```bash
   npm install
   npm run dev
   ```

2. **Edit products**  
   Update `data/products.json` with your real product names, prices, images, and `buyUrl` (from Stripe Payment Links or Amazon Pay).

3. **Replace images**  
   Drop product photos in `public/images/` and update the `image` paths.

4. **Deploy on AWS Amplify**
   - Push this project to GitHub (or your preferred Git provider).
   - In the AWS Console → Amplify → Hosting, connect the repo and pick the branch.
   - Amplify will build & deploy; add your custom domain and HTTPS in the Amplify console.

5. **Analytics & Pixels**
   - Add Google Analytics / Meta Pixel to `pages/_app.js` or via a tag manager when you're ready.

## Notes
- This MVP uses **hosted checkout** via `buyUrl` so you don’t need to build a cart or backend to take payments.
- Later, you can add a real cart and orders API with API Gateway + Lambda + DynamoDB.
