# Upload BrightBridge to o2switch

The zip contains the finished website as plain HTML, CSS and JavaScript.
No Node.js, database or PHP is needed on the server.

## Steps (cPanel File Manager)

1. Log in to your o2switch cPanel and open **File Manager** (Gestionnaire de fichiers).
2. Open the folder for the website:
   - main domain: `public_html`
   - subdomain or other domain: the folder you chose when you created it in cPanel.
3. If the folder already contains an old site, back it up or empty it first.
4. Click **Upload** (Charger) and upload `brightbridge-language-school-o2switch.zip`.
5. Back in File Manager, right-click the zip and choose **Extract** (Extraire) into the same folder.
6. Check that `index.html`, the `_next` folder and the `.htaccess` file are directly inside the folder,
   not inside an extra sub-folder. (Turn on **Settings → Show Hidden Files** to see `.htaccess`.)
7. Delete the zip from the server.
8. Make sure SSL is active for the domain (cPanel → **SSL/TLS Status** → AutoSSL). The `.htaccess`
   redirects every visitor to `https://`.

## Test

Open the site and check: Home, About, Courses (try the filters), Student Life, Contact (try the form),
a wrong address such as `/abc` (shows the 404 page) and `/sitemap.xml`.

## Web address

This build uses the placeholder address `https://brightbridge-language-school.vercel.app` for the
sitemap, canonical links and share image. When the real address is known, rebuild with it:

```bash
NEXT_PUBLIC_SITE_URL=https://your-real-domain npm run build && npm run zip
```

(On Windows PowerShell: `$env:NEXT_PUBLIC_SITE_URL="https://your-real-domain"; npm run build; npm run zip`)
