# Frontend-Backend Integration Checklist

## ✅ Step-by-Step Integration

### 1. Backend Setup
- [ ] Install Java 17+
- [ ] Install Maven
- [ ] Install MySQL
- [ ] Create database: `fitman_nation`
- [ ] Update `application.properties` with:
  - [ ] Database credentials
  - [ ] Razorpay keys
  - [ ] Google Analytics ID
  - [ ] JWT secret
- [ ] Run backend: `mvn spring-boot:run`
- [ ] Test: `http://localhost:8080/api/public/plans`

### 2. Frontend Integration
- [x] API service created (`src/services/api.js`)
- [x] Auth utilities created (`src/utils/auth.js`)
- [x] Razorpay script added to `index.html`
- [ ] Update API URL in `.env` or `api.js`
- [ ] Test API connection

### 3. Update Components
- [x] Contact form - integrated with API
- [x] Programs page - payment integration
- [x] Hero section - analytics tracking
- [ ] Add login/register page
- [ ] Add user dashboard (optional)

### 4. Test Integration
- [ ] Test user registration
- [ ] Test user login
- [ ] Test payment flow
- [ ] Test analytics tracking
- [ ] Test membership activation

### 5. Deployment
- [ ] Deploy backend to cloud
- [ ] Update frontend API URL
- [ ] Update CORS in backend
- [ ] Deploy frontend
- [ ] Test production flow

---

## Quick Start Commands

### Backend
```bash
cd Fitman-Backend
mvn clean install
mvn spring-boot:run
```

### Frontend (with backend)
```bash
# In frontend directory
npm install
npm run dev
```

### Test Connection
```bash
# Test backend
curl http://localhost:8080/api/public/plans

# Test from frontend
# Open browser console and run:
fetch('http://localhost:8080/api/public/plans')
  .then(r => r.json())
  .then(console.log)
```

---

## Environment Variables

### Frontend `.env`
```
VITE_API_URL=http://localhost:8080/api
```

### Backend `application.properties`
```
spring.datasource.url=jdbc:mysql://localhost:3306/fitman_nation
spring.datasource.username=root
spring.datasource.password=your_password
razorpay.key.id=your_key
razorpay.key.secret=your_secret
jwt.secret=your_jwt_secret
```

---

## Next Steps

1. **Start Backend:**
   ```bash
   cd Fitman-Backend
   mvn spring-boot:run
   ```

2. **Start Frontend:**
   ```bash
   npm run dev
   ```

3. **Test Integration:**
   - Open frontend: `http://localhost:5173`
   - Try registering a user
   - Try enrolling in a program
   - Check backend logs for API calls

4. **Deploy:**
   - Follow `DEPLOYMENT_GUIDE.md`
   - Deploy backend first
   - Update frontend API URL
   - Deploy frontend

---

**Integration is ready!** Start both servers and test the flow.



