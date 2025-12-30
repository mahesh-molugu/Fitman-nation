# ⚡ Quick Backend Deployment - 3 Steps

## 🎯 Fastest Way: Railway (5 minutes)

### Step 1: Push Backend to GitHub

```bash
# Navigate to backend
cd ../Fitman-Backend 

# Initialize git (if not done)
git init
git add .
git commit -m "FitMan Nation Backend - Ready for deployment"

# Create repo on GitHub, then:
git remote add origin https://github.com/mahesh-molugu/Fitman-Backend.git
git branch -M main
git push -u origin main
```

### Step 2: Deploy on Railway

1. **Visit**: https://railway.app
2. **Sign up** with GitHub
3. **New Project** → **Deploy from GitHub repo**
4. **Select** `Fitman-Backend` repository
5. Railway **auto-detects** Spring Boot and starts deploying

### Step 3: Configure

1. **Add MySQL Database**:
   - Click **"New"** → **"Database"** → **"MySQL"**
   - Railway provides connection details

2. **Set Environment Variables** (in Variables tab):
   ```
   SPRING_DATASOURCE_URL=<railway-mysql-url>
   SPRING_DATASOURCE_USERNAME=root
   SPRING_DATASOURCE_PASSWORD=<railway-password>
   RAZORPAY_KEY_ID=rzp_test_xxxxx
   RAZORPAY_KEY_SECRET=xxxxx
   JWT_SECRET=<random-32-chars>
   GOOGLE_ANALYTICS_TRACKING_ID=G-XXXXXXXXXX
   ```

3. **Get Backend URL**:
   - Settings → Networking → Generate Domain
   - Copy URL: `https://your-app.railway.app`

4. **Test**: Open `https://your-app.railway.app/api/public/plans`

---

## 🔑 Get API Keys (5 minutes)

### Razorpay (2 minutes)
1. Go to: https://dashboard.razorpay.com/
2. Sign up/Login
3. Settings → API Keys → Generate Test Keys
4. Copy Key ID and Secret

### Google Analytics (2 minutes)
1. Go to: https://analytics.google.com/
2. Create account/property
3. Get Measurement ID (G-XXXXXXXXXX)

### JWT Secret (1 minute)
```bash
# Generate secure secret
openssl rand -base64 32
```

---

## ✅ Update Frontend

After backend is live:

1. **Update API URL** in `src/services/api.js`:
   ```javascript
   const API_BASE_URL = 'https://your-app.railway.app/api'
   ```

2. **Rebuild and deploy**:
   ```bash
   npm run build
   npm run deploy
   ```

---

## 🎉 Done!

Your backend is now live and frontend is connected!

**Test it:**
- Frontend: https://mahesh-molugu.github.io/Fitman-nation
- Backend: https://your-app.railway.app/api/public/plans

---

**Need help?** See `BACKEND_DEPLOYMENT_STEPS.md` for detailed instructions.


