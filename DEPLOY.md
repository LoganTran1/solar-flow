# 🚀 GitHub Pages Deployment Guide

## Quick Setup (5 minutes)

### 1. **Create GitHub Repository**
1. Go to [GitHub](https://github.com) and sign in
2. Click **"New repository"** or go to: https://github.com/new
3. Name it: `solarflow-demo` (or any name you prefer)
4. Make it **Public** (required for free GitHub Pages)
5. ✅ Check **"Add a README file"**
6. Click **"Create repository"**

### 2. **Upload Your Files**
1. In your new repo, click **"uploading an existing file"**
2. Drag and drop ALL files from `C:\Users\Logan.Tran\Desktop\solarflow-demo\`
3. Add commit message: `Initial solar flow website`
4. Click **"Commit changes"**

### 3. **Enable GitHub Pages**
1. Go to **Settings** tab in your repository
2. Scroll down to **"Pages"** in the left sidebar
3. Under **"Source"**, select **"Deploy from a branch"**
4. Choose **"main"** branch and **"/ (root)"** folder
5. Click **"Save"**

### 4. **Your Site is Live! 🎉**
- **URL**: `https://logantran1.github.io/solarflow-demo`
- **Hero Page**: Default homepage (index.html)
- **Flow Page**: /flow.html

---

## File Structure for GitHub Pages

```
Repository Root:
├── index.html              # 🏠 Hero landing page (homepage)
├── flow.html              # 📋 6-step qualification flow  
├── satellite-image-flow.png  # 🛰️ Satellite imagery
├── README.md              # 📖 Documentation
├── DEPLOY.md             # 🚀 This deployment guide
└── .gitignore            # 🚫 Git ignore rules
```

## 🔧 Custom Domain (Optional)

### Add Custom Domain
1. In **Settings → Pages**
2. Enter your domain in **"Custom domain"**
3. ✅ Check **"Enforce HTTPS"**
4. Update your domain's DNS:
   ```
   Type: CNAME
   Host: www (or @)
   Value: logantran1.github.io
   ```

## 📊 Monitoring & Analytics

### Add Google Analytics
Insert before `</head>` in both files:

```html
<script async src="https://www.googletagmanager.com/gtag/js?id=GA_MEASUREMENT_ID"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'GA_MEASUREMENT_ID');
</script>
```

### GitHub Pages Analytics
- View traffic in **Settings → Pages**
- Monitor visitor stats and popular pages
- Track performance over time

## 🚨 Troubleshooting

### Site Not Loading?
- Wait 5-10 minutes for first deployment
- Check **Actions** tab for build errors
- Ensure repository is **Public**

### Custom Domain Issues?
- Verify DNS propagation (24-48 hours)
- Check CNAME file in repository root
- Ensure HTTPS is enforced

### Updates Not Showing?
- Hard refresh: `Ctrl + F5` (Windows) or `Cmd + Shift + R` (Mac)
- GitHub Pages has ~10 minute cache
- Check **Actions** tab for latest deployment

## 🔄 Making Updates

### Method 1: GitHub Web Interface
1. Click on file to edit (index.html or flow.html)
2. Click pencil icon ✏️ to edit
3. Make changes
4. Commit with message
5. Wait ~5 minutes for changes to go live

### Method 2: Git Command Line
```bash
git clone https://github.com/LoganTran1/solarflow-demo.git
cd solarflow-demo
# Make your changes
git add .
git commit -m "Update solar flow"
git push origin main
```

---

**🌟 Your professional solar marketing website is now live and ready to generate leads!**

**Next Steps:**
1. ✅ Test the full user flow
2. 📊 Add analytics tracking  
3. 🎨 Customize branding/colors
4. 🔗 Update final redirect URL
5. 📱 Test on mobile devices
