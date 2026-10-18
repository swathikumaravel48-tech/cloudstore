# CloudStore architecture

## Current deployment (live)
```
Developer ──git push──▶ GitHub repo (main)
                           │
                  GitHub Actions workflow
        ┌──────────────────┼───────────────────┐
   Validate HTML/JS   Lighthouse check     Deploy
   (htmlhint, node)   (accessibility,        │
                       SEO, performance)     ▼
                                      GitHub Pages ◀── Browser
```
Every push to `main` is validated, quality-checked and published automatically.
If validation fails, nothing is deployed.

## AWS S3 hosting design (documented, not deployed)
This is the design for hosting the same site on AWS. It is a reference design only.
```
Browser ──▶ CloudFront (HTTPS, CDN) ──▶ S3 bucket (private, static files)
                                         ▲
                       IAM user (least privilege) ◀── GitHub Actions deploy
```
- S3 static website hosting with `index.html` and `error.html`
- Bucket policy: see `aws-s3-design/bucket-policy.json`
- IAM deploy user limited to `s3:PutObject`, `s3:DeleteObject`, `s3:ListBucket` on the one bucket
- CloudFront with Origin Access Control so the bucket stays private
