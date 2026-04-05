# Brand Promo Animation Template

This is a dynamic, cinematic web animation template. It creates a sleek, premium dark-mode promo video spanning exactly 10 seconds. You can customize the entire animation by editing a single config file and then screen recording the animation.

## How to Customize for Different Products

All the text and images read from the `config.js` file. 
Open `config.js` in a text editor to update your scene data.

1. **scene1.image**: Replace with the path to your product image (e.g., "my_new_product.png").
2. **Title, Subtitle, Tagline**: Update the strings to match your new product name and branding.
   
The code automatically injects these into the webpage upon loading.

## How to Record Your Custom Videos

Once you've changed `config.js`:
1. Start a local server. If you have Python installed, open the terminal in this folder and run:
   `python -m http.server 8080`
2. Open your web browser and go to `http://localhost:8080`.
3. The 10-second animation will play automatically as soon as the page loads.
4. Use a screen recorder (like OBS, QuickTime, or Windows Game Bar) to capture your screen for exactly 10 seconds.

## Deploying to GitHub Sites
If you push this repository to GitHub, you can activate GitHub Pages in the repository settings to get a live URL of your animation, making it easy to run and record from anywhere!
