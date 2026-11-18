# buscarhub-site

Marketing site for **Buscar ERP**, business software for Ghanaian SMEs. Static: no build step, no framework, no dependencies.

```
index.html          the page
assets/tokens.css   design tokens — the source of truth
assets/styles.css   layout and components
assets/motion.css   the looping product widgets
assets/app.js       nav, scroll reveal, loop pausing
assets/favicon.svg
DESIGN.md           the design stack, for aligning the app to the site
```

## Running it

Nothing to install.

```bash
python -m http.server 8765
```

Then open <http://127.0.0.1:8765/>.

## Design

See [DESIGN.md](DESIGN.md). Everything visual comes from `assets/tokens.css` —
import it and use the variables rather than retyping hex codes. The same tokens
are being applied to the Buscar ERP web app so the site and the product match.

## Content

Every figure on the page comes from the Buscar ERP documentation: the packages,
the SSNIT and PAYE rates, the batch and production behaviour, the supported
printer models, the Capacitor and PostgreSQL versions. No prices are shown,
because pricing is a business decision and is not in the code.

## Deployment

Deployed to the Buscar ERP server as plain static files behind Apache, with
Let's Encrypt for TLS. Hostnames, paths and the deploy and certificate scripts
are kept with the infrastructure, not in this repository.
